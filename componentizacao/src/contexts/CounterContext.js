import { createContext, useState } from "react";

export const CounterContext = createContext(null);

const initialValues = 0;


export const CounterProvider = ({ children }) => {

    const [counter, setCounter] = useState(initialValues);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);

    return (
        <CounterContext.Provider value={{
            counter,
            increment,
            decrement
        }}>
            {children}
        </CounterContext.Provider>
    )
}


