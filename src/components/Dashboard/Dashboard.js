import React , { useContext } from 'react';
import './dashboard.css';
import Footer from '../Footer/Footer';
import DashboardCampaignCard from '../DashboardCampaignCard/DashboardCampaingCard';
import DashboardNav from '../DashboardNav/DashboardNav';
import { NavLink , Redirect } from 'react-router-dom';
import { FormContext } from '../../contexts/FormContext';

const Dashboard = () => {
    const { firstName, lastName, loading, auth } = useContext(FormContext)
    let redirect = null;
    if(!auth){
        redirect = <Redirect to = "/login"/>
    }
    return (
        <div>
        {redirect}
            <DashboardNav />
            <div className="board animated slideInLeft ">
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
