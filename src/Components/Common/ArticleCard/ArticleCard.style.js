import styled from "styled-components";

const ArticleCardWrapper=styled.div`
  height: 100%;
  font-family: "Montserrat" !important;

    .card {
      width: 100%;
      cursor: pointer;
      height: 100%;
      display: flex;
      flex-direction: column;
      //.bottom{
      //  margin-bottom: auto;
      //}

      .img-wrapper {
        overflow: hidden;
        width: 100%;
        height: 240px;
      }

      img {
        width: 100% !important;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        transition: transform 0.3s ease;
      }

      p.title {
        font-style: normal;
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 23px;
        letter-spacing: 0.03em;
        color: #000000;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        overflow: hidden;
        -webkit-box-orient: vertical;
        margin-bottom: auto;
      }

      p.text {
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 20px;
        letter-spacing: 0.03em;
        color: #000000;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        overflow: hidden;
        -webkit-box-orient: vertical;
      }

      a {
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        line-height: 20px;
        letter-spacing: 0.03em;
        text-decoration-line: underline;
        color: #1F3C88;
      }
    }

    .card:hover {
      .img-wrapper {
        img {
          transform: scale(1.05);
        }
      }
    }
`

export { ArticleCardWrapper }