import React from 'react';
import './stats.css';
import phone from  './mobile.svg';
import apple from './apple.svg';
import playstore from './playstore.png'

const Stats = () => {
    return (
        <div>
            <div className="stats-div">
            <div className="container-fluid">
                <div className="row ">
                    <div className="col">
                    <div className="wow animated fadeInLeft text-center ">
                    <span className=" stats-count"> <p> 1,230 </p> </span>
                            <span className="stats-label text-uppercase"> popularity</span>
                        </div>

                    </div>
                    <div className="col">
                        <div className="wow animated fadeInLeft text-center ">
                        <span className="stats-count ">  <p>  300 </p></span>
                            <span className="stats-label text-uppercase"> campaigns</span>
                        </div>

                    </div>
                    
                    <div className="col">
                    <div className="wow animated fadeInRight text-center">
                    <span className="stats-count "> <p> 120 </p> </span>
                            <span className="stats-label text-uppercase"> fully funded</span>
                        </div>

                    </div>
                    <div className="col">
                    <div className="wow animated fadeInRight text-center">

                    <span className="stats-count ">   <p>  737 </p> </span>
                            <span className="stats-label  text-uppercase"> donations </span>
                        </div>

                    </div>


                </div>
            </div>

        </div>
        <div className="app-advert">
            <div className="container-fluid">
                <div className="row">
                <div  className="wow animated fadeInLeft col">
                    <img alt="phone" src={phone} className="phone-img"/>
                        

                    </div>
                    <div  className="wow animated fadeInRight col">
                      <h6 className="text-uppercase available" >Available Now </h6>
                      <span className="header-donay"> The DonayPay App</span>
                      <p className="app-talk"> 
                      Start and manage campaigns, engage with supporters, and discover important causes — all on the go
                      </p>
                      <p>
                          <img alt=" apple" className="dwnld" src={apple}/>
                          <img alt="playstore" className="dwnld-play" src={playstore}/>
                      </p>

                    </div>

                </div>
             </div>
        </div>
        </div>
    );
}

export default Stats;