import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {Checkbox} from'semantic-ui-react'
import {getBrands,getSellers,getsorteditems} from '../actions/shopActions'
import {Rating, Menu,Header, MenuItem, Icon, Sidebar, Segment, Dimmer, Loader,Dropdown,Table,TableBody,TableCell } from 'semantic-ui-react'
import $ from 'jquery'
class Filtermenue extends React.Component {
      constructor(props){
        super(props);
        this.state={
        }
        this.handleCheck=this.handleCheck.bind(this)
      }
        static propTypes = {
        };
       
        componentDidMount(){
            this.props.getSellers()
            this.props.getBrands()
        }
        componentWillReceiveProps(nextProps){

        }
        handleCheck(e,data){
            console.log(data);
            this.props.getsorteditems('price')
        }
        render(){
              return <div> 
            <div class="side-filter">
              <h2>Filter</h2>
              <div class="filter-block-content">
                  <div class="filter-block">
                      <h3 style={styles.h3}>sellers</h3>
                        {this.props.products.map(seller=>{
                            
                            return  <div className="ui_checkbox">
                            {/* <input type="checkbox"  value={seller.seller_name}  onClick={this.handleCheck} />
                            <label>Chair</label> */}
                            <Checkbox label={seller.seller_name} value={seller.seller_name} onClick={this.handleCheck}/>
                        </div>
                        })
                    }

                     <h3  style={styles.h3} class="f-title-sm">brands</h3>
                        {this.props.products.map(brand=>{
                            return  <div class="ui_checkbox">
                            <Checkbox  label={brand.brand_name}  value={brand.brand_name}  onClick={this.handleCheck}/>
                        </div>
                        })
                    }
                      <div>
                          
                  </div>
                    </div>
                          
                      </div>
                  </div>
                 
                  </div>
                 
        
        }
      }
const mapStateToProps =(state,props)=>{
    return {
        brands:[{brand_name:'test'}],
        sellers:[{seller_name:'brand'}],
        // state.shop.brands||
        products:state.shop.products
    }
}
var styles={
    h3:{
        background: '#13bfad',
        fontSize: 20,
        borderRadius: 11,
        border: 'none',
        color: 'white',
        padding: 5
    }
}
      export default connect(mapStateToProps,{getBrands,getSellers,getsorteditems})(Filtermenue);