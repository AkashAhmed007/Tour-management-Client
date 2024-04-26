import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebaseConfig";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const FirebaseProvider = ({children}) => {

    const createUser =(email,password,userName,photoURL)=>{
        return createUserWithEmailAndPassword(auth, email, password,userName,photoURL)
     }

     const allValues = {
        createUser
     }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};
FirebaseProvider.propTypes = {
    children: PropTypes.object
}
export default FirebaseProvider;