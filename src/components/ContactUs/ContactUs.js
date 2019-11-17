import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import contact from './contact.svg';



const ContactUs = () => {
    // let redirect = null;
    // if () {
    //     redirect = <Redirect to= {`/`} />
    // }
    return (
        <div>
            {/* {loading ? <Loader/> : null} */}
            <Navbar />
            <div className="container">
                <div className="row p-4">
                    <div className="col main-card-for-payment shadow animated fadeInRight">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <form className="p-4">
                                        <div className="row">
                                            {/* <div className="col p-3">  <span className="text-center error">{message} </span></div> */}
                                            <br />
                                        </div>

                                        <div className="row">

                                            <div className="col">
                                                <input type="text"
                                                    required className="form-control" placeholder="Name" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">

                                            <div className="col">
                                                <input type="email"
                                                    required className="form-control" placeholder="Email" />
                                            </div>
                                        </div>

                                        <br />
                                        <div className="row">
                                            <div className="col">
                                                <textarea className="contact-us-textarea form-control" rows="5" placeholder="Your Message">

                                                </textarea>

                                            </div>
                                        </div>
                                        <br />
                                        <button type="submit" className="reqe-button text-uppercase login-btn text-center sign-up-page">SEND MESSAGE</button>

                                    </form>



                                </div>
                                <div className="col grey-bg ">
                                    {/* <SingleCampaign/> */}
                                    <h3 className="text-center tahnks"> Reach out to us</h3>
                                    <br />
                                    <img className="donate-img" src ={contact} alt="donate"/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default ContactUs;