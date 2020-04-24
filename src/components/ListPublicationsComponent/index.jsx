import React, { useState, useEffect } from "react";
import "./style.css";
import NothingToShowComponent from "../NothingToShowComponent";
import DemoPostComponent from "../DemoPostComponent";
import OrderArrow from "../../assets/img/order.svg";
import { descendingOrder } from "../../utils/descendingOrder";
import { ascendingOrder } from "../../utils/ascendingOrder";

const ListPublicationsComponent = ({ list, filter }) => {
  const [listRender, setListRender] = useState([]);
  const [filterListRender, setFilterListRender] = useState([]);
  const [order, setOrder] = useState(false);
  const [notFindAnything, setNotFindAnything] = useState(false);

  useEffect(() => {
    if (list?.length > 0) {
      const temp = list.sort(descendingOrder);
      setListRender(temp);
    }
  }, [list]);

  useEffect(() => {
    if (filter.text.length > 0) {
      const getFilter = (filter, list) => {
        if (filter.filterOption === "Title") {
          const postsFiltered = list.filter((item) => {
            const regex = new RegExp(filter.text);
            return regex.exec(item.title);
          });

          return postsFiltered;
        } else if (filter.filterOption === "Author") {
          const authorFiltered = list.filter((item) => {
            const regex = new RegExp(filter.text);
            return regex.exec(item.author);
          });

          return authorFiltered;
        }
      };

      const result = getFilter(filter, list);

      if (result.length) {
        setNotFindAnything(false);
        setFilterListRender(result);
      } else {
        setNotFindAnything(true);
      }
    } else {
      setFilterListRender([]);
    }
  }, [filter, list]);

  const changeOrder = () => {
    setOrder(!order);
    if (order) {
      setListRender(listRender.sort(descendingOrder));
    } else {
      setListRender(listRender.sort(ascendingOrder));
    }
  };

  const changeOrderTextButton = () => {
    return !order ? "Last Posts" : "First Posts";
  };

  return (
    <div data-testid="listPublications">
      <div className="ordenateButton" onClick={changeOrder}>
        <figure>
          <img src={OrderArrow} alt="Ordenate arrows" />
        </figure>
        <p>{changeOrderTextButton()}</p>
      </div>
      {!listRender.length || notFindAnything ? (
        <NothingToShowComponent text="There are no posts to show" />
      ) : (
        <>
          {!filterListRender.length ? (
            <>
              {listRender.map((item, index) => (
                <DemoPostComponent post={item} position={index} key={index} />
              ))}
            </>
          ) : (
            <>
              {filterListRender.map((item, index) => (
                <DemoPostComponent post={item} position={index} key={index} />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ListPublicationsComponent;
