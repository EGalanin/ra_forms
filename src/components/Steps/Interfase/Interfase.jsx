import { useState } from "react";
import Form from "../Form";
import Item from "../Item";
import moment from 'moment';
import './interfase.css';

export default function Interface() {
    const [trainingData, setTrainingData] = useState(JSON.parse(localStorage.getItem("items")) ?? []);

    const addItem = (data) => {
        const updatedTrainingData = [...trainingData];

        if(updatedTrainingData.some(item => item.date === data.date)) {
            for (const item of updatedTrainingData){
                if(item.date === data.date){
                    item.distance = Number(item.distance) + Number(data.distance)
                }
            }
        } else {
            updatedTrainingData.push(data);
            updatedTrainingData.sort((a, b) => moment(b.date, 'YYYY-MM-DD') - moment(a.date, 'YYYY-MM-DD'))
        }

        setTrainingData(updatedTrainingData);
        localStorage.setItem("items", JSON.stringify(updatedTrainingData));
    };

    const deleteItem = (i) => {
        const items = trainingData.filter(item => item.id !== i);
        setTrainingData(items);
        localStorage.setItem("items", JSON.stringify(items));
    }
    
    const RecordsDesk = () => {
        return (
            trainingData.map(item => <Item key={item.id} item={item} handleClick={() => deleteItem(item.id)} />)
        );
    }

    const RecordsDeskEmpty = () => {
        return (
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
        )
    }

    return (
        <>
          <Form addItemFunc={addItem} />
          <table className="page__records records">
            <thead>
              <tr>
                <th className="records__head">Дата (ДД.ММ.ГГГГ)</th>
                <th className="records__head">Пройдено км</th>
                <th className="records__head">Действия</th>
              </tr>
            </thead>
    
            <tbody>
              {
                trainingData.length > 0 ? <RecordsDesk /> : <RecordsDeskEmpty />
              }
            </tbody>
          </table>
        </>
      );
}