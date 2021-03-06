import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Sidemenue from '../sidemenue'
import {getProducts} from '../../actions/shopActions'
import { setToCart } from '../../actions/cart'
import { getWishListItems, deleteWishlistItem } from '../../actions/WishlistListActions'
import { Container, Divider, Rating, Menu, Header, MenuItem, Icon, Sidebar, Segment, Dimmer, Loader, Dropdown, Table, TableBody, TableCell } from 'semantic-ui-react'
import { Grid, Image } from "semantic-ui-react";
class wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products }
  }
  static propTypes = {
    getWishListItems: PropTypes.func.isRequired,
    setToCart: PropTypes.func.isRequired,
  };
  componentWillRecivePrpos(nextProps) {
    this.setState({ products: nextProps.products, })
  }
  componentDidMount() {
    this.props.getWishListItems(),
    this.props.getProducts()

  }
  handleDelete(item) {
    this.props.deleteWishlistItem(item)
  }
  addtoCart(product) {
    console.log(product);
    this.props.setToCart(product)
  }
  render() {
    console.log(this.props.wishlistItem, this.props.products);
    const columnsName = [
      { id: 'product', title: 'Product' },
      { id: 'item', title: 'itemId' },
      { id: 'seller_name', title: ' shop Name' },
      { id: 'price', title: 'ItemPrice' },
      { id: 'action', title: 'action' },

    ]
    if (this.props.wishlistItem && this.props.products)

      return (<div>
        <Container>
          <Grid columns={2}>
            <Grid.Column width={4}>
              <Sidemenue />
            </Grid.Column>
            <Grid.Column style={{ marginLeft: 31 }} width={10}>
              <b style={{ fontSize: 23 }}>wish List Items</b>
              <Divider style={{ background: '#13bfad' }} />
              <Table 
                fixed
                striped
                basic='very'
                 singleLine
                style={styles.table}
                celled 
                padded
              >
                <Table.Header>
                  <Table.Row>
                    {columnsName.map((coulm, index) => {
                      console.log(coulm.title)
                      return <Table.HeaderCell >{coulm.title}</Table.HeaderCell>
                    })
                    }

                  </Table.Row>
                </Table.Header>

                <Table.Body >
                  {this.props.wishlistItem.map((item, index) => {
                    console.log(item);

                    return <Table.Row>
                      {columnsName.map((col) => {
                        if (col.id == 'product') {
                          return this.props.products.map(prod => {
                            console.log(prod);
                            if (item.product === prod.id) {
                              return <Table.Cell >
                                {/* 'data:image/png;base64, ' + */}
                                <div ><Image width={150} src={ 'data:image/png;base64, ' + prod.image}  /></div>
                                {/* <div style={styles.contentImg}>Middle; <br /> fAligned</div> */}
                              </Table.Cell>
                            }
                            // else {
                            //   return <Table.Cell></Table.Cell>
                            // }
                          })

                        }
                        else if (col.id === 'item') {
                          return this.props.products.map(prod => {
                            if (item.product === prod.id) {
                              return <Table.Cell>
                                {item.id}
                              </Table.Cell>
                            }
                            // else {
                            //   return <Table.Cell></Table.Cell>
                            // }
                          }
                          )
                        }
                        else if (col.id === 'seller_name') {
                          return this.props.products.map(prod => {
                            if (item.product === prod.id) {
                              return <Table.Cell>
                                {prod[col.id]}
                              </Table.Cell>
                            }
                            // else {
                            //   return <Table.Cell></Table.Cell>
                            // }
                          })

                        }
                        else if (col.id == 'price') {
                          return this.props.products.map(prod => {
                            if (item.product === prod.id) {
                              return <Table.Cell>
                                {prod[col.id]}
                              </Table.Cell>
                            }
                            // else {
                            //   return <Table.Cell></Table.Cell>
                            // }
                          })

                        }
                        else if (col.id == 'action') {
                          return this.props.products.map(prod => {
                            if (item.product === prod.id) {
                              return <Table.Cell>
                                <Icon style={styles.icon} name='plus cart' onClick={this.addtoCart.bind(this, { prod: { object: prod }, varId: { id: 1 } })} />
                                <Icon style={styles.icon} name='remove circle' onClick={this.handleDelete.bind(this, item)} />
                              </Table.Cell>
                            }
                            // else {
                            //   return <Table.Cell></Table.Cell>
                            // }
                          })

                        }
                        // else {

                        // }
                      })

                      }

                      {/* <Table.Cell>                                      
                                        <Icon style={styles.icon} name='plus cart' onClick={this.handleDelete.bind(this,item)}/>
                                        <Icon style={styles.icon} name='remove circle' onClick={this.handleDelete.bind(this,item)}/>
                                      </Table.Cell>
                                        */}

                    </Table.Row>
                  })
                  }

                </Table.Body>

              </Table>
              
            </Grid.Column>

          </Grid>
        </Container>
      </div>)
    else {
      return <div style={styles.emptycart}>
        this wishList is empty
              </div>
    }
  }
}

const mapStateToProps = (state, Props) => {
  return {
    wishlistItem: state.wishList.wishListItem,
//     [ {product:"1",id:"1",image:"https://www.w3schools.com/w3images/lights.jpg",shopname:"kjg",price:552},
//     {product:"2",id:"2",image:"https://www.w3schools.com/w3images/lights.jpg",shopname:"kjg",price:552},
//     {product:"3",id:"3",image:"https://www.w3schools.com/w3images/lights.jpg",shopname:"kjg",price:552},
//     {product:"4",id:"4",image:"https://www.w3schools.com/w3images/lights.jpg",shopname:"kjg",price:552}]
//  ,
    products: state.shop.products
    // [ {id:"1",image:"https://www.w3schools.com/w3images/lights.jpg",shopname:"kjg",price:552},
    // {id:"2",image:"https://www.w3schools.com/w3images/lights.jpg",shopname:"kjg",price:552},
    // {id:"3",image:"https://www.w3schools.com/w3images/lights.jpg",shopname:"kjg",price:552},
    // {id:"4",image:"https://www.w3schools.com/w3images/lights.jpg",shopname:"kjg",price:552}]
 
  }
}
var styles = {
  btn: {
    borderRadius: 20,
    color: 'white',
    background: '#13bfad',
    fontSize: 17,
    textAlign: 'center',
    float: 'right'
  },
  icon: {
    color: '#13bfad',
    fontSize: 25
  },
  emptycart: {
    textAlign: 'center',
    fontSize: 25,
    borderRadius: 13,
    border: '1px solid',
    width: 700,
    margin: 'auto',
    pading: 20,
    padding: 20,
    marginBottom: 30,
  },
  img: {
    // display: 'inline-block',
    //border: '1px solid',
    // bottom: 47,
    // position: 'relative',
    // width: 50,
    width: 170,

  },
  table: {
    textAlign: 'center',
    fontSize: 15,
    width: 850,
  },
  p: {
    float: 'right',
    fontSize: 25,
    padding: 5,
    color: '#13bfad',
  }
}

export default connect(mapStateToProps, { getWishListItems, deleteWishlistItem, setToCart ,getProducts})(wishlist);
    // export default wishlist
