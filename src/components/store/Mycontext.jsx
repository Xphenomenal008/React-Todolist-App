import { createContext, useContext } from "react";

const Mycontext=createContext({
    Tasks:[],
    edit:()=>{},
    delete:()=>{}

})

export default Mycontext