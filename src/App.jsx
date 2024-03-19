import React from "react";
import './css/App.css'
import { Routes, Route,} from "react-router-dom";
import { Header, CenteredCont} from "./styles-components/styles-comp.jsx";
import Celulares  from "./components/Celulares.jsx";
import SearchPage from "./components/SearchPage.jsx";
import Home from "./components/Home.jsx";
import CelularDetails from "./components/CelularDetails.jsx";
import NvLink from "./components/NavLink.jsx";
import W from "./img/winter-roleplay.gif"

function App(){
  return (
    <div>
      <Header>
      <img src={W} alt="Mi logo" />
      <nav>
        <ul>
          <li><NvLink to="/">Home</NvLink></li>
          <li><NvLink to="/search-page">Pagina de Busqueda</NvLink></li>
        </ul>
      </nav>
      {/* <Home />
      <SearchPage /> */}
      </Header>
      <CenteredCont>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search-page" element={<SearchPage/>}/>
        <Route path="/celulares/:nameCelular" element={<Celulares/>}>
          <Route path="details" element={<CelularDetails/>}/>
        </Route>
        <Route path="*" element={<h1>Page not Found</h1>}/>
      </Routes>
      </CenteredCont>
    </div>
  )
}
export default App