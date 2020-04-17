import React, {Component} from 'react';
import './style.css';
import PostComponent from '../PostComponent';
import OrderArrow from '../../assets/img/order.svg'
export default class ListPublicationsComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      listRender:[],
      order:false
    }
    this.changeOrderTextButton = this.changeOrderTextButton.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
  }

  descendingOrder(a, b){
    let date1 = new Date(a.publishedAt);
    let date2 = new Date(b.publishedAt);
    
    if (date1 < date2) {
      return 1;
    }
    if (date1 > date2) {
      return -1;
    }
    return 0;
  }

  ascendingOrder(a, b){
    let date1 = new Date(a.publishedAt);
    let date2 = new Date(b.publishedAt);
  
    if (date1 > date2) {
      return 1;
    }
    if (date1 < date2) {
      return -1;
    }
    return 0;
  }

  changeOrder(){
    this.setState({order:!this.state.order});
    if(this.state.order){
      this.setState({listRender: this.state.listRender.sort(this.descendingOrder)})
    }else{
      this.setState({listRender: this.state.listRender.sort(this.ascendingOrder)})
    }
  }

  changeOrderTextButton(){
    return !this.state.order ? "Last Posts" : "First Posts"
  }

  componentDidMount(){
    const temp = this.props.list.sort(this.descendingOrder);
    this.setState({listRender: temp});
  }

  render() {
    return (
      <>
     <div className="ordenateButton" onClick={this.changeOrder}>
        <img src={OrderArrow} alt="ordenate arrows"/>
        {this.changeOrderTextButton()}
    </div>
    {this.state.listRender.map((item, index)=>(
        <PostComponent post={item} position={index} key={index}/>
    ))}
   </>
    );
    
  }
}
