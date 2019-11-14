import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { DonateContext } from '../../contexts/donateContext';
import Loader from '../Loader/Loader';
import {Redirect} from "react-router-dom";

  
const Donate = (props) => {

    const { onChange, submit, lastName, firstName, email, cardNumber, mm, yy, cvv, pin, loading,amount, OTP} = useContext(DonateContext);

    let redirect = null;
   if(OTP){
       redirect = <Redirect to = "/otp/1"/>
   }
    return (
        <div>
              {loading ? <Loader/> : null}
            <Navbar />
            {redirect}

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div class="card--- card shadow animated fadeInLeft p-4" >
                            <div class="card-body">
                                <form onSubmit = {submit}>
                                    <div class="form-row">
                                        <div class="form-group col-md-3">
                                            <input type="text" class="form-control" 
                                             onChange={(e) => onChange(e, "firstName")} value={firstName}
                                             placeholder="Firstname" />
                                        </div>
                                        <div class="form-group col-md-3">
                                            <input type="text" class="form-control" 
                                             onChange={(e) => onChange(e, "lastName")} value={lastName}
                                             placeholder="Lastname" />
                                        </div>
                                        <div class="form-group col-md-3">
                                            <input type="email" class="form-control" 
                                              onChange={(e) => onChange(e, "email")} value={email}
                                             placeholder="Email" />
                                        </div>
                                        <div class="form-group col-md-3">
                                            <input type="number" class="form-control" 
                                              onChange={(e) => onChange(e, "amount")} value={amount}
                                             placeholder="Amount" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" 
                                          onChange={(e) => onChange(e, "cardNumber")} value={cardNumber}
                                        class="form-control" id="inputAddress" placeholder="1234   2525     3535    3636 " />
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-2">
                                            <input type="text"
                                              onChange={(e) => onChange(e, "mm")} value={mm}
                                               class="form-control" placeholder="MM" />
                                        </div>
                                        <div class="form-group col-md-2">

                                            <input type="text" 
                                              onChange={(e) => onChange(e, "yy")} value={yy}
                                            class="form-control" placeholder="YY" />
                                        </div>

                                        <div class="form-group col-md-2">
                                            <input type="text"
                                              onChange={(e) => onChange(e, "cvv")} value={cvv} class="form-control" placeholder="CVV" />
                                        </div>
                                        <div class="form-group col-md-2">
                                            <input type="text"
                                              onChange={(e) => onChange(e, "pin")} value={pin} class="form-control" placeholder="PIN" />
                                        </div>
                                        <div class="form-group col-md-2">
                                            <input type="password"
                                              onLoad={(e) => onChange(e, "id" )} value={props.match.params.id} class="form-control" disabled placeholder="PIN" />
                                        </div>
                                        </div>

                                    <button type="submit" class="btn btn-primary">DONATE</button>
                                </form>
                            </div>
                        </div>


                    </div>
                    {/* <div className="col-md-2"> */}
                        {/* <div class="card--- card shadow" >
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div> */}

                    {/* </div> */}
                </div>
            </div>

        </div>
    );
}

export default Donate;