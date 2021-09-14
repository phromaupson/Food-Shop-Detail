import React,{Component} from 'react'

export default class Store extends Component{
  state={
    showInfo:false
  }
  handleInfo=()=>{
    this.setState({
      showInfo:!this.state.showInfo
    })
  }
  render(){
    const {id,name,img,detail,address} = this.props.shop
    const {removeshop} = this.props

    return(
      <div className="shop">
      <div className="img-container">
          <img src={img}/>
          <span className="close-btn" onClick={()=>removeshop(id)}>
              <i className="fas fa-times-circle"></i>
          </span>
      </div>
      <div className="shop-info">
          <h2>{name}</h2>
          <h5>{detail}</h5>
          <h6>ตั้งอยู่ที่: {""}<span onClick={this.handleInfo}>
            <i class={this.state.showInfo?"fas fa-caret-square-down":"fas fa-caret-square-right"}></i>
          </span></h6>
          {this.state.showInfo?<p>{address}</p>:"123"}
      </div>
      </div>
    )
  }
}
