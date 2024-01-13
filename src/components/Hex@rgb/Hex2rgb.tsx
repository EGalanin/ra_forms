import React, { useState } from "react";
import './Hex2rgb.css';

interface ColorConverterProps {
    backgroundColor: string;
}

const Hex2rgb: React.FC<ColorConverterProps> = ({ backgroundColor }) => {
    const [hexColor, setHexColor] = useState<string>('');
    const [rgbColor, setRgbColor] = useState<string | null>(null);
    const [hasError, setHasError] = useState<boolean>(false);

    const handleHexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setHexColor(inputValue);
        if (/^#[0-9A-Fa-f]{6}$/.test(inputValue)) {
            const r = parseInt(inputValue.slice(1, 3), 16);
            const g = parseInt(inputValue.slice(3, 5), 16);
            const b = parseInt(inputValue.slice(5, 7), 16);
            setRgbColor(`rgb(${r}, ${g}, ${b})`);
            setHasError(false);
        } else {
            setRgbColor(null);
            setHasError(true);
        }
    };

    const backgroundColorStyle = {
        backgroundColor: hasError ? 'red' : rgbColor !== null ? rgbColor : backgroundColor,
    };

    return (
        <div className="color-converter" style={backgroundColorStyle}>
            <div className="converter-container">
                <label htmlFor="hexInput">Введите цвет (HEX):</label>
                <input
                    type="text"
                    id="hexInput"
                    value={hexColor}
                    onChange={handleHexChange}
                    maxLength={7}
                />
                {rgbColor !== null && <p>RGB: {rgbColor}</p>}
                {rgbColor === null && hexColor.length === 7 && <p>Ошибка!</p>}
            </div>
        </div>
    );
};

export default Hex2rgb;