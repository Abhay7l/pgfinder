import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import './featured.styles.scss';
import axios from 'axios';
const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );
  // const [loading,setLoading] = useState(false);
  // const  [data,setData] = useState([]);
  // useEffect(()=>{
  //   try{
  //       const response = axios.get('http://localhost:8000/api/hotels/countByCity?cities=Berlin,Madrid,London')
  //       setData(response.data);
  //       console.log(response.data);
  //   }catch(err){
  //     console.log(err);
  //   }
  // })
  // const {sdata} = data;
  // const response = await axios.get('')
  console.log(data);
    return (
      <div className="featured">
      <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Indore</h1>
            <h2>{data[0]} properties</h2>
          </div>
        </div>
        
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Gwalior</h1>
            <h2>{data[1]} properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Ujjain</h1>
            <h2>{data[2]} properties</h2>
          </div>
        </div>
        
      </div>
    );
  };
  
  export default Featured;