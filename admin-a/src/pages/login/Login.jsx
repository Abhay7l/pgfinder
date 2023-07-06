import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { AuthContext } from "../../context/AuthContext";
import './login.scss'
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
            if(res.data.isAdmin){
                console.log("admin login")
                dispatch({type:"LOGIN_SUCCESS",payload:res.data.details});
                navigate("/");
            }else{
                dispatch({type:"LOGIN_FAILURE",payload:{message:"You are not allowed!"}});
            }
            
        }catch(err){
            dispatch({type:"LOGIN_FAILURE",payload:err.response.data});
        }
    }
    // console.log(user);
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