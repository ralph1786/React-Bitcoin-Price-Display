import React from "react";
import "./NewsCard.css";

const NewsCard = props => {
  const { author, title, description, url } = props.article;
  return (
    <div className="card">
      <div>
        <h3>
          <strong>Author: </strong> {author}
        </h3>
        <p>
          <strong>Title: </strong> "{title}
          ."
        </p>
        <p>
          <strong>Summary: </strong>
          {description}
        </p>
      </div>
      <button>
        <a href={url}>Read More</a>
      </button>
    </div>
  );
};

export default NewsCard;
