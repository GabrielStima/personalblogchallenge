import React, {useEffect, useState} from 'react';
import './style.css';
import SpinnerLoaderComponent from '../../components/SpinnerLoaderComponent';
import ListPublicationsComponent from '../../components/ListPublicationsComponent';

const Home = ({filterObjectMiddlewareCallback, listPublications}) => {
  const [list, setList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [filterObj] = useState(filterObjectMiddlewareCallback());

  useEffect(()=>{
    Promise.resolve(listPublications).then((res) => {
      setList(res)
  })
  }, [listPublications])

  useEffect(()=>{
    if(listPublications.length === 0 ){
      setLoader(true);
    }else{
      setTimeout(()=>{
        setLoader(false);
      },1000)
    }
  }, [listPublications])

  return (
      <>
      {loader ? (
          <div className="loader">
            <SpinnerLoaderComponent/>
          </div>
        ) : (
          <>
            <ListPublicationsComponent list={list} filter={filterObj}/>
          </>
      )}
      </>
  );
};

export default Home;
