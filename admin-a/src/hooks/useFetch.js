import { useEffect, useState } from "react";
import axios from 'axios';
const useFetch = (url) => {
    const BASE_URL=`http://localhost:8000/api`;
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
 
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
               const response = await axios.get(`${BASE_URL}${url}`);
               console.log(response);
               setData(response.data);
            }catch(err){
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    },[url]);
    
    
    const reFetch = async () => {
        setLoading(true);
       try{
          const res = await axios.get(`${BASE_URL}${url}`);
          setData(res.data);
       }catch(err){
        setError(true);
       }
       setLoading(false);
    };
    return {data,loading,error,reFetch}
};

export default useFetch;