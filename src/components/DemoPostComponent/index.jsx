import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const DemoPostComponent = ({ post, position }) => {
  return (
    <section className="postBody">
      <h3 className="postText">{post.title}</h3>
      <p className="postText">"{post.body.slice(0, 358)}..."</p>
      <p className="postText">{post.author}</p>
      <footer className="postFooter">
        <p className="published">{post.publishedAt}</p>
        <Link to={`post/${position}`}>
          <div className="seeMore">See more</div>
        </Link>
      </footer>
    </section>
  );
};

export default DemoPostComponent;
