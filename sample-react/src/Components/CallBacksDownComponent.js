import React, { useState } from 'react';

const Increment = ({handleInc}) => {
    return <button onClick={handleInc}>Increment</button>
}

const Decrement = ({handleDec}) => {
    return <button onClick={handleDec}>Decrement</button>
}

const Actions = ({handleIncrement, handleDecrement}) => {
    return (
        <>
            <Increment handleInc={handleIncrement} />
            <Decrement handleDec={handleDecrement} />
        </>
    );
}

const CallBacksDownComponent = ({initialValue}) => {

    const [ increment, setIncrement ] = useState(initialValue);

    const handleIncrement = () => {
        setIncrement(increment + 1);
    }

    const handleDecrement = () => setIncrement(increment - 1);

    return (
        <div>
            Values: {increment}
            <Actions handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
        </div>
    )
}

export default CallBacksDownComponent;
