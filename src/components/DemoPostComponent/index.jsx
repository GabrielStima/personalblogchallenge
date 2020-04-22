import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const DemoPostComponent = ({ post, position }) => {
  return (
    <section className="postBody">
      <h3 data-testid='titleDemoPost' className="postText">{post.title}</h3>
      <p data-testid='bodyDemoPost' className="postText">"{post.body.slice(0, 358)}..."</p>
      <p data-testid='authorDemoPost' className="postText">{post.author}</p>
      <footer className="postFooter">
        <p data-testid='dateDemoPost' className="published">{post.publishedAt}</p>
        <Link data-testid='linkDemoPost' to={`post/${position}`}>
          <div className="seeMore">See more</div>
        </Link>
      </footer>
    </section>
  );
};

export default DemoPostComponent;
