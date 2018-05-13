import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {Checkbox} from'semantic-ui-react'
import {getBrands,getSellers} from '../actions/shopActions'
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
            
console.log(data.value);

        }
        render(){
              return <div> 
            <div class="side-filter">
              <h2>Filter</h2>
              <div class="filter-block-content">
                  <div class="filter-block">
                      <h3 >sellers</h3>
                        {this.props.sellers.map(seller=>{
                            
                            return  <div className="ui_checkbox">
                            {/* <input type="checkbox"  value={seller.seller_name}  onClick={this.handleCheck} />
                            <label>Chair</label> */}
                            <Checkbox label={seller.seller_name} value={seller.seller_name} onClick={this.handleCheck}/>
                        </div>
                        })
                    }

                     <h3 class="f-title-sm">brands</h3>
                        {this.props.brands.map(brand=>{
                            return  <div class="ui_checkbox">
                            <input type="checkbox" name={brand.brand_name||""} />
                            <label>test</label>
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
        brands:state.shop.brands||[{brand_name:'test'}],
        sellers:[{seller_name:'brand'}]
    }
}
      export default connect(mapStateToProps,{getBrands,getSellers})(Filtermenue);