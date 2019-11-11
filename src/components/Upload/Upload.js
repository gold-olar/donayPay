import React , { useContext }  from 'react';
import './upload.css'
import DashboardNav from '../DashboardNav/DashboardNav';
import Footer from '../Footer/Footer';
import { CampaignFormContext } from '../../contexts/campaignFormContext';
import { Redirect } from 'react-router-dom';



const UploadImage = () => {
    const {goBack, imageUpload, onChangeHandler, createCampaign } =  useContext(CampaignFormContext);

    let redirect = null;
    if(!imageUpload){
        redirect = <Redirect to = "/newCampaign"/>
    }
    return ( 
        <div>
            {redirect}
            <DashboardNav/>
            <div className = "container-fluid padding-bottom">
                <div className="row">
                    <div className="col">
                    <div className="upload-card shadow animated slideInLeft" >
                        <h3 className="upload-header text-center"> Add a cover photo </h3>
                         <form className="md-form" onSubmit={createCampaign}>
                            <div className="file-field">
                                <div className="d-flex justify-content-center">
                                <div className="button_upload btn btn-mdb-color btn-rounded float-left">
                                    <input 
                                      onChange={(e) => onChangeHandler(e, "image")}
                                    type="file"/>
                                </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row form-row">
                                    <div className="col">
                                        <button type="submit"                           
                                        className=" cc-btn text-uppercase  text-center sign-up-page"> CREATE CAMPAIGN</button>
                                    </div>
                                </div>
                        </form>
                        </div>
                        <br></br>
                        <p className ="animated slideInRight text-center story-text">A high-quality photo will tell your story better </p>
                        <br/>
                        <p onClick={goBack} className="go-back-link text-center animated slideInRight"   > GO BACK  </p>

                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
     );
}
 
export default UploadImage;