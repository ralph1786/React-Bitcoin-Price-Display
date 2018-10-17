import React from "react";
import "./NewsList.css";

//You need to iterate through the array articles using the map function.
const NewsList = props => {
  const newsList = props.articles.length ? (
    props.articles.map((article, index) => {
      return (
        <div key={index} className="card">
          <div>
            <h3>
              <strong>Author: </strong> {article.author}
            </h3>
            <p>
              <strong>Title: </strong> "{article.title}
              ."
            </p>
            <p>
              <strong>Summary: </strong>
              {article.description}
            </p>
          </div>
          <button>
            <a href={article.url}>Read More</a>
          </button>
        </div>
      );
    })
  ) : (
    <p>No News To Report!</p>
  );

  return <div>{newsList}</div>;
};

export default NewsList;
