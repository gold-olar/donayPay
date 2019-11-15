import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import './fullSingle.css';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import { AllCampaignsContext } from '../../contexts/allCampaignsContext';
import NotFound from '../404/404';




const FullSingleCampaign = (props) => {
    const { id } = props.match.params;
    const { campaigns, message, getSingle } = useContext(AllCampaignsContext);
    // const single = getSingle(id)

    if (campaigns) {
        let x
        for (x of campaigns) {
            if (parseInt(x.id) === parseInt(id)) {
                return (
                    <div >
                        <div className="container-fluid pb-4" >
                            <Navbar />

                            <div className="row p-3">
                                <br />

                                <div className="col-md-8 ">
                                    <div className="fullSingleCard shadow animated fadeInLeft ">
                                        <div className="card " >
                                            <img src={`http://res.cloudinary.com/Taycode/${x.image}`} className="card-img-top fullSingle-img" alt="..." />
                                            <div className="card-body">
                                                <span className="card-text pl-4"> <h3 className="font-weight" > {x.title}</h3>  </span>
                                                <br />

                                                <p className="card-text pl-4"> <i className="fas fa-user"></i>  <b> Amusan Olumide </b> is raising this campaign </p>
                                            </div>
                                            <ul className="list-group list-group-flush pl-4">
                                                <li className="list-group-item">Created 3 days ago </li>
                                                <li className=" list-group-item">
                                                    {x.description}
                                                </li>
                                                <li className="list-group-item"> <NavLink to="/" className="card-link ">Contact  Olumide </NavLink> </li>
                                            </ul>
                                            <div className="card-body ">
                                                <NavLink to="/" className="card-link pl-4">Report Campaign</NavLink>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="col-md-4">
                                    <div className="card animated fadeInRight">
                                        <div className="card-body">
                                            <h5 className="card-title"> <span className="naira-n"> ₦ </span> <b> {x.reached_amount} </b> <span className="grey"> raised of </span> <span className="goal--">{x.expected_amount}</span></h5>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">< progress max="100" value="2"></progress> </li>
                                            <li className="list-group-item"> <i className="fas fa-user"></i>  Anonymous  <span className="ml-4 " ><b> ₦ 5,000 </b> </span>  <span className="ml-4"> 1 hr ago</span> </li>
                                            <li className="list-group-item"> <i className="fas fa-user"></i>  Anonymous  <span className="ml-4 " ><b> ₦ 1,000 </b> </span>  <span className="ml-4"> 5 days ago</span> </li>
                                            <li className="list-group-item"> <i className="fas fa-user"></i>  Anonymous  <span className="ml-4 " ><b> ₦ 45,000 </b> </span>  <span className="ml-4"> 7 days ago</span> </li>
                                            <li className="list-group-item text-center ">   <NavLink to={`/share/${x.id}`} className="card-link btn btn-secondary donay-btn   pl-4">SHARE </NavLink></li>
                                            <li className="list-group-item text-center ">   <NavLink to={`/donate/${x.id}`} className="card-link btn btn-success donay-btn   pl-4">DONATE </NavLink></li>
                                        </ul>

                                    </div>


                                </div>
                            </div>

                        </div>
                        <Footer />
                    </div>
                );
            }
        }

        for (x of campaigns) {
            if (parseInt(x.id) !== parseInt(id)) {
                return <NotFound />
            }
        }
    } else {
        return <Loader />
    }


}

export default FullSingleCampaign;