import * as React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeQuantity } from "../../actions/cart";
import { open } from '../../actions/checkout'
import { Link } from 'react-router-dom'

import  { Input, Icon, Container,Segment, Divider, List, Table, Rating, Header } from 'semantic-ui-react'
import { Button, Checkbox, Image, Grid } from 'semantic-ui-react'
export class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address: props.address||[],
            cartItems:props.cartItems
        }
    }
   
    componentWillReceiveProps(nextProps) {
        console.log({ nextProps });
        this.setState({ address: nextProps.address,cartItems:nextProps.cart })
    }
    handleClick(){
        this.props.open()
    }
   
    render() {
        console.log(this.props.address,this.props.cart);
        
        var thos = this
        return (
            <div>
                <Container textAlign='justified'>
                    <b style={{ fontSize: 23 }}>CHECKOUT</b>
                    <Divider  style={{background: '#13bfad'}}/>
                    <Table
                        fixed
                        striped
                        basic='very'
                        style={styles.table}
                    >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan='2' style={styles.header}> Address List</Table.HeaderCell>

                            </Table.Row>
                        </Table.Header>

                        <Table.Body >
                            {this.state.address.map((item, index) => {
                                return <Table.Row>
                                    <Table.Cell 
                                    style={{
                                        textAlign: 'left'
                                    }}>
                                        <Icon name='folder' /> node_modules
                                </Table.Cell>
                                    <Table.Cell collapsing
                                    style={{
                                        textAlign: 'right',
                                        fontSize: 23,
                                        color: '#13bfad'
                                    }}><Icon name="edit" /> <Icon name="delete" /></Table.Cell>
                                </Table.Row>

                            })
                            }
                        </Table.Body>
                    </Table>

                    <br /><br />
                    <div>
                        <Link to="AddAddress"><Button type="button" style={styles.btnAdd} onClick={this.handleClick.bind(this)}> <Icon name="plus circle" /> Add New Adress </Button></Link>
                    </div>
                    <Table
                        fixed
                        striped
                        basic='very'
                        style={styles.table}
                    >
                        <Table.Header>
                            <Table.Row >
                                <Table.HeaderCell  style={styles.header}> Order Summary</Table.HeaderCell>
                                <Table.HeaderCell > Total Price </Table.HeaderCell>

                            </Table.Row>
                        </Table.Header>

                        <Table.Body >
                            {this.state.cartItems.map((item, index) => {
                                return <Table.Row>
                                    <Table.Cell  style={{
                                        textAlign: 'left'
                                    }}>
                                        <Icon name='folder' /> node_modules
                                </Table.Cell>
                                    <Table.Cell collapsing style={{
                                        textAlign: 'right',
                                        fontSize: 23,
                                        color: '#13bfad'
                                    }}><Icon name="edit" /> <Icon name="delete" /></Table.Cell>
                                </Table.Row>

                            })
                            }
                            <Table.Row >
                                <div style={{display:'inline-block'}}><p style={styles.p}>
                                    <Icon name="file text outline" />
                                    TOTAL <span style={{ fontSize: 18 }}>(without delivry fees)</span> : 3435 KD</p>
                                </div>
                                <div style={{display:'inline-block'}}><Button style={styles.discount}>
                                    30% discount
                                </Button></div>
                            </Table.Row>
                            <Divider />
                        </Table.Body>
                    </Table>
                    <div>
                        <div style={styles.gen}> General Requests</div>
                        <List style={styles.list}>
                        <List.Item > Items : 23424 K.D</List.Item>
                        <List.Item >Deliver Fees : 23 K.D</List.Item>
                        <List.Item >Total Amount : 234234 K.D</List.Item>
                       
                        </List>
                    </div>
                    <br/><br/>
                    <div>
                        <Grid>
                            <Grid.Row style={{color:'#13bfad',fontSize:17}}>
                                Payment Way
                            </Grid.Row>   
                            <Divider  style={{background:'#13bfad'}}/>
                        
                            <Grid.Row>
                                <Segment>
                                    sjkdfkjfjkf
                                </Segment>
                            </Grid.Row>
                            <Grid.Row>
                                <Button style={styles.btnAdd} type="button" content="Buy Now"/>
                            </Grid.Row>
                            <br/><br/>
                        </Grid>
                    </div>
                    <br/><br/><br/><br/>
                </Container>
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    return {
        address: state.checkout.addresses,
        cartItems:state.cart.cart
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {


    }

}

var styles = {
    discount: {
        borderRadius: 20,
        color: 'white',
        background: 'red',
        fontSize: 17,
        textAlign: 'center',
      
    },
    header: {
        textAlign: 'left',
        borderBottom: '1px solid #13bfad',
        color: '#13bfad'
    },
    btnAdd: {
        border: '1px solid',
        borderRadius: 37,
        fontSize: 15,
        background: 'white',
        color: '#13bfad'

    },
    gen:{
        border: '1px solid',
        borderRadius: 37,
        fontSize: 17,
        background: 'white',
        color: '#13bfad',
        width: 190,
        textAlign: 'center',
        padding: 8
    },
    list: {
        fontSize: 19,
        color: '#13bfad'

    },
    table: {
        textAlign: 'center',
        fontSize: 15
    },
    p: {
        fontSize: 25,
        padding: 5,
        color: '#13bfad',
    }
}
export default connect(mapStateToProps, {open  })(Checkout);