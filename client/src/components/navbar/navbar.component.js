// import { set } from 'date-fns'
import React, { useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import {  Nav } from './navbar.styles'
import {NavContainer , Logo ,NavItems, Button} from './navbar.styles'
import "./navbar.styles.scss"
const Navbar = () => {
    const navigate = useNavigate();
    const [option,setOption] = useState(false);
    const {user,dispatch} = useContext(AuthContext);
    const handleClick = () => {
       setOption(!option);
    }
    let handleLogOut = (e) => {
      e.preventDefault();
      dispatch({type:"LOGOUT"});
      // option=false;
    }
    // console.log(`user : ${user.username}`);
  return (
    <Nav>
      <NavContainer>
        <Logo onClick={()=>navigate('/')}>Hotelbooking</Logo>
        {user ? (
          <div className='container'>
           <div onClick={handleClick} className='userContainer'>
            <div>
              {user?.username[0]}
            </div>
          </div>
          {option &&  (<button className='options' onClick={handleLogOut}>Log Out</button>)}
          </div>
        ) : (
        <NavItems>
            <Button onClick={()=>navigate("/login")}>Login</Button>
            <Button>Register</Button>
        </NavItems>       
        )
    }   
      </NavContainer>
    </Nav>
  )
}

export default Navbar
