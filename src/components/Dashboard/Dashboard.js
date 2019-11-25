import React , { useContext } from 'react';
import './dashboard.css';
import Footer from '../Footer/Footer';
import DashboardCampaignCard from '../DashboardCampaignCard/DashboardCampaingCard';
import DashboardNav from '../DashboardNav/DashboardNav';
import { NavLink , Redirect } from 'react-router-dom';
import { FormContext } from '../../contexts/FormContext';
import { CampaignFormContext } from '../../contexts/campaignFormContext';

const Dashboard = () => {
    const { auth } = useContext(FormContext);
    const {message} = useContext(CampaignFormContext)


    let redirect = null;
    if(!auth){
        redirect = <Redirect to = "/login"/>
    }
    return (
        <div className="container" >
        {redirect}
            <DashboardNav />
            {message ? <p className=" text-center "> {message} </p> : null }
            <div className="board animated slideInLeft row ">
                {/* RENDER EACH CAMPAIGN CARDS HERE  */}


                <DashboardCampaignCard />
                <DashboardCampaignCard />

                <div className="margin-left">
                <NavLink to="/newCampaign" >
                    <div>
                        <div className="card campaignCard" >
                        <i className="fas fa-plus-circle"></i>
                        <p className="text-center create-campagin"> Start new campaign </p>

                        </div>
                    </div>
                </NavLink>
                </div>


            </div>
            <Footer />

        </div>

    )
}

export default Dashboard;
