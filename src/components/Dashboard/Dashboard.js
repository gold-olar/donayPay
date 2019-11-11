import React from 'react';
import './dashboard.css';
import Footer from '../Footer/Footer';
import DashboardCampaignCard from '../DashboardCampaignCard/DashboardCampaingCard';
import DashboardNav from '../DashboardNav/DashboardNav';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <DashboardNav />
            {/* <h4 className="dashboard-header"> My Campaigns</h4> */}
            <div className="board animated slideInLeft ">
                <DashboardCampaignCard />
                <DashboardCampaignCard />

                <div className="margin-left">
                <NavLink to="/newCampaign" >
                    <div>
                        <div class="card campaignCard" >
                        <i class="fas fa-plus-circle"></i>
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
