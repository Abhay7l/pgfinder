import { useContext, useState } from "react"
import axios from "axios";
import { RegisterContext } from "../../context/Register";
const Register = () => {
    const [credentials,setCreadentials] = useState({
        username:undefined,
        email:undefined,
        password:undefined,
    });

    const {dispatch,error,loading} = useContext(RegisterContext)

    const handleChange = (e) => {
        setCreadentials((prev) => ({
            ...prev,
            [e.target.id]:e.target.value
        }));
    };


    const handleClick = async (e) => {
        e.preventDefault();
        try{
            await axios.post('auth/register',credentials);
            // dispatch({type:"REGISTER",payload:res.data});
        }catch(err){
            console.error("err");
        }
    }


    return (
        <div className="register">
            <input type="text" placeholder="username" onChange={handleChange}/>
            <input type="email" placeholder="email" onChange={handleChange}/>
            <input type="password" placeholder="password" onChange={handleChange}/>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}


export default Register;