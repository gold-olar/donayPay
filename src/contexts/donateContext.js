import React, { createContext, Component } from 'react';
import axios from 'axios';


export const DonateContext = createContext()


class DonateContextProvider extends Component {
    state = {
       name: null,
       email: null,
       cardNumber: null,
       cvv: null,
       pin: null,
       mm: null,
       yy: null,
       loading: false,
       lastName: null,
       firstName: null,
       id: null,
       amount: null,
       OTP: false,
       otp:null,

    }
    onChange = (e, identifier) => {
        this.setState({
            [identifier]: e.target.value,
            message: null
        });
    };
    verify = async (e) =>{
        e.preventDefault();
        const {ref, otp} = this.state;
        let verifyData = {
            transaction_reference: ref, otp
        }
        this.setState({
            loading: true,

        })
        const verified = axios.post('/1/verify_pay/', verifyData )
        if (verified) {
            this.setState({
            backhome : true
            })
        }
        
    }

    submit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true, })
        let {cardNumber, pin, cvv, mm, yy, amount, email, firstName, lastName} = this.state;
        const paymentDetails = {
            cardno : cardNumber,
            pin, cvv,
            expirymonth: mm,
            expiryyear: yy,
            amount,
            email,
            currency: "NGN",
            sugested_auth : "",
            txRef : firstName,
            firstname :firstName,
            lastname: lastName

        }
       const donated = await axios.post('/1/pay/', paymentDetails)
       console.log(donated)
      if (donated){ this.setState({loading: false,})}
      if(donated){
          this.setState({
              OTP : true,
              ref: donated.data.flwRef,
          })
          console.log(donated.data.flwRef, "ref")

      }
       console.log(donated.data)
    }

    render() {
        return (
            <DonateContext.Provider
                value={{
                    ...this.state, 
                    onChange: this.onChange,
                    submit: this.submit,
                    passId: this.passId,
                    verify : this.verify,

                }}>
                {this.props.children}
            </DonateContext.Provider>
        );
    }
}

export default DonateContextProvider;