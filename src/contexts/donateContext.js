import React, { createContext, Component } from 'react';
import axios from 'axios';
import nanoid from 'nanoid';

export const DonateContext = createContext()


class DonateContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            cardNumber: '',
            cvv: '',
            pin: '',
            mm: '',
            yy: '',
            loading: false,
            lastName: '',
            firstName: '',
            id: '',
            amount: '',
            OTP: false,
            otp: '',
            message: '',
        }
    }
    onChange = (e, identifier) => {
        this.setState({
            [identifier]: e.target.value,
            message: ''
        });
    };
    verify = async (e) => {
        e.preventDefault();
        const { ref, otp } = this.state;
        let verifyData = {
            transaction_reference: ref, otp
        }
        this.setState({
            loading: true,

        })
        const verified = axios.post('/1/verify_pay/', verifyData)
        if (verified) {
            this.setState({
                backhome: true
            })
        }

    }

    submit = async (e, id) => {
        e.preventDefault();
        // let new_id = e.target[0].value;
        console.log(id)
        this.setState({ loading: true, })
        let { cardNumber, pin, cvv, mm, yy, amount, email, firstName, lastName } = this.state;
        const paymentDetails = {
            cardno: cardNumber,
            pin, cvv,
            expirymonth: mm,
            expiryyear: yy,
            amount,
            email,
            currency: "NGN",
            sugested_auth: "",
            txRef: nanoid(3),
            firstname: firstName,
            lastname: lastName,
            id: id
        }
        try {
            const donated = await axios.post(`/${id}/pay/`, paymentDetails)
            console.log(donated)
            if (donated.data) {
                this.setState({
                    loading: false,
                    OTP: true,
                    ref: donated.data.flwRef,
                })
                console.log(donated.data.flwRef, "ref")

            }
            console.log(donated.data)
        } catch (error) {
           this.setState({loading: false, message: "Unable to complete payment" });
           console.log(error);
        }
    }


    render() {
        return (
            <DonateContext.Provider
                value={{
                    ...this.state,
                    onChange: this.onChange,
                    submit: this.submit,
                    verify: this.verify,
                    passId: this.passId,

                }}>
                {this.props.children}
            </DonateContext.Provider>
        );
    }
}

export default DonateContextProvider;