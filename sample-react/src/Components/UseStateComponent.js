import React, { useState } from 'react';

const UseStateComponent = ({initialValue}) => {

    const [clicks, setClicks] = useState(0);
    const [disable, setDisable] = useState(false);

    const handleOnClick = () => setClicks(clicks + 1);
    const handleDisable = () => setDisable(!disable);

    const [increment, setIncrement] = useState(initialValue);
    const [prevValue, setPrevValue] = useState(null);

    const handleIncrement = () => {
        setPrevValue(increment);
        setIncrement(increment + 1);
    }

    const handleDecrement = () => {
        setPrevValue(increment);
        setIncrement(increment - 1);
    }

    const handleReset = () => {
        setPrevValue(null);
        setIncrement(initialValue);
    }

    const handleUndo = () => {
        setIncrement(prevValue);
        setPrevValue(null);

    }

    return (
        <div>
            <h3>useState Concept</h3>
            {clicks}
            <div>
                <button onClick={handleOnClick} disabled={disable}>Click</button>
                <button onClick={handleDisable}>Disable / Enable</button>
            </div>
            <div>
                {increment}
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleUndo}>Undo</button>
            </div>
        </div>
    )


}

export default UseStateComponent;