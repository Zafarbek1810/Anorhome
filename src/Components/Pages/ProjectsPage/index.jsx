import React from 'react';
import Header from "../Header"
import Footer from "../Footer/footer"
import OurProjects from './OurProjects';
const ProjectsPage = () => {
    return (
        <>
         <Header/>
         <div style={{height:150, background: "#161a1d"}}></div>
         <OurProjects/>
         <Footer/>   
        </>
    );
};

export default ProjectsPage;