import React, { useContext } from 'react';
import { DonateContext } from '../../contexts/donateContext';
import Loader from '../Loader/Loader';
import Navbar from '../Navbar/Navbar';
import {Redirect} from 'react-router-dom';
import secure from './secure.svg';
import Footer from '../Footer/Footer';



const Otp = (props) => {
    const { onChange, backHome, loading,  otp, verify , message} = useContext(DonateContext);
    let {id} = props.match.params;

    let redirect = null;
    if(backHome){
        redirect = <Redirect to ="/"/>
    }
    return (
        // <div>
        //     <Navbar />
        //     {redirect}
        //     {loading ? <Loader /> : null}
          

        //     <div className="container">
        //         <div className="row">
        //             <form onSubmit={(e) => {verify(e, id)}}> 
        //                 <div class="form-group">
        //                     <label for="khwrbkf">Enter OTP CODE</label>
        //                     <input type="text"
        //                 onChange={(e) => onChange(e, "otp")} value={otp} class="form-control" placeholder="OTP code" />
        //                 </div>
        //                 <button type="submit" class="btn btn-primary">CONFIRM PAYMENT</button>

        //             </form>
        //         </div>
        //     </div >
        //     </div>
        <div>
            {loading ? <Loader /> : null}
            <Navbar />
            {redirect}
            <div className="container">
                <div className="row p-4">
                    <div className="col main-card-for-payment shadow animated fadeInRight">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <form className ="p-4"  onSubmit={(e) => {verify(e, id)}}> 
                                       <div className="row">
                                      <div className="col p-3">  <span className="text-center error">{message} </span></div>
                                        <br/>
                                       </div>
                                    <div className="row hide-id">
                                            <div className="col">
                                                <input type="text" 
                                                 value ={ id }
                                                required className="form-control" disabled />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                            <input type="text"
                                           onChange={(e) => onChange(e, "otp")} value={otp} 
                                           class="form-control" placeholder="OTP code" />
                                            </div>
                                           
                                        </div>
                                        <br/>
                                       
                                        <br/>
                                        <button type="submit" className="reqe-button text-uppercase login-btn text-center sign-up-page">CONFIRM PAYMENT</button>
                                        
                                    </form>



                                </div>
                                <div className="col grey-bg ">
                                    {/* <SingleCampaign/> */}
                                    <h3 className="text-center tahnks"> Thank you for supporting.</h3>
                                    <br/>
                                    <img className="donate-img" src ={secure} alt="secure"/>
 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <br/>
            <Footer/>
        </div>
            );
      }
      
export default Otp;