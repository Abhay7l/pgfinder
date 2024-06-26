import { useContext, useState } from "react";
import axios from "axios";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BASE_URL } from "../../constant";
import { SearchContext } from "../../context/SearchContext";
import useFetch from '../hooks/useFetch';
import "./reserve.styles.scss";
import { useNavigate } from "react-router-dom";
const Reserve = ({setOpen,hotelId}) => {
   const [selectedRooms,setSelectedRooms] = useState([])
   const {data,loading,error} = useFetch(`/hotels/room/${hotelId}`)
   const {dates } = useContext(SearchContext);
   const navigate = useNavigate();
   const handleSelect = (e) => {
      const checked = e.target.checked
      const value = e.target.value
      setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter((item) => item !== value));
      // if checked is true than we add new value to our selectedRooms array else if we make it unchecked then we filter out our selectedRooms array of the value
   }
  
   const getDatesInRange = (startDate,endDate) => {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const date = new Date(start.getTime());
      let dates = [];
      
      while(date<=end){
         dates.push(new Date(date))
         date.setDate(date.getDate()+1)
      }

      return dates;
   };
   const alldates = getDatesInRange(dates[0].startDate,dates[0].endDate);
   console.log(dates)
   const isAvailable = (roomNumber) => {
      const isFound = roomNumber.unavailableDates.some((date)=>{
         alldates.includes(new Date(date).getTime());
      });
      return !isFound;
   }
   const handleClick = async () => {
      try{
        await Promise.all(selectedRooms.map((roomId)=>{
         const res = axios.put(`${BASE_URL}/rooms/availability/${roomId}`,{dates:alldates});
         return res.data;
      }))
      setOpen(false);
      navigate("/");
      }catch(err){
         console.log(err);
      }
   }
   console.log(selectedRooms)
  return (
     <div className="reserve">
        <div className="rContainer">
            <FontAwesomeIcon icon = {faCircleXmark} 
               className="rClose" 
               onClick={()=>setOpen(false)}
            />
            <span>Select your room:</span>
            {data.map((item) => (
               <div className="rItem">
                  <div className="rItemInfo">
                    <div className="rTitle">{item.title}</div>
                    <div className="rDesc">{item.desc}</div>
                    <div className="rMax">Max people:<b>
                        {item.maxPeople}
                        </b>
                    </div>
                    <div className="rPrice"> {item.price} </div>
                  </div>
                  <div className="rSelectedRooms">
                    {item.roomNumbers.map((roomNumber) =>(
                  <div className="room">
                     <label>{roomNumber.number}</label>
                     <input type="checkbox"
                      value={roomNumber._id} 
                      onChange = {handleSelect}
                      disabled={!isAvailable(roomNumber)}/>
                  </div>
                    ))}
                  </div>
               </div>
            ))}
            <button className="rButton" onClick={handleClick} > Reserve Now! </button>
        </div>
     </div>
  )
}

export default Reserve;