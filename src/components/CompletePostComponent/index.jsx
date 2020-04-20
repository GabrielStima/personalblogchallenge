import React from "react";
import "./style.css";

const CompletePostComponent = ({ post }) => {
  return (
    <>
      <article className="completePostBody">
        <section className="completePostInfo">
          <h3 data-testid="titleCompletePost">{post.title}</h3>
          <p data-testid="authorCompletePost" className="completePostAuthor">
            {post.author}
          </p>
          <p data-testid="dateCompletePost" className="completePostPublished">
            {post.publishedAt}
          </p>
        </section>
        <p data-testid="bodyCompletePost" className="completePostText">
          "{post.body}"
        </p>
      </article>
    </>
  );
};

export default CompletePostComponent;
