import React, { createContext, Component } from 'react';
import axios from 'axios';


export const createProfileContext = createContext()


class CreateProfileContextProvider extends Component {
    state = {
       loading: false,
       banks: [],
    }

    onChange = (e, identifier) => {
        this.setState({
            [identifier]: e.target.value,
            message: null
        });
    };

    fetchBanks = async () => {
        const banks = await axios.get(`https://api.ravepay.co/v2/banks/NG?public_key=FLWPUBK-0dc889ff2284c0ac8b01399b65043d87-X`);
        console.log(banks.data.Banks);
    }

    submitFormHandler = () => {
       
    }




    conponentDidMount() {
        this.fetchBanks();
    }

    render() {
        return (
            <createProfileContext.Provider
                value={{
                    ...this.state, onChangeHandler: this.onChange, onSignUpFormSubmitHandler: this.onSignUpSubmit, comparePasswordHandler: this.comparePassword,
                    onLoginFormSubmitHandler: this.onLoginSubmit, loading: this.state.loading, logOut: this.logOut,
                }}>
                {this.props.children}
            </createProfileContext.Provider>
        );
    }
}

export default CreateProfileContextProvider;