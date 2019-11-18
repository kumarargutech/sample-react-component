import React, { useReducer } from 'react';


const UseReducerComponent = ({initialValue}) => {

const handleInc = ({clicks}) => {
    return {
            prevValue: clicks,
            clicks: clicks + 1
        }
}

const reducer = (state, action) => {
    switch(action.type) {
        case "increment":
            return handleInc(state);

        case "decrement":
            return {
                prevValue: state.clicks,
                clicks: state.clicks - 1
            }
        case "reset":
            return {
                clicks: initialValue,
                prevValue: null
            }
        case "undo":
            return {
                clicks: state.prevValue,
                prevValue: null
            }
        default:
            break;
    }
}

    const [state, dispatch] = useReducer(reducer, {clicks: initialValue, prevValue: null});

    const handleIncrement = () => {
        dispatch({type: "increment"});
    }

    const handleDecrement = () => {
        dispatch({type: "decrement"});
    }

    const handleReset = () => {
        dispatch({type: "reset"});
    }

    const handleUndo = () => {
        dispatch({type: "undo"});
    }

    return (
        <div>
            <h3>Use Reducer Concept</h3>
            {state.clicks}
            <div>

                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleUndo}>Undo</button>
            </div>
        </div>
    )


}

export default UseReducerComponent;