import React from 'react';
import './steps.css';


const Steps = () => {
    return ( 
        <section className="wow animated fadeInLeft banner-bottom steps-- py-5" >
            <h3 className="text-center section-header"> Get Funds in these few steps</h3>

        <div className="container py-md-5">
            <div className="row bottom-grids text-center">
                <div className="col-md-4 bottom-grid">
                  
                    <p className="number">1</p>
                    <h4>Create an account.</h4>
                    <p className="mt-4">Sign up with your name, email and phone number.</p>
                </div>
                <div className="col-md-4 mt-md-0 mt-5 bottom-grid">
                    <p className="number">2</p>
                    <h4>Create a campaign.</h4>
                    <p className="mt-4">Make your needs known.</p>
                </div>
                <div className="col-md-4 mt-md-0 mt-5 bottom-grid">
                    <p className="number">3</p>
                    <h4>Spread the gospel.</h4>
                    <p className="mt-4">Share your unique link and watch people give.</p>
                </div>
                <span className="border-line"></span>
            </div>
        </div>
    </section>
     );
}
 
export default Steps;