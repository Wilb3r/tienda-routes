import React from "react";
import './App.css'
import { Routes, Route, Link, useParams, Outlet, NavLink as NL} from "react-router-dom";

const Home = () => {
  return (
    <div className="features">
      <h2>Bienvenidos</h2>
      <p>Somos una tienda online de celulares</p>
    </div> 
  )
}

const data = {
  Samsung:{
    modelo: "A14",
    precio: "$150",
    desc: "Movil para tu tia"
  },
  Xiaomi: {
    modelo: "13",
    precio: "$750",
    desc: "Movil calidad-precio"

  },
  Huawei: {
    modelo: "p40",
    precio: "$600",
    desc: "Movil viejo"

  },
  Realme: {
    modelo: "12 pro",
    precio: "$500",
    desc: "Movil competencia de xiaomi"

  }
}

const SearchPage = () => {
  const celulares = [
    "Samsung",
    "Huawei",
    "Xiaomi",
    "Realme"
  ];
  return(
    <div>
      <h2>Pagina de Busqueda</h2>
      <ul>
        {celulares.map((celular) => (
          <li key={celular}>
            <Link to={`/celulares/${celular}`}>{celular}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
};

//Componente para llamar el nombre del celular seleccionado
const Celulares = () =>{
  const { nameCelular } = useParams(); //Obtuvimos las keys del segmento dinamico del path
  return(
    <div className="features">
       <h2>info de Celulares</h2>
      <h3>{nameCelular}</h3> 
      <Link to='details'> <p>ver detalles</p> </Link>
      <Outlet/>
    </div>
 
  )
};

//Componentes para los detalles de celular seleccionado
const CelularDetails = () => {
  const {nameCelular} = useParams();
  const detalles = data[nameCelular]; //hacemos referencia a la data
  return (
    <div>
   <h3>Detalles del movil {nameCelular}</h3>
   <h4>Modelo: {detalles.modelo}</h4>
   <h4>Precio: {detalles.precio}</h4>
   <h4>Descripcion: {detalles.desc}</h4>
    </div>
  )
}

//Componente para encapsular todo lo de navlink
const NavLink = ({to, children, ...props}) =>{
  return(
    <NL {...props}
    className={
      ({isActive}) => {
        return isActive ? 'is-active' : undefined
      }} 
    to={to}> {children}

    </NL>
  )
}

function App(){
  return (
    <div>
      <header>
      <h1>Logo</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/search-page">Pagina de Busqueda</NavLink></li>
        </ul>
      </nav>
      {/* <Home />
      <SearchPage /> */}
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search-page" element={<SearchPage/>}/>
        <Route path="/celulares/:nameCelular" element={<Celulares/>}>
          <Route path="details" element={<CelularDetails/>}/>
        </Route>
        <Route path="*" element={<h1>Page not Found</h1>}/>
      </Routes>
    </div>
  )
}
export default App