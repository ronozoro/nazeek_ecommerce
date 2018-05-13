import * as React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeQuantity } from "../../actions/cart";
import { Link } from 'react-router-dom'
import { getAddress } from '../../actions/checkout'
import { getItemsOfCart } from '../../actions/cart'
import { Input, Icon, Container, Segment, Divider, List, Table, Rating, Header } from 'semantic-ui-react'
import { Button, Checkbox, Image, Grid, Form } from 'semantic-ui-react'
import { payNow } from '../../actions/checkout'
import AddAddress from './add-new-addres'
import { addAdress } from '../../actions/checkout'

export class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addresses: props.addresses || [],
            cartItems: props.cartItems || [],
            itemsCount: null,
            itemsPrices: null,
         
            sh_Add_value: false,
            bill_add_value: false,

            checkedShipping: [],
            checkedBilling: [],
            open: false,

            city: "",
            area: "",
            street: "",
            avenue: "",
            type: "",
            directions: "",
            house: "",

        }
        this.handleSelectTypeChange = this.handleSelectTypeChange.bind(this)
        this.handleSelectAreaChange = this.handleSelectAreaChange.bind(this)

    }
    componentDidMount() {
        this.props.getAddress()
        this.props.getItemsOfCart()
    }
    componentWillReceiveProps(nextProps) {
        var thos = this
        this.setState({ addresses: nextProps.addresses, cartItems: nextProps.cartItems })
    }
    handleClick() {
        this.setState({ open: true })
    }
    handleChangeBilling = (value, item) => {
        console.log(value, item);
        if (value == true) {
            // this.state.checkedBilling.push(item)
            this.setState({ checkedBilling: this.state.checkedBilling.concat(item) })
        }
        this.setState({ bill_Add_value: value })

    }
    handleChangeShipping = ( value, item ) => {
        console.log(item);
             this.setState({ checkedShipping: this.state.checkedShipping.concat(item) })

        this.setState({ bill_Add_value: value })

    }
    payNow() {
        if (this.state.checkedShipping && this.state.checkedShipping.length && this.state.checkedBilling && this.state.checkedBilling.length) {
            console.log("yessssssssssss");
            this.props.payNow(this.state.checkedBilling,this.state.checkedShipping)
        }
        else {
            alert("please  check one shipping address and one billing address at least ")
        }
    }
    handleSubmit() {
        console.log("sumit");
        console.log(this.state.city, this.state.directions);
        let model = {};
        model['city'] = this.state.city,
            model['house'] = this.state.house,
            model['street'] = this.state.street,
            model['area'] = this.state.area,
            model['directions'] = this.state.directions,
            model['type'] = this.state.type,
            model['avenue'] = this.state.avenue

        this.props.addAdress(model)
        setTimeout(() => {
            this.setState({ city: "", house: "", street: "", area: "", directions: "", type: "", avenue: "" })
        }, 200);
    }
    handleChange = (e, { name, value }) => {
        console.log(name, value);
        this.setState({ [name]: value })
    }
    handleSelectTypeChange(e) {
        this.setState({ type: e.target.value })
    }
    handleSelectAreaChange(e) {
        this.setState({ area: e.target.value })
    }

    render() {
        console.log(this.state.addresses, this.state.cartItems);
        var count = 0, itemsPrices = 0
        this.state.cartItems.map(item => {
            count = count + item.quantity
            itemsPrices = (itemsPrices) + (item.price * item.quantity)
        })
        var thos = this
        return (
            <div style={{ marginTop: 30 }}>
                <Container textAlign='justified'>
                    <b style={{ fontSize: 23 }}>CHECKOUT</b>
                    <Divider style={{ background: '#13bfad' }} />
                    <Table
                        fixed
                        striped
                        basic='very'
                        style={styles.table}
                        >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan='2' style={styles.header}> Shipping Address</Table.HeaderCell>

                            </Table.Row>
                        </Table.Header>

                        <Table.Body >
                            {this.state.addresses.map((item, index) => {
                                if (item.type == "shipping")
                                    return <Table.Row>
                                        <Table.Cell
                                            style={{
                                                textAlign: 'left'
                                            }}>
                                            <p style={{display:'inline-block',width:275}}><Icon name='marker' style={styles.icon} />
                                            {item.city} {item.street}</p>
                                            <div><Checkbox style={styles.checkbox} onChange={(e, data) => { this.handleChangeShipping(data.checked, item) }} />
</div>
                                        </Table.Cell>
                                        <Table.Cell collapsing
                                            style={{
                                                textAlign: 'right',
                                                fontSize: 23,
                                                color: '#13bfad'
                                            }}> <div style={{ display: 'inline-block' }}><Icon name="delete" /></div>
                                        </Table.Cell>
                                    </Table.Row>

                            })
                            }
                        </Table.Body>
                    </Table>
                    <Table
                        fixed
                        striped
                        basic='very'
                        style={styles.table}
                    >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan='2' style={styles.header}> Billing Address</Table.HeaderCell>

                            </Table.Row>
                        </Table.Header>

                        <Table.Body >
                            {this.state.addresses.map((item, index) => {
                                if (item.type == "billing")
                                    return <Table.Row>
                                        <Table.Cell
                                            style={{
                                                textAlign: 'left'
                                            }}>
                                           <p style={{display:'inline-block',width:275}}> <Icon name='marker' style={styles.icon} />
                                            {item.city}
                                            {item.street}</p>
                                            <div><Checkbox style={styles.checkbox} onChange={(e, data) => { this.handleChangeBilling(data.checked, item) }} /></div>
                                        </Table.Cell>
                                        <Table.Cell collapsing
                                            style={{
                                                textAlign: 'right',
                                                fontSize: 23,
                                                color: '#13bfad'
                                            }}> <div style={{ display: 'inline-block' }}><Icon name="delete" /></div>
                                        </Table.Cell>
                                    </Table.Row>

                            })
                            }
                        </Table.Body>
                    </Table>
                    <button type="button" style={styles.btnAdd} className="btn btn-info btn-lg" data-backdrop="static" data-toggle="modal" data-target="#exampleModal">
                        <Icon name="plus circle" /> Add New Adress
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="dialog" style={{ marginTop: 250 }}>
                            <div className="modal-content">
                                <div style={{ margin: 10 }}>
                                    <h2 className="sec-title f-left">Add New Address</h2>
                                    <button type="button" className="close" data-dismiss="modal" >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <Form onSubmit={this.handleSubmit.bind(this)} style={styles.form}>
                                        <Grid columns={1}>
                                            <Grid.Column>
                                                <label style={styles.label}>City</label><Input style={styles.input} defaultValue={this.state.city} name="city" type="text" onChange={this.handleChange.bind(this)} />
                                            </Grid.Column>
                                            <Grid.Column>
                                                <label style={styles.label}>type</label>
                                                <div style={{ display: 'inline-block' }}><select style={styles.menu} defaultValue={this.state.type} className="form-control chosen-select select2-hidden-accessible" onChange={this.handleSelectTypeChange} tabIndex="-1" aria-hidden="true">
                                                    <option >Enter yours here</option>
                                                    <option value="shipping">shipping</option>
                                                    <option value="billing" >billing</option>
                                                </select></div>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <label style={styles.label}>area</label>
                                                <div style={{ display: 'inline-block' }}><select style={styles.menu} defaultValue={this.state.area} classNameName="form-control chosen-select select2-hidden-accessible" onChange={this.handleSelectAreaChange} tabIndex="-1" aria-hidden="true">
                                                    <option >Enter yours here</option>
                                                    <option value="area1">area1</option>
                                                    <option value="area2" >area2</option>
                                                </select></div>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <label style={styles.label}>Street</label><Input style={styles.input} defaultValue={this.state.street} name="street" type="text" onChange={this.handleChange.bind(this)} />
                                            </Grid.Column>
                                            <Grid.Column>

                                                <label style={styles.label}>Avenue</label><Input style={styles.input} defaultValue={this.state.avenue} type="text" name="avenue" onChange={this.handleChange.bind(this)} />
                                            </Grid.Column>
                                            <Grid.Column>
                                                <label style={styles.label}>house</label><Input style={styles.input} type="text" defaultValue={this.state.house} name="house" onChange={this.handleChange.bind(this)} />
                                            </Grid.Column>
                                            <Grid.Column>
                                                <label style={styles.label}>Extra directions</label><Input style={styles.input} type="text" defaultValue={this.state.directions} name="directions" onChange={this.handleChange.bind(this)} />
                                            </Grid.Column>
                                            <Grid.Column style={{ marginLeft: 160 }}>
                                                <Button content="ADD" primary type="submit" style={styles.btn} />
                                                <Button content="CANCEL" primary type="button" style={styles.btn} className="close" data-dismiss="modal" aria-label="Close" />

                                            </Grid.Column>
                                        </Grid>
                                        <br /><br />
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div style={this.state.open?{display:'block'}:{display:'none'}}>
                      <AddAddress/>
                    </div> */}
                    <Table
                        fixed
                        striped
                        basic='very'
                        style={styles.table}
                         >
                        <Table.Header>
                            <Table.Row >
                                <Table.HeaderCell style={styles.header}> Order Summary</Table.HeaderCell>
                                <Table.HeaderCell style={{ color: '#13bfad' }}> Total Price </Table.HeaderCell>

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
                                    <Table.Cell style={{
                                        textAlign: 'center',
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
                        <h2 className="title-head2">General</h2>
                        <List style={styles.list}>
                            <List.Item > Items : {count}</List.Item>
                            {/* <List.Item >Deliver Fees : 23 K.D</List.Item> */}
                            <List.Item >Total Amount : {itemsPrices}</List.Item>

                        </List>
                    </div>
                    <br /><br />
                    <div>
                        <div className="checkout-block">
                            <h2 className="title-head2">Payment Way</h2>
                            <div className="payment--method clearfix">
                                <div className="pay-mrg">
                                    <input type="radio" name="pay-method" />
                                    <img src="../../../src/styles/images/py1.png" alt="" />
                                    <h3 style={styles.h3}>k-net</h3>
                                </div>
                                <div className="pay-mrg">
                                    <input type="radio" name="pay-method" />
                                    <img src="../../../src/styles/images/py2.png" alt="" />
                                    <h3 style={styles.h3}>Credit</h3>
                                </div>
                                <div className="pay-mrg">
                                    <input type="radio" name="pay-method" />
                                    <img src="../../../src/styles/images/py3.png" alt="" />
                                    <h3 style={styles.h3}>Tap pay</h3>
                                </div>
                            </div>
                            <div className="checkout-bottom clearfix">
                                <div className="ch-b-left">
                                    <Button className="ge-request" style={styles.btnAdd} onClick={this.payNow.bind(this)}>Pay now</Button>
                                </div>
                            </div>
                        </div>

                    </div>
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
    checkbox: {
        position: 'relative',
        top: 18,
        marginLeft: 15
    },
    header: {
        textAlign: 'left',
        // borderBottom: '1px solid #13bfad',
        color: '#13bfad'
    },
    btnAdd: {
        border: '1px solid',
        borderRadius: 37,
        fontSize: 15,
        background: 'white',
        color: '#13bfad'

    },
    h3:{
        background:'white'
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
    listItem: {
        fontSize: 20
    },
    h1: {
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
    },
    icon: {
        color: '#1dc1b0',
        fontSize: 20
    },
    menu: {
        margin: '7px',
        width: 300,
        height: 50
    },

    input: {
        margin: '7px',
        width: 300,
        height: 50
    },
    label: {
        width: 124,
        margin: 10,
        fontSize: 17
    },
    btn: {
        background: '#13bfad',
        border: '1px solid',
        borderRadius: 17
    }
}
export default connect(mapStateToProps, { getAddress, getItemsOfCart, payNow, addAdress })(Checkout);