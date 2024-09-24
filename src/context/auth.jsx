import { createContext, useState } from "react";

export const AuthContext = createContext({})

const AuthProvider = ({children}) =>{

    const [ user, setUser] = useState({})
    const validarForm = (name, surname, email, password, confirmepassword, tel)=>{
            if(name && surname && email && password && confirmepassword && tel){
                setUser({
                    name, surname, email, password, confirmepassword, tel
                })
            }
    }
    
    return(
        <AuthContext.Provider value={{validarForm}}>
                {children}
        </AuthContext.Provider> 
    )
}
export default AuthProvider