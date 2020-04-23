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
            data-testid="filterDropdownButton"
            onClick={() =>
              this.setState({ arrowDirection: !this.state.arrowDirection })
            }
          >
            <p data-testid="filterDropdownText">{this.state.currentFilter}</p>
            <div
              data-testid="filterDropdownContent"
              className={
                this.state.arrowDirection
                  ? "dropdown-content active"
                  : "dropdown-content"
              }
            >
              <div
                data-testid="filterDropdownOptionTitle"
                onClick={() => this.filterObjectManager("Title", "Option")}
              >
                <p>Title</p>
              </div>
              <div
                data-testid="filterDropdownOptionAuthor"
                onClick={() => this.filterObjectManager("Author", "Option")}
              >
                <p>Author</p>
              </div>
            </div>
            <figure>
              <img
                data-testid="filterDropdownArrow"
                src={ArrowDropdown}
                alt="arrowDropdown"
                className={this.arrowDirectionWatch()}
              />
            </figure>
          </div>
          <input
            data-testid="filterDropdownInput"
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
