import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import "./NewsList.css";

const News = () => {
  const [news, setNews] = useState([]);
  const [latestNews, setLatestNews] = useState(false);

  const getBitcoinNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=3a988bb9e17f4ef2a7a8099740a3a3f1"
      )
      .then(res => {
        setNews(res.data.articles);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getBitcoinNews();
  }, []);

  const showNewsHandler = () => {
    setLatestNews(!latestNews);
  };

  const newsArticles = news.map((article, index) => (
    <NewsCard key={index} article={article} />
  ));

  return (
    <div>
      <button onClick={showNewsHandler}>Latest News</button>
      {latestNews ? newsArticles : null}
    </div>
  );
};

export default News;
