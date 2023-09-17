import React from 'react';
import Products from './Products';
import '../App.css';
const Home=()=>{
    return(
       <div className="hero">
        <div class="card bg-dark text-white border-0 ">
         <img src="/Assets/images/download.jpg" class="card-img" alt="Background" height="550px"/>
          

        </div>
        <Products/>
       </div>
    );

}

export default Home;