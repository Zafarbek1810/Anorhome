import React from 'react';
import Header from '../Header';
import Banner from './Banner';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <SecondSection/>
            <ThirdSection/>
        </div>
    );
};

export default HomePage;