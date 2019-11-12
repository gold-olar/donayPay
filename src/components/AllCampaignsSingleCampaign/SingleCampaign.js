import React from 'react';
import './singleCard.css';
import {NavLink} from 'react-router-dom';

const SingleCampaign = ({ image, title, story, id, goal, reached, percentage, }) => {
    return (
      
       <NavLink to={`/${id}`}>
            <div className="card single-campaign-card shadow" >
            <img src={`http://res.cloudinary.com/Taycode/${image}`} className="card-img-top c-img" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> {title}</h5>
                    <p className="card-text">{story }</p>
                    <p className="last-donay"> Last Donation  4 hours ago </p>
                   < progress max="100" value="50"></progress> 
                   <br/>
                   <span className="naira-n"> ₦ </span> <b> {reached}.00 </b> raised of <span className="goal--"> ₦ {goal}</span>

                    {/* <NavLink to={`/campaign/${id}`} className="reqe-button text-uppercase login-btn text-center sign-up-page"> Donate </NavLink> */}
                </div>
        </div>
       </NavLink>
            );
       }
        
export default SingleCampaign;