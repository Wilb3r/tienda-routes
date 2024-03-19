import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "./theme";

// export const Button = styled.button`
//   background-color  : #DFF5FF;
//   border-radius: 5px;
//   border: 0px ;
//   color: ${colors.primary};
//   font-size: 0.9em;
//   margin: 0;
//   padding: 0.25em 1em;
//   cursor: pointer;
// `;

export const Header = styled.header`
  display  : flex;
  background-color: #333;
  color: white;
  flex-direction: row;
  align-content: center;
  padding: 5px;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

`;

export const BtnLink = styled.button`
    background-color: white;
    padding: 0.7em;
    border-radius: 5px;
    border: 0px;
    cursor: pointer;
    margin-right: 1em;
    margin-top: 0.7em;
    margin-left: 0.1em;
    position: relative;
    left: -10px;
`;

export const DetailsCont = styled.div`
    background-color: aliceblue;
    padding: 0.5em;
    border-radius: 10px;
    margin-top: 1em;
    h3, h4{
        color: #333;
    }

`;

export const CenteredCont = styled.div`
  height: 100vh;
  width: 70%;
  margin: 0 auto;
`;

export const CenterInfo = styled.div`
  justify-content: center;
  text-align: center;

  ul li {
  display: inline-blck;
}
`;



