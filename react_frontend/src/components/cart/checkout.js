import * as React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeQuantity } from "../../actions/cart";
import { open } from '../../actions/checkout'
import { Link } from 'react-router-dom'
import {getAddress} from '../../actions/checkout'
import {getItemsOfCart} from '../../actions/cart'
import { Input, Icon, Container, Segment, Divider, List, Table, Rating, Header } from 'semantic-ui-react'
import { Button, Checkbox, Image, Grid } from 'semantic-ui-react'
export class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addresses:  props.addresses||[],
            cartItems: props.cartItems||[],
            itemsCount: null,
            itemsPrices: null,
            shippingAddress:[],
            pillingAddress:[],
           
        }
    }
    componentDidMount(){
        this.props.getAddress()
        this.props.getItemsOfCart()
    }
    componentWillReceiveProps(nextProps) {
        console.log('kkkdfkjfkldfjlkjldkdkf' );
        var thos=this
        this.setState({ addresses: nextProps.addresses, cartItems: nextProps.cartItems })
        for(var i=0;i<nextProps.addresses.length;i++){
            if(nextProps.addresses[i].type === 'shipping'){
                console.log("fdf");
                
                thos.state.shippingAddress.push(nextProps.addresses[i])
            }
            else {
                thos.state.pillingAddress.push(nextProps.addresses[i])

            }
        }
       
    }
    handleClick() {
        this.props.open()
    }

    render() {
        console.log(this.state.addresses, this.state.cartItems);
console.log(this.state.shippingAddress,this.state.pillingAddress);
var count=0,itemsPrices=0
this.state.cartItems.map(item => {
    count=count+item.quantity 
    itemsPrices=(itemsPrices)+(item.price * item.quantity)
    // this.setState({itemsCount:(this.state.itemsCount+item.quantity),itemsPrices:(this.state.itemsPrices) + (item.price * item.quantity)})
    // this.state.itemsCount = count
        // this.state.itemsPrices = (this.state.itemsPrices) + (item.price * item.quantity)

})
        var thos = this
        return (
            <div>
                <Container textAlign='justified'>
                    <b style={{ fontSize: 23 }}>CHECKOUT</b>
                    <Divider style={{ background: '#13bfad' }} />
                    <Grid columns={2} coulmns="equal" style={{}}>
                        <Grid.Column width={8}>
                            <List>
                                <h1 style={styles.h1}> shipping address</h1>
                                {this.state.shippingAddress.map(add => {
                                    return <div><List.Item style={styles.listItem}>
                                        city:{add.city},streat:{add.street}
                                    </List.Item>
                                    <Checkbox radio />
                                    </div>
                                })}
                            </List>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <List>
                                <h1 style={styles.h1}> pilling address</h1>
                                {this.state.pillingAddress.map(add => {
                                    return <div><List.Item style={styles.listItem}>
                                        city:{add.city},streat:{add.street}
                                    </List.Item>
                                    <Checkbox radio />
                                    </div>
                                })}
                            </List>
                        </Grid.Column>
                        <Grid.Row>
                            <Button type="button" style={styles.btnAdd} onClick={this.handleClick.bind(this)}> <Icon name="plus circle" /> Add New Adress </Button>

                        </Grid.Row>
                    </Grid>
                    {/* <Table
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
                            {this.state.addresses.map((item, index) => {
                                return <Table.Row>
                                    <Table.Cell 
                                    style={{
                                        textAlign: 'left'
                                    }}>
                                         <Icon name='marker' /> city:{item.city},streat:{item.street}
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
                    </Table> */}

                  
                    <Table
                        fixed
                        striped
                        basic='very'
                        style={styles.table}
                    >
                        <Table.Header>
                            <Table.Row >
                                <Table.HeaderCell style={styles.header}> Order Summary</Table.HeaderCell>
                                <Table.HeaderCell > Total Price </Table.HeaderCell>

                            </Table.Row>
                        </Table.Header>

                        <Table.Body >
                            {this.state.cartItems.map((item, index) => {
                                return <Table.Row>
                                    <Table.Cell style={{
                                        textAlign: 'left'
                                    }}>
                                        {item.item_title}
                                        Delivery in 3 days thought delivery
                                </Table.Cell>
                                    <Table.Cell collapsing style={{
                                        textAlign: 'right',
                                        fontSize: 23,
                                        color: '#13bfad'
                                    }}>
                                        {item.quantity * item.price}
                                    </Table.Cell>
                                </Table.Row>

                            })
                            }
                            {/* <Table.Row >
                                <div style={{display:'inline-block'}}><p style={styles.p}>
                                    <Icon name="file text outline" />
                                    TOTAL <span style={{ fontSize: 18 }}>(without delivry fees)</span> : 3435 KD</p>
                                </div>
                                <div style={{display:'inline-block'}}><Button style={styles.discount}>
                                    30% discount
                                </Button></div>
                            </Table.Row> */}
                            {/* <Divider /> */}
                        </Table.Body>
                    </Table>
                    <div>
                        <div style={styles.gen}> General Requests</div>
                        <List style={styles.list}>
                            <List.Item > Items : {count}</List.Item>
                            {/* <List.Item >Deliver Fees : 23 K.D</List.Item> */}
                            <List.Item >Total Amount : {itemsPrices}</List.Item>

                        </List>
                    </div>
                    <br /><br />
                    {/* <div>
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
                    </div> */}
                    <br /><br /><br /><br />
                </Container>
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    return {
        addresses: state.checkout.addresses,
        cartItems: state.cart.cartItems

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
    gen: {
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
    listItem:{
        fontSize:20
    },
    h1:{
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
export default connect(mapStateToProps, { open,getAddress,getItemsOfCart })(Checkout);