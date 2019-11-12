import React, { useContext } from 'react';
import { DonateContext } from '../../contexts/donateContext';
import Loader from '../Loader/Loader';
import Navbar from '../Navbar/Navbar';
import {Redirect} from 'react-router-dom';



const Otp = () => {
    const { onChange, backHome, loading,  otp, verify } = useContext(DonateContext);
    let redirect = null;
    if(backHome){
        redirect = <Redirect to ="/"/>
    }
    return (
        <div>
            <Navbar />
            {redirect}
            {loading ? <Loader /> : null}
          

            <div className="container">
                <div className="row">
                    <form onSubmit={verify}> 
                        <div class="form-group">
                            <label for="khwrbkf">Enter OTP CODE</label>
                            <input type="text"
                        onChange={(e) => onChange(e, "otp")} value={otp} class="form-control" placeholder="OTP code" />
                        </div>
                        <button type="submit" class="btn btn-primary">CONFIRM PAYMENT</button>

                    </form>
                </div>
            </div >
            </div>
            );
      }
      
export default Otp;