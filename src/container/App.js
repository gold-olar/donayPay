import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, } from 'react-router-dom';
import './App.css';

// Components
import IndexPage from './Index/Index';
import SignUp from '../components/SignUp/SignUp';
import NotFound from '../components/404/404'
import Login from '../components/LogIn/Login';
import FormContextProvider from '../contexts/FormContext';
import Dashboard from '../components/Dashboard/Dashboard';
import NewCampaign from '../components/NewCampaign/NewCampaign';
import CampaignFormContextProvider from '../contexts/campaignFormContext';
import UploadImage from '../components/Upload/Upload';
import DashboardSingle from '../components/DashboardSingleCampaign/DashboardSingle';
import AllCampaigns from '../components/AllCampaigns/AllCampaigns';
import FullSingleCampaign from '../components/FullSingleCampaign/FullSingleCampaign';
import Donate from '../components/Donate/Donate';
import DonateContextProvider from '../contexts/donateContext';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <FormContextProvider>
          <CampaignFormContextProvider>
            <DonateContextProvider>
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



                <Route path = '/campaign/:id'  component={DashboardSingle} />
                <Route path='*' exact component={NotFound} />

              </Switch>

            </div>
            </DonateContextProvider>
          </CampaignFormContextProvider>
        </FormContextProvider>

      </BrowserRouter >
    );
  }
}

export default App;
