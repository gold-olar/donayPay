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
    }
    onChange = (e, identifier) => {
        this.setState({
            [identifier]: e.target.value,
            message: null
        });
    };


    submit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true, })
        let {cardNumber, pin, cvv, mm, yy, amount, email} = this.state;
        const paymentDetails = {
            cardno : cardNumber,
            pin, cvv,
            expirymonth: mm,
            expiryyear: yy,
            amount,
            email,
            currency: null,
            sugested_auth : null,
            txRef : ' hello'

        }
       const donated = await axios.post('/1/pay/', paymentDetails)
       console.log(donated)
      if (donated){ this.setState({loading: false,})}
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

                }}>
                {this.props.children}
            </DonateContext.Provider>
        );
    }
}

export default DonateContextProvider;