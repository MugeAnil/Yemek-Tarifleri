import { createContext, useReducer } from "react";
import themeReducer from "../reducers/themeReducer";

 const ThemeContext = createContext('');

export default ThemeContext ;

export function ThemeProvider({children}){
    //const [color,setColor] =  useState('danger');
    const [state,dispatch] =  useReducer(themeReducer, {color:"warning", mode:"dark"})


    const changeColor = (value) => {
        //setColor(value);
        dispatch ({ type: "CHANGE_COLOR" , payload:value })
    }

    const changeMode = (value) => {
        dispatch ({ type: "CHANGE_MODE" , payload:value })

    }
    //return <ThemeContext.Provider value={{color: 'warning'}} >{children}</ThemeContext.Provider>
    return <ThemeContext.Provider value={{...state,changeColor,changeMode}} >
                {children}
            </ThemeContext.Provider>

}