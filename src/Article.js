// src/components/Article.js
import React from "react";
import "./Article.css";

const Article = ({ node }) => {
  const { title, field_photo_image_section, path } = node;

  return (
    <div className="image-list">
      <div className="image-item">
        <div className="image-container">
          <img src={field_photo_image_section} alt={title} />
        </div>
        <div className="image-details">
          <p className="image-text">{title}</p>
          <a href={path} target="_blank" rel="noopener noreferrer">
            <button className="image-button"> Read more</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Article;
