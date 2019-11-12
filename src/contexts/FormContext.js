import React, { createContext, Component } from 'react';
import axios from 'axios';


export const FormContext = createContext()


class FormContextProvider extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        message: '',
        loading: false,
    }
    onChange = (e, identifier) => {
        this.setState({
            [identifier]: e.target.value,
            message: null
        });
    };



    comparePassword = () => {
        let { password, confirmPassword } = this.state;

        if (password && confirmPassword && confirmPassword !== password) {
            this.setState({
                message: "Your passwords do not match"
            })
        }
    }

    onSignUpSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true, })
        let { firstName, lastName, email, password, } = this.state;
        let userDetails = {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            auth: false,
        }
        try {
            const signUp = await axios.post('/account/register/', userDetails);
            if (signUp.status === 201) {
                console.log('E wan go login');
                const login = await axios.post('/account/login/', userDetails);
                console.log(login)

                if (login.status === 200) {
                    const { token } = login
                    console.log(token)
                    axios.defaults.headers.common['auth'] = token;
                    this.setState({
                        loading: false,
                        auth: true,
                    })
                } else {
                    // I dont think this login can fail though ..
                }


            } else {
                // Signing Up wasnt successful
            };
        } catch (error) {
            console.log(error)
        }
    }


    onLoginSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true, })

        let { email, password, } = this.state;
        let userDetails = {
            email,
            password,
        }
        try {
            const login = await axios.post('/account/login/', userDetails);
            console.log(login)
            const { token } = login.data
            if(!token){
                this.setState({
                    message: login.data.error,
                    loading: false,
                })
            }
            axios.defaults.headers.common['auth'] = token;
            this.setState({
                loading: false,
                auth: true,
            })
        } catch (error) {
            console.log(error)
        }
    }


    render() {
        return (
            <FormContext.Provider
                value={{
                    ...this.state, onChangeHandler: this.onChange, onSignUpFormSubmitHandler: this.onSignUpSubmit, comparePasswordHandler: this.comparePassword,
                    onLoginFormSubmitHandler: this.onLoginSubmit, loading: this.state.loading,
                }}>
                {this.props.children}
            </FormContext.Provider>
        );
    }
}

export default FormContextProvider;