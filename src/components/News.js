import React, { Component } from "react";
import axios from "axios";
import NewsList from "./NewsList";

class News extends Component {
  state = {
    news: [],
    latestNews: false
  };

  componentDidMount() {
    this.getBitcoinNews();
  }

  getBitcoinNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=3a988bb9e17f4ef2a7a8099740a3a3f1"
      )
      .then(res => {
        this.setState({
          news: res.data.articles
        });
      })
      .catch(err => console.log(err));
  };

  showNewsHandler = () => {
    this.setState({
      latestNews: !this.state.latestNews
    });
  };

  render() {
    const newsArticles = this.state.news.map((article, index) => (
      <NewsList key={index} article={article} />
    ));

    return (
      <div>
        <button onClick={this.showNewsHandler}>Latest News</button>
        {this.state.latestNews ? newsArticles : null}
      </div>
    );
  }
}

export default News;
