import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {Checkbox} from'semantic-ui-react'
import {getBrands,getSellers,getitemsbybrands,getitemsbysellers} from '../actions/shopActions'
import {Rating, Menu,Header, MenuItem, Icon, Sidebar, Segment, Dimmer, Loader,Dropdown,Table,TableBody,TableCell } from 'semantic-ui-react'
import $ from 'jquery'
class Filtermenue extends React.Component {
      constructor(props){
        super(props);
        this.state={
            sellerCheck:[],
            brandChek:[]
        }
        this.handleCheckbrands=this.handleCheckbrands.bind(this)
        this.handleCheckSellers=this.handleCheckSellers.bind(this)
      }
        static propTypes = {
        };
       
        componentDidMount(){
            this.props.getSellers()
            this.props.getBrands()
        }
        componentWillReceiveProps(nextProps){

        }
        handleCheckSellers(e,data){
            console.log(data);
            if(data.checked==true){
                this.setState({sellerCheck:this.state.sellerCheck.concat(data.value)})
            }
            setTimeout(() => {
                this.props.getitemsbysellers(this.state.sellerCheck)

            }, 200);
        }
        handleCheckbrands(e,data){
            console.log(data);
            if(data.checked==true)
               {
                   this.setState({brandChek:this.state.brandChek.concat(data.value)})
                   
                }
                setTimeout(() => {
                    this.props.getitemsbybrands(this.state.brandChek)
                   }, 200);
        }
        render(){
              return <div> 
            <div class="side-filter">
              <h2>Filter</h2>
              <div class="filter-block-content">
                  <div class="filter-block">
                      <h3 style={styles.h3}>sellers</h3>
                        {this.props.sellers.map(seller=>{
                            
                            return  <div className="ui_checkbox">
                            {/* <input type="checkbox"  value={seller.seller_name}  onClick={this.handleCheck} />
                            <label>Chair</label> */}
                            <Checkbox label={seller.title} value={seller.id} onClick={this.handleCheckSellers}/>
                        </div>
                        })
                    }

                     <h3  style={styles.h3} class="f-title-sm">brands</h3>
                        {this.props.brands.map(brand=>{
                            return  <div class="ui_checkbox">
                            <Checkbox  label={brand.title}  value={brand.id}  onClick={this.handleCheckbrands}/>
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
        brands:state.shop.brands,
        sellers:state.shop.sellers,
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
      export default connect(mapStateToProps,{getBrands,getSellers,getitemsbybrands,getitemsbysellers})(Filtermenue);