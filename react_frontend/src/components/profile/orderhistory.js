
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Segment, Grid, GridColumn, GridRow, Button, Select, Dropdown } from 'semantic-ui-react'
import Sidemenue from '../sidemenue'

export class OrderHistory extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount () {

  }
  render () {
    console.log('order', this.props.cartItems, this.props.product)

    return (
      <div>
        <Container style={{ margin: 40 }}>
          <Grid columns={2}>
            <Grid.Column width={4}>
              <Sidemenue />

            </Grid.Column >
            <Grid.Column width={12}>
              <div >
                <div class='sec-head marg-b0 clearfix'>
                  <h2 class='sec-title f-left'>Order History</h2>
                </div>
                <div class='sec-warpper'>
                  <div class='order-history-list'>
                    <div class='order-hRow'>
                      <div class='ooh-head'>
                        <ul class='order-hHead clearfix'>
                          <li>order date: <span>9/11/2017</span></li>
                          <li>Order#:<span>2017</span></li>
                          <li>Order price(KD):<span>9017</span></li>
                          <li>status:<span>Delivered on  1/1/2017</span></li>
                        </ul>
                      </div>
                      <div class='ooh-body'>
                        <div class='table-responsive'>
                          <table class='table table-st1'>
                            <thead>
                              <tr>
                                <th class='th-product'>Product</th>
                                <th>Item ID</th>
                                <th>Item price</th>
                                <th>Quantity</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.props.cartItems.map(item => {
                                return <tr>
                                  {this.props.products.map(prod => {
                                    if (item.product === prod.id) {
                                      return <td>
                                        <div class='t-prItem clearfix'>
                                          <a href='#' class='tp-thumb'>
                                            <img src={'data:image/png;base64, ' + prod.image} alt='' className='img-responsive' />                                                                                    </a>
                                          <div class='tp-desc'>
                                            <h2><a href='#'>Lorem ipsum dolor sit amet,</a></h2>
                                            <p>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                          </div>
                                        </div>
                                      </td>
                                    }
                                  })}

                                  <td>{item.item}</td>
                                  <td>{item.price}</td>
                                  <td>{item.quantity}</td>
                                </tr>
                              })}

                            </tbody>
                          </table>
                        </div>
                        <div class='delivery-note'><span>Delivery address:</span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit,</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    cartItems: state.cart.cartItems,
    products: state.shop.products

  }
}

export default connect(mapStateToProps)(OrderHistory)
