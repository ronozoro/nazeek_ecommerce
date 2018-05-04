import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getsorteditems } from '../actions/filterMenue'

//import PropTypes from "prop-types";
//import { get } from '../actions/header'
import { Menu, MenuItem, Divider, Sidebar, Segment, Image, Loader, Grid, GridColumn, GridRow, Button, Dropdown } from 'semantic-ui-react'
const options = [
      { key: 1, text: 'Title', value: 'Title' },
      { key: 2, text: 'dssending', value: 'dssending' },
      { key: 3, text: 'assending', value: 'assending' },
      { key: 4, text: 'price', value: 'price' },
      { key: 5, text: 'last updated', value: 'last updated' },
      { key: 6, text: 'last created', value: 'last created' }
]
class Products extends React.Component {



      handleClick() {

            this.props.createWishlistItem(1)

      }
      handleCange(e, data) {
            console.log(data.value);

            // console.log(obj.options[obj.value].text)
            // console.log(obj)
            getsorteditems(data.value)
      }
      render() {

            {/* <Dimmer active={this.props.loading}>
                        <Loader/>
                </Dimmer> */}
            return <div  style={styles.base}>
                              <h1 style={styles.h1}>jhjgdjhsgd</h1>
                             <div style={{display:'inline-block',marginLeft: 680}}> <Dropdown placeholder="sortby" selection style={styles.menu} options={options} onChange={this.handleCange.bind(this)} /></div>
                  <Divider fitted  style={{background:'#13bfad'}}/>
                  <Segment style={{ margin: '20px', padding: '25px' }} >
                        <Grid.Row columns={3}>
                              {this.props.products.map((coulm, index) => {

                                    return <Grid.Column>
                                         <Image src={coulm.img1} />
                                         <br/>
                                         <Button onClick={this.handleClick.bind(this)}>wish item </Button>
                                          {/* <GridRow>{coulm.colors.map((color,index)=>{<GridColumn></GridColumn>})}</GridRow>
         {coulm.h.map((h,index)=>{<GridRow>{h.index}</GridRow>})} */}


                                    </Grid.Column>
                              })}


                        </Grid.Row>
                  </Segment>
          </div>








      }
}
const mapStateToProps = (state, Props) => {
      console.log(state)
      return {

            products: state.filterMenu.products

      }

}
var styles={
      base:{
    width: 948,
    marginLeft: 100
      },
      h1:{
     fontSize: 22,
     display:'inline-block',
    color: '#13bfad'
      },
      menue:{
            fontSize: 15,
    color: '#13bfad'
      }
}

export default connect(mapStateToProps, getsorteditems)(Products);