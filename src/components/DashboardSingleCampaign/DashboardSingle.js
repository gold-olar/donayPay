import React from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import './single.css'


const DashboardSingle = (props) => {
    // console.log(props)
    return (  
        <div>
            <DashboardNav/>
            <div className = "container">
                <div className="row">
                    <div className="col">
                        <div className = "current-balance">
                            <span className="cb-head">
                                Current Balance
                            </span>
                            <span className="cb-balance">
                            ₦ 15, 780.00
                            </span>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col single-options-card shadow">
                        <div className="row">
                            <div className="col">
                                Edit Campaign
                            </div>
                            <div className="col">
                                Withdraw
                            </div>
                        </div>
                            
                        </div>
                    </div>
                    <div className="row status-and-progress ">
                        <div className="col status-card- shadow">
                            <h5 className ="">
                                Campaign Status
                            </h5>
                            <hr/>
                            <span className="status-" > Active</span>
                            <span className="status-change" > Deactivate </span>

                        </div>

                        <div className="col status-card- shadow">
                            <h5 className ="">
                                Campaign Progress
                            </h5>
                            <hr/>
                            <span className="progress- text-left" > 4 </span>  %
                            <span className="status-change text-right" > 200,000  TARGET </span>

                        </div>
                    </div>
            </div>
           
        </div>
    );
}
 
export default DashboardSingle;