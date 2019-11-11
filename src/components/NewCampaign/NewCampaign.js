import React from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import './newCampaign.css';
import goldin from './goldin.jpg'
import Footer from '../Footer/Footer';

const NewCampaign = () => {
    return (
        <div>
            <DashboardNav />
            <div className="container fluid padding-bottom">
                <div className="row">
                    <div className="col-md-8">
                        <div className="newCampaign-card animated slideInLeft shadow">
                            <form>
                                <div className="row form-row">
                                    <div className="col">
                                        <h3> Enter your goal here ?</h3>

                                        <span className="naira"> ₦ </span>

                                        <input type="text" name="goal" className="form-control goal-field" placeholder="300,000" required />
                                    </div>
                                    <div className="col">
                                        <h3> Who are you raising funds for ?</h3>
                                        <select className="form-control" name="forWho">
                                            <option value="" default> -- </option>
                                            <option value="self" default> Myself or Someone else </option>
                                            <option value="organisation" default> Non Profit or Organisation </option>

                                        </select>
                                    </div>
                                </div>
                                <div className="row form-row">
                                    <div className="col">
                                        <h3 className="story-header"> Tell your story </h3>
                                        <textarea className="story-input" name="story" rows="5" maxlength="300" placeholder="Narrate your story here" >

                                        </textarea>
                                    </div>
                                </div>
                                <div className="row form-row">
                                    <div className="col">
                                        <button type="submit" className="reqe-button text-uppercase  text-center sign-up-page"> Create Campaign</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="tips-card shadow">
                            <div className='container-fluid'>
                                <div className="row border-bottom">
                                    <h6 className="tips-header"> Tips from Goldin our campaign expert</h6>
                                    <img className="goldin " src={goldin} alt="..." />
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h7 className="ensure-text"> To ensure effective sponsorship of your campaign, make sure you: </h7>
                                        <ul className="ensure-tips">
                                            <li>
                                                <i class="fas fa-check"></i>
                                                Describe who will benefit.
                                        </li>
                                            <li>
                                                <i class="fas fa-check"></i>
                                                Detail what the funds will be used for.
                                        </li>
                                            <li>
                                                <i class="fas fa-check"></i>
                                                Indicate the urgency of the funds.
                                        </li>
                                            <li>
                                                <i class="fas fa-check"></i>
                                                Share how grateful you will be for the help.
                                        </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NewCampaign;