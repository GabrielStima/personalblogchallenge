import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const CompletePostComponent = ({post}) => {
  return (
      <>
        <div className="completePostHeader">
        <Link to={`/`}>
            <div className="goBack">
                Go Back
            </div>
        </Link>
        </div>
        <div className="completePostBody">
            <section className="completePostInfo">
                <h3>{post.title}</h3>
                <p className="completePostAuthor">{post.author}</p>
                <p className="completePostPublished">{post.publishedAt}</p>
            </section>
            <p className="completePostText">"{post.body}"</p>
        </div>
      </>
  );
};

export default CompletePostComponent;
