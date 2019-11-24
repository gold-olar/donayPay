import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Stats from '../../components/Stats/Stats';
import Steps from '../../components/Steps/Steps';

const IndexPage = () => {
    return (
        <div>
            <NavBar/>
            <Header />
            <Steps />
            <Stats />
            <Footer />

        </div>
    );
}

export default IndexPage;