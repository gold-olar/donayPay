import React from 'react';
import Navbar from '../Navbar/Navbar';
import './fullSingle.css';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';




const FullSingleCampaign = () => {



    // fetchSingleCampaign = async (id) => {
    //     const campaign = await axios.get(`/${id}`);
    //     this.setState({
    //         campaign: campaign.data
    //     });
    //     console.log(this.state.campaign)
    // }
    return (
        <div >
            <div className="container-fluid pb-4" >
                <Navbar />
                {
                    this.state.campaign ?
                        <div className="row p-3">
                            <br />

                            <div className="col-md-8 ">
                                <div className="fullSingleCard shadow ">
                                    <div className="card " >
                                        <img src={this.state.campaign.image} className="card-img-top fullSingle-img" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text pl-4"> <h3 className="font-weight" > {this.state.campaign.title}</h3>  </p>
                                            <br />

                                            <p className="card-text pl-4"> <i className="fas fa-user"></i>  <b> Amusan Olumide </b> is raising this campaign </p>
                                        </div>
                                        <ul className="list-group list-group-flush pl-4">
                                            <li className="list-group-item">Created 3 days ago </li>
                                            <li className="list-group-item">
                                                {this.state.campaign.description}
                                            </li>
                                            <li className="list-group-item"> <NavLink to="/" className="card-link ">Contact  Olumide </NavLink> </li>
                                        </ul>
                                        <div className="card-body ">
                                            <NavLink to="/" className="card-link pl-4">Report Campaign</NavLink>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="col-md-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title"> <span className="naira-n"> ₦ </span> <b> {this.state.campaign.reached_amount} </b> <span className="grey"> raised of </span> <span className="goal--">{this.state.campaign.expected_amount}</span></h5>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">< progress max="100" value="2"></progress> </li>
                                        <li class="list-group-item"> <i className="fas fa-user"></i>  Anonymous  <span className="ml-4 " ><b> ₦ 5,000 </b> </span>  <span className="ml-4"> 1 hr ago</span> </li>
                                        <li class="list-group-item"> <i className="fas fa-user"></i>  Anonymous  <span className="ml-4 " ><b> ₦ 1,000 </b> </span>  <span className="ml-4"> 5 days ago</span> </li>
                                        <li class="list-group-item"> <i className="fas fa-user"></i>  Anonymous  <span className="ml-4 " ><b> ₦ 45,000 </b> </span>  <span className="ml-4"> 7 days ago</span> </li>
                                        <li class="list-group-item btn btn-success color-green">   <NavLink to={`/donate/${this.state.campaign.id}`} className="card-link pl-4">DONATE </NavLink></li>
                                    </ul>

                                </div>


                            </div>
                        </div>
                        :
                        <Loader />
                }
            </div>
            <Footer />
        </div>
    );
}

export default FullSingleCampaign;