import React, { useContext } from 'react';
import './signup.css';
import { NavLink , Redirect } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { FormContext } from '../../contexts/FormContext';
import Loader from '../Loader/Loader';




const SignUp = () => {
    const { firstName, lastName, email, password, confirmPassword, onChangeHandler, onSignUpFormSubmitHandler, comparePasswordHandler, message, loading, auth } = useContext(FormContext)
    let redirect = null;
    if(auth){
        redirect = <Redirect to = "/dashboard"/>
    }
    return (
        <div>
       {loading ? <Loader/> : null}
       {redirect}
               <div className="container-fluid p-5">
               <div className="row">
                   <div className="col col  animated fadeInLeft padding">
                       <h3 className="sign-up-header text-center">
                           <span className="blue-half"> Cre</span><span className="green-half">ate</span> an account
                       </h3>

                   </div>
                   <div className="col-lg-6 col-md-6 col-sm-8 margin-scam  animated fadeInRight">
                       <div className="form-card shadow">
                           {message ? <p className="error text-center red"> {message} </p> : null }
                           <form onSubmit= {onSignUpFormSubmitHandler} >
                               <div className="row form-row">
                                   <div className="col">
                                       <input type="text"
                                           onChange={(e) => onChangeHandler(e, "firstName")} value={firstName} name="firstName" className="form-control" placeholder="First name" required />
                                   </div>
                                   <div className="col">
                                       <input type="text" 
                                        onChange={(e) => onChangeHandler(e, "lastName")} value={lastName}
                                       name="lastName" className="form-control" placeholder="Last name" required />
                                   </div>
                               </div>
                               <div className="row form-row">
                                   <div className="col">
                                       <input type="email"
                                        onChange={(e) => onChangeHandler(e, "email")} value={email}
                                        name="email" className="form-control" placeholder="Email Address" required />
                                   </div>

                               </div>

                               <div className="row form-row">
                                   <div className="col ">
                                       <input type="password"
                                        onChange={(e) => onChangeHandler(e, "password")} value={password}
                                        onBlur = {comparePasswordHandler}
                                        name="password" className="form-control" placeholder="Password" required />
                                   </div>
                                   <div className="col">
                                       <input type="password"
                                        onChange = {(e) => onChangeHandler(e, "confirmPassword")} value ={ confirmPassword }
                                        onBlur = {comparePasswordHandler}
                                       name="passwordConfirm" className="form-control" placeholder="Confirm password" required />
                                   </div>
                               </div>
                               <div className="row form-row">
                                   <div className="col">
                                       <button type="submit" className="reqe-button text-uppercase login-btn text-center sign-up-page">Sign Up</button>
                                   </div>
                               </div>
                               <div className="row form-row">
                                   <div className="col">
                                       <p className="text-center more-weight" > Have an account ?
                                   <NavLink to="/login"> <span className="blue-half">Lo</span><span className="green-half">g in</span> </NavLink></p>
                                   </div>
                               </div>
                           </form>
                       </div>

                   </div>
               </div>
           </div>
            <Footer />
        </div>
    );
}

export default SignUp;