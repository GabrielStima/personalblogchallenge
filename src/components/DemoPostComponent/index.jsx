import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const DemoPostComponent = ({post, position}) => {
  return (
    <div className="postBody">
        <h3 className="postText">{post.title}</h3>
        <p className="postText">"{post.body.slice(0, 358)}..."</p>
        <p className="postText">{post.author}</p>
        <div className="postFooter">
          <p className="published">{post.publishedAt}</p>
          <Link to={`post/${position}`}>
            <div className="seeMore">
                See more
            </div>
          </Link>
        </div>
    </div>
  );
}

export default DemoPostComponent;