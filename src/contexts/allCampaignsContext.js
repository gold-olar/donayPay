import React, { createContext, Component } from 'react';
import axios from 'axios';


export const AllCampaignsContext = createContext()


class AllCampaignsContextProvider extends Component {
    state = {
        campaigns: null,
        loading: true,
        message: null,
    }

    fetchAllCampaigns = async () => {
        this.setState({loading: true});
        const allCampaigns = await axios.get('/all/');

        if (allCampaigns.data) {
            this.setState({
                loading: false,
                campaigns: allCampaigns.data,
            });
        } else {
            this.setState({
                message: "No Campaigns Yet"
            });
        };
        // console.log(allCampaigns.data)
    };

    share = (id, story, medium) => {
        if (medium === "w"){
            window.open(`https://api.whatsapp.com/send?&text=http://donaypay.herokuapp.com/singleCampaign/${id}. ${story}`);
        }else {
            window.open(`https://twitter.com/intent/tweet?text=http://donaypay.herokuapp.com/singleCampaign/${id}. ${story}`);

        }
    }
    
   
    componentDidMount(){
        this.fetchAllCampaigns();
    }

    render() {
        return (
            <AllCampaignsContext.Provider
                value={{...this.state, getSingle: this.getSingle, share: this.share}}>
                {this.props.children}
            </AllCampaignsContext.Provider>
        );
    }
}

export default AllCampaignsContextProvider;