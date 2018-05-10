import * as React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
require('./slideStyle.css')
import { getsorteditems} from '../actions/shopActions';
import { connect } from "react-redux";

// require('../../node_modules/slick-carousel/slick/slick.min.js') 
// require('../../node_modules/slick-carousel/slick/slick-theme.css') 
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
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

 
  componentDidMount(){
    this.props.getsorteditems('modified_date')
  }
  
  renderProducts(object) {
    var thos = this
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
            <div className="product-result-item">
                <Link to="/productDetails" className="pro-resThumb">
                    <img data-image={object.object.id} className="active"
                        src={'data:image/png;base64, ' + object.object.image}
                        alt={object.object.name} onClick={this.handleProdDetails.bind(this,object)}/>
                </Link>
                <div className="pro-resCaption">
                    <div className="color-choose">
                        {
                            object.object.variation_set.map(function (product) {
                                var style = {
                                    backgroundColor: product.color
                                }

                                return (
                                    <div>
                                        <input data-image={product.image} name={product.title}
                                            value={product.price} checked="" type="radio" />
                                        <label class="highlight" onClick={(e) => { thos.handleChange(e, { prod: object, varId: product }) }} style={style}>
                                            <span>
                                            </span>
                                        </label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="pro-resTxt">
                        <h2 className="pr-title"><a href="#">{object.object.title}</a></h2>
                        <p className="pr-shop">{object.object.seller_name}</p>
                        <span className="pr-sa">{object.object.price}</span>
                        <Rating icon='star' defaultRating={3} maxRating={5} />
                        <ul className="pro-resAction">
                            <li>
                                <a href="#" className="heart-btn">
                                    <i className="icon-heart icons"  onClick={this.wishListClisk.bind(this,object)}/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="basket-btn">
                                    <i className="icon-basket icons" onClick={this.handleClick.bind(this,{prod:object,varId:{id:1}})} />
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

  render() {
    var settings = {
      dots: true,
      arrows:true,
      infinite: true,
      slidesToScroll: 1,
     
      speed: 500,
      slidesToShow: 1,
    };
    return (<div>
         <div className="container">
        <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    </div>
    );
  }
}
export default Test;
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
  }
}

export default connect(mapStateToProps, { getsorteditems})(Test);