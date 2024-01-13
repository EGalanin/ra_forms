import React from 'react';
import Hex2rgb from './components/Hex@rgb/Hex2rgb';
// import Steps from './components/Steps';
import './App.css';

function App(): JSX.Element {
  return (
    <div className={'wrapper'}>
      <header className={'header'} id={'header'}>
        <div className={'header__body _container'}>
          <h2 className={'header__title'}>4. Домашнее задание к лекции «Формы»</h2>
        </div>
      </header>

      <main className={'main'}>
        <div className={'main__item task _container'} id={'task1'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>4.1. Конвертер цветов</h3>
            <nav className={'task__menu menu'}>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-bottom'} href={'#task2'}>
                  <span className={'_visually-hidden'}>next task</span>
                </a>
              </div>
            </nav>
          </header>
          <div className={'task__body'}>
            <Hex2rgb backgroundColor='#f0f0f0' />
          </div>
        </div>

        {/* <div className={'main__item task _container'} id={'task2'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>4.2. Учёт тренировок</h3>
            <nav className={'task__menu menu'}>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-top'} href={'#header'}>
                  <span className={'_visually-hidden'}>previous task</span>
                </a>
              </div>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-bottom'} href={'#task3'}>
                  <span className={'_visually-hidden'}>next task</span>
                </a>
              </div>
            </nav>
          </header>
          <div className={'task__body task__body_task2'}>
            <Steps />
          </div>
        </div> */}
      </main>
    </div>
  );
}

export default App;
