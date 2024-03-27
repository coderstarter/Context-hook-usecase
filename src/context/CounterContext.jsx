import React, { useContext, useState }  from "react";
const CounterContext = React.createContext(0);


export const useCounter = () => {
    const value = useContext(CounterContext);
    return value;
}

const CounterProvider = (props) => {
    const [count, setCount] = useState(0);
    return(
        <CounterContext.Provider value={{count, setCount}}>
            {props.children}
        </CounterContext.Provider>
    )
}

export default CounterProvider;
// or { object }