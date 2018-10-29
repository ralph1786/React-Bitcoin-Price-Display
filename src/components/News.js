import React, { Component } from "react";
import axios from "axios";
import NewsList from "./NewsList";

//Once you receive the data, you need to create a functional component.
//See NewsList component for more information.
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
        console.log(res.data);
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
    const moreNews = this.state.latestNews ? (
      <NewsList articles={this.state.news} />
    ) : null;

    return (
      <div>
        <button onClick={this.showNewsHandler}>Latest News</button>
        {moreNews}
      </div>
    );
  }
}

export default News;
