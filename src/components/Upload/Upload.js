import React, { useContext } from 'react';
import './upload.css'
import DashboardNav from '../DashboardNav/DashboardNav';
import Footer from '../Footer/Footer';
import { CampaignFormContext } from '../../contexts/campaignFormContext';
import { Redirect } from 'react-router-dom';
import Loader from '../Loader/Loader';



const UploadImage = () => {
    const { goBack, imageUpload, handleImageChange, createCampaign, loading, redirectToDashboard, message } = useContext(CampaignFormContext);

    let redirect = null;
    if (!imageUpload) {
        redirect = <Redirect to="/newCampaign" />
    }
    if (redirectToDashboard) {
        redirect = <Redirect to='/dashboard' />
    }
    return (
        <div>
            {redirect}
            <DashboardNav />
            {loading ? <Loader /> : null}
            <div className="container-fluid padding-bottom">
                <div className="row">
                    <div className="col">
                        <div className="upload-card shadow animated slideInLeft" >
                            <h3 className="upload-header text-center"> Add a cover photo </h3>
                            <form className="md-form" onSubmit={createCampaign}>
                                {message ? <p className="error text-center red"> {message} </p> : null}
                                <div className="file-field">
                                    <div className="d-flex justify-content-center">
                                        <div className="button_upload btn btn-mdb-color btn-rounded float-left">
                                            <input
                                                id="image"
                                                onChange={handleImageChange}
                                                type="file" accept="image/png, image/jpeg, image/jpg" />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="row form-row">
                                    <div className="col">
                                        <button type="submit"
                                            className=" cc-btn text-uppercase  text-center sign-up-page"> CREATE CAMPAIGN</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <br></br>
                        <p className="animated slideInRight text-center story-text">A high-quality photo will tell your story better </p>
                        <br />
                        <p onClick={goBack} className="go-back-link text-center animated slideInRight"   > GO BACK  </p>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default UploadImage;