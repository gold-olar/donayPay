import React, { createContext, Component, useContext } from 'react';
import axios from 'axios';
import { FormContext } from './FormContext';



export const CampaignFormContext = createContext()


class CampaignFormContextProvider extends Component {
    state = {
        goal: '',
        title: '',
        forWho: '',
        story: '',
        image: '',
        loading: false,
        imageUpload: false,
        redirectToDashboard: false,
    }
    onChange = (e, identifier) => {
        this.setState({
            [identifier]: e.target.value,
            message: null
        });
        console.log(this.state)
        // console.log(this.props)
    };

    onNextSubmit = (e) => {
        e.preventDefault();
        this.setState({ imageUpload: true, })
    }

    goBack = () => {
        this.setState({
            imageUpload: false,
        })
    }

    onCreateCampaign = async (e) => {
        e.preventDefault();

        this.setState({ loading: true })
        const { story, image, forWho, goal, title, } = this.state;
        let campaignDetails = {
            description: story,
            image,
            beneficiary: forWho,
            expected_amount: goal,
            title,
        }
        try {
            const createCampaign = await axios.post('/create/', campaignDetails, { headers: { Authorization: `token ${localStorage.getItem("token")}` }, });
            console.log(createCampaign);
            if (createCampaign.status === 201) {
                this.setState({
                    message: "created succesfully",
                    loading: false,
                    redirectToDashboard: true,
                    imageUpload: false,
                })
            } else {
                this.setState({
                    message: "there was an error",
                    loading: false,
                    imageUpload: true,

                })
            }
        } catch (error) {
            this.setState({
                message: "there was an error that was caught",
                loading: false,
                imageUpload: true,

            })
            console.log(error);

        }

        // console.log(this.state)
    }

    render() {
        return (
            <CampaignFormContext.Provider
                value={{
                    ...this.state, onNextSubmit: this.onNextSubmit, onChangeHandler: this.onChange, goBack: this.goBack,
                    createCampaign: this.onCreateCampaign,
                }}>
                {this.props.children}
            </CampaignFormContext.Provider>
        );
    }
}

export default CampaignFormContextProvider;