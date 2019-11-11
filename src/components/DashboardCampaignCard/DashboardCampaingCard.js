import React from 'react';
import { NavLink } from 'react-router-dom';
import campaignPic from './campaign.jpeg'
import './campaigncard.css'


const DashboardCampaignCard = () => {
    return (
        <div className="margin-left">
            <NavLink to="" >
                <div>
                    <div class="card shadow campaignCard" >
                        <img src={campaignPic} class="card-img-top campaing_card_image" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Help Me fundraise for my mums school</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.....</p>
                                <hr/>
                                <NavLink className="editLink text-center" to ="edit"> Edit </NavLink>
                                <span className="card-icon float-right"> <i class="fas fa-pen-square"></i> </span>
                                <span className="card-icon float-right"> <i class="fas fa-trash"></i></span>
                                
                            </div>      
                        </div>
                    </div>
            </NavLink>

        </div>
            );
       }



export default DashboardCampaignCard;