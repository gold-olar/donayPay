import React , {useContext} from 'react';
import {  Redirect } from 'react-router-dom';
import { FormContext } from '../../contexts/FormContext';
import { DonateContext } from '../../contexts/donateContext';
import DashboardNav from '../DashboardNav/DashboardNav';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';
import profile from './profile.svg';



const ProfileDatails = (props) => {
    const { onChange, submit, lastName, firstName, email, cardNumber, mm, yy, cvv, pin, loading, amount, OTP, message } = useContext(DonateContext);
    const { auth } = useContext(FormContext);

    let {id} = props.match.params;

    let redirect = null;
    if (!auth) {
        redirect = <Redirect to= {`/login`} />
    }
    return (
        <div>
            {loading ? <Loader/> : null}
            <DashboardNav />
            {redirect}
            <div className="container">
                <div className="row p-4">
                    <div className="col main-card-for-payment shadow animated fadeInRight">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <form className ="p-4">
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
                                                 onChange = {(e) => onChange(e, "firstName")} value ={ firstName }
                                                 required className="form-control" placeholder="First name" />
                                            </div>
                                            <div className="col">
                                                <input type="text" 
                                                 onChange = {(e) => onChange(e, "lastName")} value ={ lastName }
                                                required className="form-control" placeholder="Last name" />
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="row">
                                            <div className="col">
                                                <input type="text" 
                                                 onChange = {(e) => onChange(e, "cardNumber")} value ={ cardNumber }

                                                required className="form-control" placeholder="Card Number" />
                                            </div>
                                            <div className="col">
                                                <input type="email" 
                                                 onChange = {(e) => onChange(e, "email")} value ={ email }

                                                required className="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="row">
                                            <div className="col">
                                                <input type="text" 
                                                 onChange = {(e) => onChange(e, "amount")} value ={ amount }
                                                required className="form-control" placeholder="Amount" />
                                            </div>
                                            <div className="col">
                                                <input type="text"
                                                 onChange = {(e) => onChange(e, "pin")} value ={ pin }
                                                required className="form-control" placeholder="PIN" />
                                            </div>
                                            
                                        </div>
                                        <br/>
                                    <div className="row">
                                            <div className="col">
                                                <input type="text" 
                                                 onChange = {(e) => onChange(e, "mm")} value ={ mm }

                                                 required className="form-control" placeholder="MM" />
                                            </div>
                                            <div className="col">
                                                <input type="text" 
                                                 onChange = {(e) => onChange(e, "yy")} value ={ yy }

                                                required className="form-control" placeholder="YY" />
                                            </div>
                                            <div className="col">
                                                <input type="text" required
                                                 onChange = {(e) => onChange(e, "cvv")} value ={ cvv }

                                                className="form-control" placeholder="CVV" />
                                            </div>
                                        </div>
                                        <br/>
                                        <button type="submit" className="reqe-button text-uppercase login-btn text-center sign-up-page">DONATE</button>
                                        
                                    </form>



                                </div>
                                <div className="col grey-bg ">
                                    {/* <SingleCampaign/> */}
                                    <h3 className="text-center tahnks">Don't worry, your personal details will be kept secret.</h3>
                                    <br/>
                                    <img className="donate-img" src ={profile} alt="donate"/>
 
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
 
export default ProfileDatails;