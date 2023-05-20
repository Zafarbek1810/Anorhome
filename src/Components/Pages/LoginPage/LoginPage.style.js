import styled from "styled-components";

const LoginPageWrapper=styled.div`
 padding-top: 50px;
  
  .wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 100px) !important;
  }

  //.logo{
  //  display: flex;
  //  align-items: center;
  //  text-decoration: none;
  //  color: #000;
  //  svg{
  //    height: 40px; 
  //  }
  //  span{
  //    text-transform: uppercase;
  //    margin-left: 10px;
  //    width: 20%;
  //    font-size: 0.75rem;
  //    font-weight: 600;
  //  }
  //}

  .logo{
    width: 25%;
    display: flex;
    align-items: center;
    color: #000;
    text-decoration: none;
    span{
      text-transform: uppercase;
      margin-left: 10px;
      width: 80%;
      font-size: 0.6875rem;
      line-height: 18px;
      font-family: "Montserrat";
      letter-spacing: 0.5px;
      font-weight: 600;
      margin-right: -50px;
    }
  }
  
  .main{
    h4{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 1.875rem;
      line-height: 38px;
      color: #000000;
      text-align: center;
    }
    
    form{
      width: 50%;
      background: #fff;
      padding:35px;
      margin: auto;
      margin-bottom: 50px;

      display: flex;
      flex-direction: column;
      align-items: center;
      .input{
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        
        label{
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 0.75rem;
          //line-height: 20px;
          color: #1F3C88;
          margin-bottom: 10px;
          text-align: start;
        }
        input{
          width: 100%;
          background: rgba(31, 60, 136, 0.05);
          border: 1px solid rgba(31, 60, 136, 0.2);
          border-radius: 6px;
          margin-bottom: 35px;
          padding: 15px;
          font-size: 1rem;
          font-weight: 600;
        }
      }
      
      .loginBtn{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 20px;
        padding: 15px 60px;
        color: #FFFFFF;
        background: #1F3C88;
        border-radius: 6px;
        border: none;
        height: 50px;
        cursor: pointer;
        
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        &:disabled {
          cursor: not-allowed !important;
        }
      }
    }
  }

  .created{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 0.75rem;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.5);
    text-align:  center;
    margin-bottom: 30px;

    .crlink{
      color: #1f3c88;
      text-decoration: none;
    }
  }
  
  @media( max-width: 992px){
    form{
      width: 80% !important;
    }
  }
`

export {LoginPageWrapper}
