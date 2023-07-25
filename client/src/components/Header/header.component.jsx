import React, { useContext } from 'react'
import { useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import {DateRange } from 'react-date-range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed,faPlane,faCar,faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format } from 'date-fns';
import './header.scss'
import {Head,
    HeaderList,
    HeaderListItem,
    HeaderContainer,
    HeaderBtn,
    HeaderDesc,
    HeaderTitle,
    HeaderSearch,
    HeaderSearchInput,
    HeaderSearchItem,
    HeaderSearchText,StyledFontAwesomeIcon,
    StyledDateRange,
} from './header.styles.js';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
const Header = ({type,marginBottom}) => {
    const [openDate,setOpenDate] = useState(false);
    const [dates,setDates] = useState([{
        startDate:new Date(),
        endDate:new Date(),
        key:'selection'
    }]);
    const [destination,setDestination] = useState('');
    const [openOptions,setOpenOptions] = useState(false);
    const [options,setOptions] = useState({
        adult:1,
        children:0,
        room:1,
    })
    const navigate = useNavigate();
    const handleOption = (name, operation) => {
        setOptions((prev) => {
          return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
          };
        });
      };
      const {user} = useContext(AuthContext);
      const {dispatch } = useContext(SearchContext);
       const handleSearch = () => {
        dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}})
        navigate('/hotels',{state:{destination,dates,options}})
       }


  return (
     <Head >
     <HeaderContainer style={{marginBottom}}>
     <HeaderList >
        <HeaderListItem style={{border:'1px solid white',borderRadius:'2rem',padding:'10px'}}>
      <FontAwesomeIcon icon={faBed} color="white"  />
      <span>Stays</span>
        </HeaderListItem>
        {/* <HeaderListItem>
      <FontAwesomeIcon icon={faPlane} color="white" />
      <span>Stays</span>
        </HeaderListItem>
        <HeaderListItem>
      <FontAwesomeIcon icon={faTaxi} color="white"  />
      <span>Stays</span>
        </HeaderListItem>
        <HeaderListItem>
      <FontAwesomeIcon icon={faBed} color="white"  />
      <span>Stays</span>
        </HeaderListItem> */}
     </HeaderList>
     {type !=="list" &&
      <> <HeaderTitle>A lifetime of discounts? Its Genius</HeaderTitle>
     <HeaderDesc>
        Get rewarded for your travels ~ unlock instant savings of 10% or more with a free HotelBooking account
     </HeaderDesc>
     {!user && <HeaderBtn onClick={()=>navigate("/login")}>
        Sign in/ Register
     </HeaderBtn>}
     <HeaderSearch>
        <HeaderSearchItem>
            <StyledFontAwesomeIcon icon={faBed} />
            <HeaderSearchInput type='text' placeholder='where are you going' onChange={(e)=>setDestination(e.target.value.toLocaleLowerCase())}></HeaderSearchInput>
        </HeaderSearchItem>
        <HeaderSearchItem  >
            <StyledFontAwesomeIcon  icon={faCalendarDays} />
            <HeaderSearchText onClick={()=> setOpenDate(!openDate)} >{
                `${format(dates[0].startDate,"MM/dd/yyyy")} to ${format(dates[0].endDate,"MM/dd/yyyy")}`
            }</HeaderSearchText>
            {openDate && <StyledDateRange editableDateInputs={true}
            onChange={item=> setDates([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            minDate={new Date()}
            />}
        </HeaderSearchItem>
        <HeaderSearchItem >
            <StyledFontAwesomeIcon icon={faPerson} />
            <HeaderSearchText onClick={()=> setOpenOptions(!openOptions)}>{`${options.adult} adult . ${options.children} children .${options.room} room`}</HeaderSearchText>
            {openOptions && (<div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
        </HeaderSearchItem>
        <HeaderBtn onClick={handleSearch}>Search</HeaderBtn>
    </HeaderSearch>
      </> }
     </HeaderContainer>
     </Head>
  )
}

export default Header
