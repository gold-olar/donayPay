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
                    <p className="wow animated fadeInLeft ">
                            <p> <h4 className=" stats-count"> 1,230 </h4></p>
                            <p className="stats-label text-uppercase"> popularity</p>
                        </p>

                    </div>
                    <div className="col">
                        <p className="wow animated fadeInLeft ">
                            <p> <h4 className="stats-count "> 300 </h4></p>
                            <p className="stats-label text-uppercase"> campaigns</p>
                        </p>

                    </div>
                    
                    <div className="col">
                    <p className="wow animated fadeInRight">
                            <p> <h4 className="stats-count "> 120 </h4></p>
                            <p className="stats-label text-uppercase"> fully funded</p>
                        </p>

                    </div>
                    <div className="col">
                    <p className="wow animated fadeInRight">
                            <p> <h4 className=" wow stats-count animated fadeInRight"> 737 </h4></p>
                            <p className="stats-label text-uppercase"> donors</p>
                        </p>

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
                      <h4 className="header-donay"> The DonayPay App</h4>
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