import "./App.css";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Slider from "./components/slider/Slider";
import Testimonials from "./components/testimonials/Testimonials";
import Virtual from "./components/virtual/Virtual";



function App() {
  return (
    <div className='bg-black'>
      <Header></Header>
      <Hero></Hero>
      <Slider></Slider>
      <Virtual></Virtual>
      <Products></Products>
      <Testimonials></Testimonials>
      {/* <Footer></Footer> */}



    </div>
  );
}

export default App;
