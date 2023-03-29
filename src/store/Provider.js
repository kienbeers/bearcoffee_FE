import { useReducer } from "react";
import Context from "./Context";
import reducer, { initState } from "./Reducer";
import logger from "./Logger";

function Provider({ children }) {
    const [state, dispath] = useReducer(logger(reducer), initState);
    return (
        <Context.Provider value={[state, dispath]}>
            {children}
        </Context.Provider>
    )
}
export default Provider;