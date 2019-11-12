import React from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import './single.css'
import Footer from '../Footer/Footer';
import editIcon from './edit.svg';
import walletIcon from './wallet.svg';



const DashboardSingle = (props) => {
    // console.log(props)

    return (
        <div>
            <DashboardNav />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="current-balance">
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
                            <div className="col text-center each-option-">
                                <img src={editIcon} alt="..." className="icon-edit" />
                                Edit Campaign
                            </div>
                            <div className="col text-center each-option-">
                                <img src={walletIcon} alt="..." className="icon-edit" />

                                Withdraw
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row status-and-progress ">
                    <div className="col status-card- ">
                        <h5 className="campaign-status-header ">
                            Campaign Status
                            </h5>
                        <hr />
                        <span className="status-" > Active</span>
                        <span className="status-change" > Deactivate </span>

                    </div>

                    <div className="col status-card- ">
                        <h5 className="campaign-status-header">
                            Campaign Progress
                            </h5>
                        <hr />
                        <span className="progress- text-left" > 4 </span>  <span className="percent"> % </span>
                        <span className="status-change-target text-right" > <sup className="naira-sup"> ₦ </sup>  200,000   </span> <span className="target"> TARGET </span>
                        <div className="row status-and-progress ">


                            <progress max="100" value="4"></progress>

                        </div>
                    </div>
                </div>
                <div className="row margin-bottom">
                    <div className="col status-card- ">
                        <h5 className="campaign-status-header ">
                            Recent Transactions
                            </h5>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Processed</td>
                                    <td>Nov 6, 2019</td>
                                    <td> ₦ 2, 500.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Processed</td>
                                    <td>Nov 6, 2019</td>
                                    <td> ₦ 2, 500.00</td>
                                </tr>
                             
                            </tbody>
                        </table>


                    </div>
                    <div className="col status-card- ">
                        <h5 className="campaign-status-header ">
                            Campaign Info
                            </h5>
                            <hr/>
                        <p> I never know wetin go dey here ahbeg  </p>

                    </div>

                   
                </div>


            </div>
            <Footer/>
        </div>
    );
}

export default DashboardSingle;