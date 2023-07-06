import styled from "styled-components";


export const Nav= styled.div`
  height:50px;
  font-size:1.85rem;
  background-color:#00337C;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const NavContainer = styled.div`
   width:100%;
   max-width:1024px;
   color:white;
   display:flex;
   align-items:center;
   justify-content:space-between;
`;

export const Logo = styled.span`
  font-weight:500;
  color:white;
  cursor:pointer;
  text-decoration:none;
`;

export const NavItems = styled.div`
    
`;

export const Button = styled.button`
  margin-left:20px;
  padding:5px 10px;
  border:none;
  cursor:pointer;
  color:#00337C;
`;

// export const UserContainer = styled.div`
//  ${'' /* width:50px; */}
//  display:flex;
//  align-items:center;
//  justify-content:center;
//   div{
//     width:60px;
//     ${'' /* text-align:center;/ */}
//     ${'' /* justify-content:center; */}
//     height:60px;
//     border-radius:100%;
//     background-color:white;
//     color:#00337C;
//   }
// `;