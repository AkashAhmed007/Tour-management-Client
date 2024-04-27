import { useContext } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
const ProtectedRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(!user){
        return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
    }
    if(loading){
        return <h1 className="text-4xl text-center text-green-700 mt-40">Loading....</h1>
    }
   
    return (
        <div>
            {children}
        </div>
    );
};
ProtectedRoute.propTypes = {
    children: PropTypes.object
}

export default ProtectedRoute;