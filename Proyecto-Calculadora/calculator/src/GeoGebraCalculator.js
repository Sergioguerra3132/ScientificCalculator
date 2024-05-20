import React, { useState } from 'react';

const GeoGebraCalculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const handleButtonClick = (button) => {
        if (button === '=') {
            try {
                setResult(eval(input)); // Evalúa la expresión ingresada
            } catch (error) {
                setResult('Error');
            }
        } else if (button === 'C') {
            setInput('');
            setResult(null);
        } else {
            setInput(input + button);
        }
    };

    return (
        <div>
            <h1>Calculadora Científica</h1>
            <iframe
                title="GeoGebra Scientific Calculator"
                src="https://www.geogebra.org/scientific?lang=en"
                width="600"
                height="800"
                style={{ border: '0', marginTop: '20px' }}
            ></iframe>
        </div>
    );
};

export default GeoGebraCalculator;
