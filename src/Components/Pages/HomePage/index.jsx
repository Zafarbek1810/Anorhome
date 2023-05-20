import React from 'react';
// import Footer from '../Footer/footer';
import Header from '../Header';
import Banner from './Banner';
import Clients from './Clients/client';
import Contact from './Contact/contact';
import SecondSection from './SecondSection';
// import Testimionals from './Testimionals';
import ThirdSection from './ThirdSection';
import NewsHome from './News';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <SecondSection/>
            <ThirdSection/>
            {/* <Testimionals/> */}
            {/* <Clients /> */}
            <NewsHome/>
            <Contact />
            {/* <Footer /> */}
        </div>
    );
};

export default HomePage;