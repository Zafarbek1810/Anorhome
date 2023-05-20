import React, {useRef} from 'react';
import {ArticleCardWrapper} from "./ArticleCard.style";
import MyLink from "../MyLink";
import {getTextFromHTML} from "../../../utils/helpers";
import {API_URL} from "../../../HHTP/client";
import {useRouter} from "next/router";


const ArticleCard = ({article}) => {

  const router=useRouter()
  return (
    <ArticleCardWrapper>
      <div className="card" key={article.id}  onClick={() => router.push("/news_detail/" + article.id)}>
        <div className="img-wrapper">
          <img src={(article.thumbnail && `${API_URL}/api/articles/images/download?path=`+ article.thumbnail.path) || "/images/newsSwiper.png"} alt=""/>
        </div>
          <p className="title">{article.title}</p>
          <p className="text">{getTextFromHTML(article.content)}</p>
          <MyLink to={"/news_detail/" + article.id}>Батафсил</MyLink>
      </div>
    </ArticleCardWrapper>
  );
};

export default ArticleCard;
