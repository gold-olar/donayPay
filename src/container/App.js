import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, } from 'react-router-dom';
import './App.css';

// Components
import IndexPage from './Index/Index';
import SignUp from '../components/SignUp/SignUp';
import NotFound from '../components/404/404'
import Login from '../components/LogIn/Login';
import Dashboard from '../components/Dashboard/Dashboard';
import NewCampaign from '../components/NewCampaign/NewCampaign';
import UploadImage from '../components/Upload/Upload';
import DashboardSingle from '../components/DashboardSingleCampaign/DashboardSingle';
import AllCampaigns from '../components/AllCampaigns/AllCampaigns';
import FullSingleCampaign from '../components/FullSingleCampaign/FullSingleCampaign';
import Donate from '../components/Donate/Donate';
import Otp from '../components/OTP/otp';
import ProfileDatails from '../components/Profile/Profile';
import ContactUs from '../components/ContactUs/ContactUs';
import TeamPage from '../components/Team/Team';

// Contexts
import FormContextProvider from '../contexts/FormContext';
import CampaignFormContextProvider from '../contexts/campaignFormContext';
import DonateContextProvider from '../contexts/donateContext';
import AllCampaignsContextProvider from '../contexts/allCampaignsContext';
import CreateProfileContextProvider from '../contexts/creteProfileContext';



class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <FormContextProvider>
          <CampaignFormContextProvider>
            <DonateContextProvider>
              <AllCampaignsContextProvider>
                <CreateProfileContextProvider>
                  <div className="App">
                    <Switch>
                      <Route path='/' exact component={IndexPage} />
                      <Route path='/signup' exact component={SignUp} />
                      <Route path='/login' exact component={Login} />
                      <Route path='/dashboard' exact component={Dashboard} />
                      <Route path ='/newCampaign' exact component={NewCampaign} />
                      <Route path ='/upload' exact component={UploadImage} />
                      <Route path = '/campaigns' exact component={AllCampaigns} />
                      <Route path = '/singleCampaign/:id' exact component={FullSingleCampaign} />
                      <Route path = '/donate/:id' exact component={Donate} />
                      <Route path = '/otp/:id' component={Otp} />
                      <Route path = '/campaign/:id'  component={DashboardSingle} />
                      <Route path = '/profile' exact component={ProfileDatails} />
                      <Route path = '/contact' exact component={ContactUs} />
                      <Route path = '/team' exact component={TeamPage} />
                      <Route path='*' exact component={NotFound} />
                    </Switch>
                  </div>
                </CreateProfileContextProvider>
              </AllCampaignsContextProvider>
            </DonateContextProvider>
          </CampaignFormContextProvider>
        </FormContextProvider>
      </BrowserRouter >
    );
  }
}

export default App;
