import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CompletePostComponent = ({ post }) => {
  return (
    <>
      <article className="completePostBody">
        <section className="completePostInfo">
          <h3>{post.title}</h3>
          <p className="completePostAuthor">{post.author}</p>
          <p className="completePostPublished">{post.publishedAt}</p>
        </section>
        <p className="completePostText">"{post.body}"</p>
      </article>
    </>
  );
};

export default CompletePostComponent;
