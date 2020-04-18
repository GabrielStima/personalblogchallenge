import React, {useState, useEffect} from 'react';
import SpinnerLoaderComponent from '../../components/SpinnerLoaderComponent';
import ListPublicationsComponent from '../../components/ListPublicationsComponent';
const LatestsPosts = ({filterObjectMiddlewareCallback, listPublications}) => {
  const [list, setList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [filterObj] = useState(filterObjectMiddlewareCallback());

  useEffect(()=>{
    Promise.resolve(listPublications).then((res) => {
      let temp = res.sort(descendingOrder);
      temp = temp.slice(0,3);
      setList(temp)
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

  const descendingOrder = (a, b) => {
    let date1 = new Date(a.publishedAt);
    let date2 = new Date(b.publishedAt);

    if (date1 < date2) {
      return 1;
    }
    if (date1 > date2) {
      return -1;
    }
    return 0;
  };

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

export default LatestsPosts;
