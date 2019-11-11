import React from 'react';
import './upload.css'
import DashboardNav from '../DashboardNav/DashboardNav';
import Footer from '../Footer/Footer';

const UploadImage = () => {
    return ( 
        <div>
            <DashboardNav/>
            <div className = "container-fluid padding-bottom">
                <div className="row">
                    <div className="col">
                    <div className="upload-card shadow animated slideInLeft" >
                        <h3 className="upload-header text-center"> Add a cover photo </h3>
                        <form action="#">
                            <div className="input-file-container">  
                                <input className="input-file" id="my-file" type="file"/>
                                <label for="select" tabindex="0" for="my-file" className="input-file-trigger"><i className="fa fa-paperclip" aria-hidden="true"></i> Upload Photo</label>
                            </div>
                            <p className="file-return"></p>
                            </form>
                        </div>
                        <br></br>
                        <p className ="text-center story-text">A high-quality photo will tell your story better </p>
                        


                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
     );
}
 
export default UploadImage;