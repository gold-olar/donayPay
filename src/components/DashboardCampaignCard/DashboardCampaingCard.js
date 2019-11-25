import React from 'react';
import { NavLink } from 'react-router-dom';
import campaignPic from './campaign.jpeg'
import './campaigncard.css'


const DashboardCampaignCard = () => {
    return (
        <div className="margin-left col">
            
                <div>
                    <div className="card shadow campaignCard" >
                        <img src={campaignPic} className="card-img-top campaing_card_image" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Help Me fundraise for my mums school</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.....</p>
                                <hr/>
                                <NavLink className="editLink text-center" to ="/campaign/4567890-"> View Details </NavLink>
                                <span className="card-icon float-right"> <i className="fas fa-pen-square"></i> </span>
                                <span className="card-icon float-right"> <i className="fas fa-trash"></i></span>
                                
                            </div>      
                        </div>
                    </div>
            

        </div>
            );
       }



export default DashboardCampaignCard;