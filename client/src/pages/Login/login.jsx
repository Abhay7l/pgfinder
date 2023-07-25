import { useContext,useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import './login.scss'
import { BASE_URL } from "../../constant";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [credentials,setCreadentials ] = useState({
        username:undefined,
        password:undefined,
    });

    const {loading,error,dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setCreadentials((prev) => ({
            ...prev,
            [e.target.id]:e.target.value
        }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post(`${BASE_URL}/auth/login`,credentials);
            dispatch({type:"LOGIN_SUCCESS",payload:res.data.details});
            navigate("/");
        }catch(err){
            dispatch({type:"LOGIN_FAILURE",payload:err.response.data});
        }
    }
    // console.log(`user  :  ${credentials}`);
    return (
        <div className="login">
            <div className="lContainer">
                <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput"/>
                <input type="text" placeholder="password" id="password" onChange={handleChange} className="lInput"/>
                <button disabled={loading} onClick={handleClick} className="lButton">Login</button>
                {error && <span>error %%%% {error.message}</span>}
            </div>
        </div>
    )

}

export default Login;