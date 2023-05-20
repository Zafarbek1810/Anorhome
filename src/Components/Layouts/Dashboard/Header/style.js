import styled from "styled-components";

const HeaderWrapper=styled.div`
  width: 100%;
  padding: 0 30px;
  height: 90px;
  font-family: "Montserrat" !important;
  .wrapper{
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
      height: 100%;
      display: flex;
      align-items: center;
      
      h3{
        font-style: normal;
        font-weight: 600;
        font-size: 1.375rem;
        line-height: 28px;
        color: #000000;      
      }
    }
    .right{
      display: flex;
      align-items: center;
      
      .lang{
        display: flex;
        gap: 10px;
        .link{
          font-style: normal;
          font-weight: 600;
          font-size: 1rem;
          line-height: 20px;
          color: #C4C4C4;
          text-decoration: none;
        }
        .active{
          color: #1F3C88;
        }
      }
      
      .user{
        margin-left: 100px;
        display: flex;
        align-items: center;
        
        p{
          margin-right: 15px;
        }
        .exitBtn{
          position: relative;
          .exit{
            background: transparent;
            border: none;
            cursor: pointer;
            margin-right: 30px;
          }
          .bottom{
            display: none;
            position: absolute;
            top: 20px;
            right: 0;
            width: 150px;
            padding: 14px;
            background: #fff;
            
            .link{
              font-family:"Montserrat";
              font-style: normal;
              font-weight: 400;
              font-size: 0.75rem;
              line-height: 15px;
              text-decoration: none;
              color: #000000;
            }
          }
          &:hover .bottom{
            display: flex;
          }
        }
      }
    }
  }
  
`

export {HeaderWrapper}
