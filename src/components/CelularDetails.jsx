import React from "react";
import { useParams } from "react-router-dom";
import { DetailsCont } from "../styles-components/styles-comp";
import data from "../data/dataCelu";


//Componentes para los detalles de celular seleccionado
const CelularDetails = () => {
    const {nameCelular} = useParams();
    const detalles = data[nameCelular]; //hacemos referencia a la data
    return (
      <DetailsCont>
     <h3>Detalles del movil {nameCelular}</h3>
     <h4>Modelo: {detalles.modelo}</h4>
     <h4>Precio: {detalles.precio}</h4>
     <h4>Descripcion: {detalles.desc}</h4>
      </DetailsCont>
    )
  }

  export default CelularDetails;