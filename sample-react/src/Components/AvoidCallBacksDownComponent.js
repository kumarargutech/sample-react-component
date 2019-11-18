import React, {useReducer, createContext, useContext} from 'react';

const reducer = (state, action) => {
    switch(action.type) {
        case "increment":
            return {
                clicks: state.clicks + 1
            }
        case "decrement":
            return {
                clicks: state.clicks -1
            }
        default:
            return state.clicks;
    }
}

const ComponentContext = createContext(null);

const AvoidCalBacksDownCompoenent = () => {

    const [ state, dispatch ] = useReducer(reducer, {clicks: 0});

    return(
        <ComponentContext.Provider value={dispatch}>
            <h2>AvoidCalBacksDownCompoenent</h2>
            {state.clicks}
            <Actions />
        </ComponentContext.Provider>
    );
}

const Increment = () => {
    const dispatch = useContext(ComponentContext);
    return (
        <div>
            <button onClick={() => dispatch({type: "increment"})}>Increment</button>
        </div>
    );
}

const Decrement = () => {
    const dispatch = useContext(ComponentContext);
    return (
        <div>
            <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
        </div>
    )
}

const Actions = () => {
  return (
        <div>
            <Increment />
            <Decrement />
        </div>
  );
}

export default AvoidCalBacksDownCompoenent;