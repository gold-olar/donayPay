import React, { createContext, Component } from 'react';
// import axios from 'axios';


export const CampaignFormContext= createContext()


class CampaignFormContextProvider extends Component {
    state = {
        goal: '',
        title: '',
        forWho: '',
        story: '',
        image: '',
        loading: false,
        imageUpload : false,
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
        this.setState({ imageUpload : true, })
    }

    goBack = () =>{
        this.setState({
            imageUpload: false,
        })
    }

    onCreateCampaign = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <CampaignFormContext.Provider 
            value = {{ 
                ...this.state, onNextSubmit: this.onNextSubmit, onChangeHandler :this.onChange, goBack: this.goBack,
                createCampaign : this.onCreateCampaign,
                }}>
                {this.props.children}
            </CampaignFormContext.Provider>
        );
    }
}

export default CampaignFormContextProvider;