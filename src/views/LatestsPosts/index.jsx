import React, { useState, useEffect } from "react";
import SpinnerLoaderComponent from "../../components/SpinnerLoaderComponent";
import ListPublicationsComponent from "../../components/ListPublicationsComponent";
import { descendingOrder } from "../../utils/descendingOrder";

const LatestsPosts = ({ filterObjectMiddlewareCallback, listPublications }) => {
  const [list, setList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [filterObj] = useState(filterObjectMiddlewareCallback());

  useEffect(() => {
    Promise.resolve(listPublications).then((res) => {
      let temp = res.sort(descendingOrder);
      temp = temp.slice(0, 3);
      setList(temp);
    });
  }, [listPublications]);

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
    <div data-testid="latestsPosts">
      {loader ? (
        <div className="loader">
          <SpinnerLoaderComponent />
        </div>
      ) : (
        <>
          <ListPublicationsComponent list={list} filter={filterObj} />
        </>
      )}
    </div>
  );
};

export default LatestsPosts;
