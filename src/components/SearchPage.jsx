import React from "react";
import { Link } from "react-router-dom";
import { BtnLink, CenterInfo } from "../styles-components/styles-comp";

const SearchPage = () => {
    const celulares = [
      "Samsung",
      "Huawei",
      "Xiaomi",
      "Realme"
    ];
    return(
    <CenterInfo>
      <div className="features">
        <h2>Pagina de Busqueda</h2>
        <ul>
          {celulares.map((celular) => (
            <li key={celular}>
              <Link to={`/celulares/${celular}`}><BtnLink>{celular}</BtnLink></Link>
            </li>
          ))}
        </ul>
      </div>
      </CenterInfo>
    )
  };
 
  export default SearchPage;