import React from 'react';
import './404.css';
import {NavLink} from 'react-router-dom';
import Footer from '../Footer/Footer';


const NotFound = () => {
    return (  
        <div >
        <div className ="whole_page" >
           <p className="text-right padding back-home">
          <NavLink  to ="/"> 
            <i class="fa fa-arrow-left" aria-hidden="true"></i>  GO BACK HOME
            </NavLink></p>
           

            </div>
            <Footer/>
        </div>
    );
}
 
export default NotFound;