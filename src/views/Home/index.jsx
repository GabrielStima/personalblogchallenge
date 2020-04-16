import React, {useEffect, useState} from 'react';
import './style.css';
import OrderArrow from '../../assets/img/order.svg'
import service from '../../services/ListPublications';
import PostComponent from '../../components/PostComponent';

const Home = () => {
  const [listPublications, setListPublications] = useState([]);
  const [order, setOrder] = useState(false);

  useEffect(()=>{
    Promise.resolve(service.getListPublications()).then((res) => (
      setListPublications(res)
    ))
  }, [])

  const changeOrder = () => {
    return !order ? "Last Posts" : "First Posts"
  }
  
  return (
      <>
        <div className="ordenateButton" onClick={() => setOrder(!order)}>
          <img src={OrderArrow} alt="ordenate arrows"/>
          {changeOrder()}
        </div>
        {listPublications.map((item, index)=>(
          <PostComponent post={item} position={index} key={index}/>
        ))}
      </>
  );
};

export default Home;
