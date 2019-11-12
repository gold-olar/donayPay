import React, {useContext} from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { FormContext } from '../../contexts/FormContext';
import Loader from '../Loader/Loader';




const Login = () => {
    const {message, onLoginFormSubmitHandler, onChangeHandler, email, password, loading, auth} = useContext(FormContext)

    let redirect = null;
    if(auth){
        redirect = <Redirect to = "/dashboard"/>
    }
    return (
        <div>
            {redirect}
              {loading ? <Loader/> : null}
            <div className="container-fluid p-5">
                <div className="row margin-top">
                    <div className="col col padding  animated fadeInLeft">
                        <h3 className="sign-up-header text-center">
                            <span className="blue-half"> Welco</span><span className="green-half">me back,</span> <br></br>
                            <span className="light-font-weight"> Sign in to continue </span>
                        </h3>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-8 margin-scam  animated fadeInRight">
                        <div className="form-card shadow">
                            {message ? <p> {message} </p> : null }
                            <form onSubmit= {onLoginFormSubmitHandler}>
                                
                                <div className="row form-row">
                                    <div className="col">
                                        <input type="email"
                                          onChange={(e) => onChangeHandler(e, "email")} value={email}
                                         name="email" className="form-control" placeholder="Email Address" required />
                                    </div>

                                </div>
                               
                                <div className="row form-row">
                                    <div className="col">
                                        <input type="password" 
                                        onChange={(e) => onChangeHandler(e, "password")} value={password}
                                        name="password" className="form-control" placeholder="Password" required />
                                    </div>
                                    
                                </div>
                                <div className="row form-row">
                                    <div className="col">
                                    <button type="submit" className="reqe-button text-uppercase login-btn text-center sign-up-page">Log In</button>
                                    </div>
                                </div>
                                <div className="row form-row">
                                    <div className="col">
                                    <p className="text-center more-weight" >New Here ? 
                                    <NavLink to= "/signup"> <span className="blue-half">Sig</span><span className="green-half">n up</span> </NavLink></p>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
 
export default Login;