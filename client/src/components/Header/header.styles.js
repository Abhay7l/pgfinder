import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
export const Head = styled.div`
  ${'' /* height:50vh; */}
  background-color:#00337C;
  position:relative;
  color:white;
  display:flex;
  justify-content:center;
  font-size:1.5rem;
`;

export const HeaderContainer =styled.div`
   width:100%;
   max-width:1024px;
   margin:2rem 0rem 10rem;
`;

export const HeaderList = styled.div`
   display:flex;
   gap:4rem;
`;
export const HeaderListItem = styled.div`
display:flex;
  align-items:center; 
   gap:1rem;
   cursor:pointer;
`;

export const HeaderTitle = styled.h1`
 margin:4rem 0 2rem 0;
`;

export const HeaderDesc = styled.p`
 margin:0 0 2rem;
`;
export const HeaderBtn = styled.button`
  padding:1.5rem;
  background-color:#0081B4;
  cursor:pointer;
  font-weight:500;
  border:none;
  color:white;
`;


export const HeaderSearch = styled.div`
  height:30px;
  background-color:white;
  border: 3px solid #febb02;
  display:flex;
  align-items:center;
  justify-content: space-around;
  padding:25px 0px;
  border-radius:5px;
  position:absolute;
  bottom:-2.5rem;
  width:100%;
  max-width:1024px;
`;

export const HeaderSearchItem = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
`;

export const HeaderSearchInput = styled.input`
  border:none;
  outline:none;
`;

export const HeaderSearchText = styled.span`
  color:lightgray;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color:lightgray;
  cursor:pointer;
`
export const StyledDateRange = styled(DateRange)`
  position:absolute;
  top:50px;
  z-index:2
`
// export const HeaderBtn = styled.button`
   
// `;