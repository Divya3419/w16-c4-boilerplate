import React from "react";
import { Routes,Route} from "react-router";

import Home from "../components/Home"
import About from "../components/About"
const MainRoutes = () => {
  return <>

  <Routes>
    <Route path="/"  element={<Home/>} />
    <Route path ="/about" element={<About/>} />
    <Route path="/products" element={<products/>} />
    <Route path ="/products/men" element={<productCard/>} />
    <Route path="/products/women" element={<productCard/>} />
    <Route path="/products/kids" element={<productCard/>}/>
    <Route path="/products/homedecor" element={<productCard/>}/>
  </Routes>
  </>;
};
export { MainRoutes };
