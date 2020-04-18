import React, {Component} from 'react';
import './style.css';
import SearchIcon from '../../assets/img/search.svg';
import ArrowDropdown from '../../assets/img/down-arrow.svg';

export default class FilterComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      arrowDirection:false,
      currentFilter:"Title",
      textSeached:""
    }
    this.arrowDirectionWatch = this.arrowDirectionWatch.bind(this);
    this.filterObjectManager = this.filterObjectManager.bind(this);
    this.observerForFilterObject = this.observerForFilterObject.bind(this);
  }

  arrowDirectionWatch = () => {
    return !this.state.arrowDirection ? "arrowUp" : "arrowDown";
  }

  observerForFilterObject = () => {
    if(this.state.textSeached.length > 0){
      const filterObject = {text: this.state.textSeached, filterOption: this.state.currentFilter}
      this.props.filterObjectMiddlewareCallback(filterObject);
    }
  }

  filterObjectManager = (data, type) => {
    if(type === "Text"){
      this.setState({textSeached:data}, () => {
        this.observerForFilterObject();
      });
    }else{
      this.setState({currentFilter:data}, () => {
        this.observerForFilterObject();
      });
    }
  }
  render() {
    return (
      <>
      <span className="filterTitle">Filter</span>
      <div className="filterBody">
        <div className="dropdown" onClick={() => this.setState({arrowDirection:!this.state.arrowDirection})}>
          {this.state.currentFilter}
          <div className={`dropdown-content ${this.state.arrowDirection && "active"}`}>
            <div onClick={()=> this.filterObjectManager("Title","Option")}>Title</div>
            <div onClick={()=> this.filterObjectManager("Author","Option")}>Author</div>
          </div>
          <img src={ArrowDropdown} alt="arrowDropdown" className={this.arrowDirectionWatch()}/>
        </div>
        <input type="text" className="inputFilter" onChange={(text) => this.filterObjectManager(text.target.value,"Text")}/>
        <div className="iconSearch">
          <img src={SearchIcon} alt="search icon"/>
        </div>
      </div>
      </>
    );
  }
}










// export default function FilterComponent({filterObjectMiddlewareCallback}) {
//   const [arrowDirection, setArrowDirection] = useState(false);
//   const [currentFilter, setCurrentFilter] = useState("Title");
//   const [textSeached, setTextSeached] = useState("");

//   const arrowDirectionWatch = () => {
//     return !arrowDirection ? "arrowUp" : "arrowDown";
//   }

//   const currentFilterChange = (string) => {
//     setCurrentFilter(string);
//   }

//   const currentTextChange = (string) => {
//     setTextSeached(string);
//   }

//   const observerForFilterObject = (data) => {
//     if(data.length > 0){
//       const filterObject = {text: textSeached, filterOption: currentFilter}
//       filterObjectMiddlewareCallback(filterObject);
//     }
//   }

//   const filterObjectManager = (data, type) => {
//     if(type === "Text"){
//       currentTextChange(data);
//       observerForFilterObject(data);
//     }else{
//       currentFilterChange(data);
//     }
//   }

//   return (
//     <>
//     <span className="filterTitle">Filter</span>
//     <div className="filterBody">
//       <div className="dropdown" onClick={() => setArrowDirection(!arrowDirection)}>
//         {currentFilter}
//         <div className={`dropdown-content ${arrowDirection && "active"}`}>
//           <div onClick={()=> filterObjectManager("Title","Option")}>Title</div>
//           <div onClick={()=> filterObjectManager("Author","Option")}>Author</div>
//         </div>
//         <img src={ArrowDropdown} alt="arrowDropdown" className={arrowDirectionWatch()}/>
//       </div>
//       <input type="text" className="inputFilter" onChange={(text) => filterObjectManager(text.target.value,"Text")}/>
//       <div className="iconSearch">
//         <img src={SearchIcon} alt="search icon"/>
//       </div>
//     </div>
//     </>
//   );
// }
