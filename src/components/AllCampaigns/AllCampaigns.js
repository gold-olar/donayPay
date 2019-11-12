import React, { Component } from 'react';
import NavBar from '../Navbar/Navbar';
import axios from 'axios';
import Loader from '../Loader/Loader';
import SingleCampaign from '../AllCampaignsSingleCampaign/SingleCampaign';
import Footer from '../Footer/Footer';

class AllCampaigns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCampaigns: [],
            loading: true,
            message: null,
        }
    }

    fetchAllCampaigns = async () => {
        const allCampaigns = await axios.get('/all/')
        if (allCampaigns.data) {
            this.setState({
                loading: false,
                allCampaigns: allCampaigns.data,
            })
        } else {
            this.setState({
                message: "No Campaigns Yet"
            })
        }
        console.log(allCampaigns)
    }

    componentDidMount() {
        this.fetchAllCampaigns();
    }

    render() {
        return (
            <div className="">
                {this.state.loading ? <Loader /> : null}
                {this.state.message ? <p className="text-center"> {this.state.message} </p> : null}
                <NavBar />
                <div className=" a-c-body container-fluid">
                    <h3 className="text-center "> ALL CAMPAIGNS</h3>
                    <br/>
                    <div className="row">
                        {
                            this.state.allCampaigns.map((singleCampaign) => {

                                return (
                                    <div className="col-md-3">
                                        <SingleCampaign  image={singleCampaign.image} title={singleCampaign.title} story={singleCampaign.description} 
                                        id={singleCampaign.id}  goal={singleCampaign.expected_amount} reached={singleCampaign.reached_amount}
                                        percentage={singleCampaign.percentage}
                                        
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AllCampaigns;
