import React, { useContext } from 'react';
import NavBar from '../Navbar/Navbar';
import Loader from '../Loader/Loader';
import SingleCampaign from '../AllCampaignsSingleCampaign/SingleCampaign';
import Footer from '../Footer/Footer';
import { AllCampaignsContext } from '../../contexts/allCampaignsContext';

const AllCampaigns = () => {
    const { campaigns, loading, message } = useContext(AllCampaignsContext);

    return (
        <div className="">
            {loading ? <Loader /> : null}
            <NavBar />
            {message ? <p className="text-center"> {message} </p> : null}
            {campaigns ?
                <div className=" a-c-body container-fluid">
                    <h3 className="text-center all-c_header "> ALL CAMPAIGNS</h3>
                    <br />
                    <div className="row">
                        {
                            campaigns.map((singleCampaign) => {
                                return (
                                    <div className="col-md-3">
                                        <SingleCampaign key={singleCampaign.id} image={singleCampaign.image} title={singleCampaign.title} story={singleCampaign.description}
                                            id={singleCampaign.id} goal={singleCampaign.expected_amount} reached={singleCampaign.reached_amount}
                                            percentage={singleCampaign.percentage}

                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                :
                <div> Fetching Campaigns... </div>
            }
            <Footer />
        </div>
    );
}

export default AllCampaigns;
