import React, { createContext, Component } from 'react';
import axios from 'axios';



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
    };

    handleImageChange = (e) => {
        this.setState({
          image: e.target.files[0]
        })
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
        this.setState({ loading: true });
        
        const { story, image, forWho, goal, title, } = this.state;
        
        let formData = new FormData()
        formData.append('title', title);
        formData.append('image', image, image.name);
        formData.append('description', story);
        formData.append('beneficiary', forWho);
        formData.append("expected_amount", goal);
        console.log(this.state)

        console.log("FORM DATA BEGINS", formData.values(), 'FORM DATA ENDS');
        try {
            const createCampaign = await axios.post('/create/', formData, { 
                headers: { Authorization: `token ${localStorage.getItem("token")}` },
                'content-type': 'multipart/form-data'
         });
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
                    createCampaign: this.onCreateCampaign, handleImageChange : this.handleImageChange,
                }}>
                {this.props.children}
            </CampaignFormContext.Provider>
        );
    }
}

export default CampaignFormContextProvider;