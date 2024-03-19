import React from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { CenterInfo, BtnLink } from "../styles-components/styles-comp";
import { ThemeProvider } from "styled-components";
import { Button, theme } from "../styles-components/theme";
//Componente para llamar el nombre del celular seleccionado
const Celulares = ({nameCelular}) =>{
    return(
      <CenterInfo>
      <ThemeProvider theme={theme}>
        <div className="features">
          <h2>Información de Celulares</h2>
          <h2>{nameCelular}</h2> 
          <Link to='details'> <Button>ver detalles</Button> </Link>
          <Outlet/>
        </div>
      </ThemeProvider>
      </CenterInfo>
    )
  };

  export default Celulares;