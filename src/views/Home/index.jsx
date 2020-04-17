import React, {useEffect, useState} from 'react';
import './style.css';
import service from '../../services/ListPublications';
import SpinnerLoaderComponent from '../../components/SpinnerLoaderComponent';
import ListPublicationsComponent from '../../components/ListPublicationsComponent';

const Home = () => {
  const [listPublications, setListPublications] = useState([]);

  useEffect(()=>{
    Promise.resolve(service.getListPublications()).then((res) => {
        setListPublications(res)
    })
  }, [])

  return (
      <>
      {listPublications.length === 0 ? (
          <div className="loader">
            <SpinnerLoaderComponent/>
          </div>
        ) : (
          <>
            <ListPublicationsComponent list={listPublications}/>
          </>
      )}
      </>
  );
};

export default Home;
