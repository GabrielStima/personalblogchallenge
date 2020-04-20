import React, { useState, useEffect } from "react";
import CompletePostComponent from "../../components/CompletePostComponent";
import SpinnerLoaderComponent from "../../components/SpinnerLoaderComponent";
import NothingToShowComponent from "../../components/NothingToShowComponent";

const CompletePost = ({ match, listPublications }) => {
  const [currentPost, setCurrentPost] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const post = listPublications.find((item, index) => {
      return index === parseInt(match.params.id);
    });
    setCurrentPost(post);
  }, [listPublications, match]);

  useEffect(() => {
    if (listPublications.length === 0) {
      setLoader(true);
    } else {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
  }, [listPublications]);

  return (
    <>
      {loader ? (
        <div className="loader">
          <SpinnerLoaderComponent />
        </div>
      ) : (
        <>
          {currentPost === undefined ? (
            <NothingToShowComponent text="Post not found" />
          ) : (
            <CompletePostComponent post={currentPost} />
          )}
        </>
      )}
    </>
  );
};

export default CompletePost;
