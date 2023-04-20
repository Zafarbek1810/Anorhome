import React from 'react';
import Header from "../Header"
import Footer from "../Footer/footer"
import Services from './Services';
import Testimionals from "../HomePage/Testimionals"
import Clients from "../HomePage/Clients/client"
import Contact from "../HomePage/Contact/contact"


const ServicesPage = () => {
    return (
        <div>
            <Header/>
            <Services/>
            {/* <Testimionals/> */}
            <Clients/>
            <Contact/>
            {/* <Footer/> */}
        </div>
    );
};

export default ServicesPage;