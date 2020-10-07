import React from 'react';
import './singleCard.css';
import { NavLink } from 'react-router-dom';

const SingleCampaign = ({ image, title, ...otherProps }) => {
    return (

        <NavLink  to={`/singleCampaign/${otherProps.id}`}>
            <div className="card single-campaign-card shadow animated wow slideInLeft" >
                <img src={`http://res.cloudinary.com/Taycode/${image}`} className="card-img-top c-img" alt={title} />
                <div className="card-body">
                    <h5 className="card-title description-st"> {title}</h5>
                    <p className="card-text story-p">{otherProps.story}</p>
                    <p className="last-donay"> Last Donation was 4 hours ago </p>
                    < progress max="100" value={otherProps.percentage}></progress>
                    <br />
                    <span className="naira-n"> ₦</span><b>{otherProps.reached}.00 </b> <span className="grey raised--"> raised of </span> <span className="goal--"> ₦ <b>{otherProps.goal}.00</b></span>
                </div>
            </div>
        </NavLink>
    );
}

export default SingleCampaign;