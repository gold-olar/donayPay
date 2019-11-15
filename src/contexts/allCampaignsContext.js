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
        console.log(allCampaigns.data)
    };

  

    componentDidMount(){
        this.fetchAllCampaigns();
    }

    render() {
        return (
            <AllCampaignsContext.Provider
                value={{...this.state, getSingle: this.getSingle,}}>
                {this.props.children}
            </AllCampaignsContext.Provider>
        );
    }
}

export default AllCampaignsContextProvider;