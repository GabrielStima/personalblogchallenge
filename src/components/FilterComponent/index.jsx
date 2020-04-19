import React, { Component } from "react";
import "./style.css";
import SearchIcon from "../../assets/img/search.svg";
import ArrowDropdown from "../../assets/img/down-arrow.svg";

export default class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowDirection: false,
      currentFilter: "Title",
      textSeached: "",
    };
    this.arrowDirectionWatch = this.arrowDirectionWatch.bind(this);
    this.filterObjectManager = this.filterObjectManager.bind(this);
    this.observerForFilterObject = this.observerForFilterObject.bind(this);
  }

  arrowDirectionWatch = () => {
    return !this.state.arrowDirection ? "arrowUp" : "arrowDown";
  };

  observerForFilterObject = () => {
    const filterObject = {
      text: this.state.textSeached,
      filterOption: this.state.currentFilter,
    };
    this.props.filterObjectMiddlewareCallback(filterObject);
  };

  filterObjectManager = (data, type) => {
    if (type === "Text") {
      this.setState({ textSeached: data }, () => {
        this.observerForFilterObject();
      });
    } else {
      this.setState({ currentFilter: data }, () => {
        this.observerForFilterObject();
      });
    }
  };
  render() {
    return (
      <>
        <span className="filterTitle">Filter</span>
        <form className="filterBody">
          <div
            className="dropdown"
            onClick={() =>
              this.setState({ arrowDirection: !this.state.arrowDirection })
            }
          >
            {this.state.currentFilter}
            <div
              className={`dropdown-content ${
                this.state.arrowDirection && "active"
              }`}
            >
              <div onClick={() => this.filterObjectManager("Title", "Option")}>
                Title
              </div>
              <div onClick={() => this.filterObjectManager("Author", "Option")}>
                Author
              </div>
            </div>
            <figure>
              <img
                src={ArrowDropdown}
                alt="arrowDropdown"
                className={this.arrowDirectionWatch()}
              />
            </figure>
          </div>
          <input
            type="text"
            className="inputFilter"
            placeholder="What are you looking for?"
            onChange={(text) =>
              this.filterObjectManager(text.target.value, "Text")
            }
          />
          <div className="iconSearch">
            <figure>
              <img src={SearchIcon} alt="search icon" />
            </figure>
          </div>
        </form>
      </>
    );
  }
}
