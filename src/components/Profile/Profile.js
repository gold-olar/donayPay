import React , {useContext} from 'react';
import {  Redirect } from 'react-router-dom';
import { FormContext } from '../../contexts/FormContext';
import { DonateContext } from '../../contexts/donateContext';
import DashboardNav from '../DashboardNav/DashboardNav';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';
import profile from './profile.svg';


const ProfileDatails = (props) => {
    const { onChange,  lastName, firstName,  loading, message } = useContext(DonateContext);
    const { auth } = useContext(FormContext);

    // let {id} = props.match.params;

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
                                                 onChange = {(e) => onChange(e, "firstName")} value ={ firstName }
                                                 required className="form-control" placeholder="" />
                                            </div>
                                            <div className="col">
                                                <input type="text" 
                                                 onChange = {(e) => onChange(e, "acNumber")} value ={ lastName }
                                                required className="form-control" placeholder="Account Number" />
                                            </div>
                                        </div>
                                        <br/>
                                  
                                        <button type="submit" className="reqe-button text-uppercase login-btn text-center sign-up-page">ADD DETAILS</button>
                                        
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