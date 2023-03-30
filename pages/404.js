import React from "react";
import Header from "../src/Components/Pages/Header/index"
import Footer from "../src/Components/Pages/Footer/footer"
import MyLink from "../src/Components/Common/MyLink";
import BackSvg from "../src/Components/Common/Svgs/BackSvg"
import { ErrorPageWrapper } from "../styles/404.style";
import Container from "../src/Components/Common/Container";

const Page404 = () => {

  const onBack = () =>{
    window.history.back();
  }

  return (
    <>
    <Header />
    <ErrorPageWrapper>
     <Container>
     <section className="section1">
     <div className="wrapper">
        <div className="left">
          <h2>Page Not Found.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Rhoncus hac dui phasellus
            dolor lectus aliquam diam. Curabitur elementum faucibus dui a et.
            Neque consectetur scelerisque condim
          </p>
          <div className="buttonWr">
            <section class="buttons">
              <div className="btn1 btn-4" onClick={onBack}>
                <span> <BackSvg /> Go Back</span>
              </div>
            </section>

            <section class="buttons">
              <MyLink to="/" className="btn2 btn-4">
                <span>Take Home</span>
              </MyLink>
            </section>
          </div>
        </div>
        <div className="right">
          <img src="/images/Error.png" alt="error image" />
        </div>
      </div>
     </section>
     </Container>
    </ErrorPageWrapper>
    <Footer />
    </>
  );
};

export default Page404;
