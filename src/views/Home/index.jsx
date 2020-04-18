import React, {useEffect, useState} from 'react';
import './style.css';
import SpinnerLoaderComponent from '../../components/SpinnerLoaderComponent';
import ListPublicationsComponent from '../../components/ListPublicationsComponent';

const Home = ({filterObjectMiddlewareCallback, listPublications}) => {
  const [list, setList] = useState([]);

  useEffect(()=>{
    Promise.resolve(listPublications).then((res) => {
      setList(res)
  })
  }, [listPublications])

  return (
      <>
      {list.length === 0 ? (
          <div className="loader">
            <SpinnerLoaderComponent/>
          </div>
        ) : (
          <>
            <ListPublicationsComponent list={list} filter={filterObjectMiddlewareCallback()}/>
          </>
      )}
      </>
  );
};

export default Home;
