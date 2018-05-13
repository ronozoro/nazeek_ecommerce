import * as React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import { Container, Divider, Table, Rating, Header } from 'semantic-ui-react'

require('./slideStyle.css')
import { connect } from "react-redux";

import { getProducts } from "../actions/shopActions";
import { getProdDetails ,getsorteditems} from '../actions/shopActions';
import { setToCart } from '../actions/cart'
import { getItemsOfCart } from '../actions/cart'
import {addToWishList} from '../actions/WishlistListActions'
 
export const SampleNextArrow =(props) =>{
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}
export const SamplePrevArrow=(props) =>{
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
export class Test extends React.Component {
    slider
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  
  }

 
  // componentDidMount(){
  //   //this.props.getsorteditems('modified_date')
  //   //this.props.getProducts()
  // }
  
  handleChange(e, object) {
    // console.log({ x: object.prod, xx: object.varId });
    this.props.setToCart(object)
}
handleClick(product) {
  // console.log(product);
  
  this.props.setToCart(product)
}
wishListClisk(product){
  // console.log(product);
  
this.props.addToWishList(product)
}
handleProdDetails(product){
  //   console.log(product);
    this.props.getProdDetails(product.object)
  }
  
item(object){
return <div className="recent-item clearfix" style={{width: 500}}>
                <Link to="/productDetails" className="recThumb">
                <img alt="" className="img-responsive Thumb-main" src={'data:image/png;base64, ' + object.image}
                       onClick={this.handleProdDetails.bind(this,object)}/>
									<img src={'data:image/png;base64, ' + object.image} alt="" className="img-responsive Thumb-hover"/>
                </Link>
								<div className="recTxt">
									<p className="re-salary">
										<span className="sa-new">{object.price}</span>
										<span className="sa-old">{object.price}</span>
									</p>
									<p className="desc-p">
                              {object.description}	this is description	
                              						</p>
									<div className="star-rating">
                                        <span style={{width:60}}><strong class="rating">3</strong> out of 5</span>
                                    </div>
									<a href="#" className="addCart" onClick={this.handleClick.bind(this,{prod:object,varId:{id:1}})}>Add To Cart</a>
									<div className="label-xs">offers</div>
								</div>
								<a href="#" className="favorite-pro-btn"><i className="icon-heart icons" onClick={this.wishListClisk.bind(this,{object:object})}></i></a>
							</div>
}


  render() {

    const products=this.props.products
   
 
    console.log(products);
    var settings = {
      dots: true,
      arrows:true,
      infinite: true,
      slidesToScroll: 2,
     
      speed: 500,
      slidesToShow: 2,
    };
    return (<div style={{width: 1114,
      margin: 'auto'}}>
{this.props.products.length? <Slider {...settings} >
      <div >
        <div className="item" >
                {this.props.products[0]?this.item(this.props.products[0]):null}
                {this.props.products[1]?this.item(this.props.products[1]):null}
            </div>
          </div>
          <div >
        <div className="item" >
                {this.props.products[2]?this.item(this.props.products[2]):null}
                {this.props.products[3]?this.item(this.props.products[3]):null}
            </div>
          </div>
          <div >
        <div className="item" >
                {this.props.products[4] ?this.item(this.props.products[4]):null}
                {this.props.products[5]?this.item(this.props.products[5]):null}
            </div>
          </div>
          <div>
        <div className="item" >
                {this.props.products[6]?this.item(this.props.products[6]):null}
                {this.props.products[7]?this.item(this.props.products[7]):null}
            </div>
         </div>
</Slider>:null
          }
</div>


  
    );
  }
}

var styles= {
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: 20
  },
  menu:{
    background:"#38819e"
  },
  icon:{
   fontSize:25
  },
  item:{
    position: 'absolute',
    fontSize: 17,
    fontWeight: 'bold',
  }
}

function mapStateToProps(state) {
  return {
    products:state.shop.products
  }
}

export default connect(mapStateToProps, { setToCart,addToWishList,getProdDetails})(Test);





      //   //  <div className="container">
      //   // <Slider {...settings}>

      //   {/* {products.map((object, i) => {
      //   return <div>
      //      {this.renderProducts({ object })}
      //      </div>
      //   }
      // )} */}


      //     {/* <div>
      //       <img src="http://placekitten.com/g/400/200" />
      //     </div>
      //     <div>
      //       <img src="http://placekitten.com/g/400/200" />
      //     </div>
      //     <div>
      //       <img src="http://placekitten.com/g/400/200" />
      //     </div>
      //     <div>
      //       <img src="http://placekitten.com/g/400/200" />
      //     </div> */}
      //   // </Slider>
      //   </div>