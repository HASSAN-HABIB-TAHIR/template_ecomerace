
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './OnmouseHover-SecondNavBar-component-/routes/About';
import WebDesign from './OnmouseHover-SecondNavBar-component-/routes/WebDesign';
import SEO from './OnmouseHover-SecondNavBar-component-/routes//SEO';
import Services from './OnmouseHover-SecondNavBar-component-/routes/Services';
import Layout from './OnmouseHover-SecondNavBar-component-/Layout';
import Frontend from './OnmouseHover-SecondNavBar-component-/routes/Frontend';
import PHP from './OnmouseHover-SecondNavBar-component-/routes//PHP';
import Node from './OnmouseHover-SecondNavBar-component-/routes//Node';
import AboutWho from './OnmouseHover-SecondNavBar-component-/routes//AboutWho';
import OurValues from './OnmouseHover-SecondNavBar-component-/routes//OurValues';
import WebDev from './OnmouseHover-SecondNavBar-component-/routes//WebDev';
import Navbar from './Navbar-Components/navbar'
import ProductsArrival from './ShownNewArrivalProduct/productsArrival'
import SelectedDataShow from './ShownNewArrivalProduct/selecteddatashow'
import Cart from "./AddtoCartFunctionaltity/Cart"
import Ui from './AddtoCartFunctionaltity/ui'
import Products from './AddtoCartFunctionaltity/product';
import Slick from './SlickSliderComponents/slick'
import Layout1 from './SlickSliderComponents/Layout1'

const App = () => {
  return (
    <>
      <Navbar />
      <Layout />
      <Routes>
        <Route path="/" element={  <><Slick />  <ProductsArrival/> </>} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="web-design" element={<WebDesign />} />
        <Route path="web-dev" element={<WebDev />} />
        <Route path="frontend" element={<Frontend />} />
        <Route path="node" element={<Node />} />
        <Route path="seo" element={<SEO />} />
        <Route path="php" element={<PHP />} />
        <Route path="who-we-are" element={<AboutWho />} />
        <Route path="our-values" element={<OurValues />} />


        <Route path="/details/:id" element={<SelectedDataShow />} />
        <Route path="/addtocartdata" element={<Ui />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<p>Not found!</p>} />
      </Routes>



    </>
  );
};
export default App;