import React from 'react';
import Header from '../Header';
import Contact from '../HomePage/Contact/contact';
import New from './New';
import Review from './Review';
import Analytic from './Analytic';

const News = () => {
    return (
        <div>
            <Header/>
            <div style={{height:150, background: "#161a1d"}}></div>
            <New/>
            <Review/>
            <Analytic/>
            <Contact/>
        </div>
    );
};

export default News;