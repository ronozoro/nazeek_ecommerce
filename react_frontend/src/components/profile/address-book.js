import * as React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAddress } from "../../actions/checkout";
import { open } from '../../actions/checkout'
import { Link } from 'react-router-dom'
import Sidemenue from '../sidemenue'
import  { Input, Icon, Container,Segment, Divider, List, Table, Rating, Header } from 'semantic-ui-react'
import { Button, Checkbox, Image, Grid } from 'semantic-ui-react'
import  AddAddress  from '../cart/add-new-addres';
export class AddressBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addresses: props.addresses||[],
          
           
        }
    }
   componentDidMount(){
       this.props.getAddress()
   }
    componentWillReceiveProps(nextProps) {
        console.log({ addressbook:nextProps.addresses });
        this.setState({ addresses: nextProps.addresses })
        
    }
    handleClick(){
        this.props.open()
    }
   
    render() {        
    
        console.log('addressbook',this.props.addresses);
        
        var thos = this
        return (
            <div>
                <Container textAlign='justified' style={{margin:40}}>

                <Grid columns={2} >
                    <Grid.Column width={4}>
                        <Sidemenue />
                    </Grid.Column>
                    <Grid.Column style={{    marginLeft: 90}} width={10}>
                    <b style={{ fontSize: 23 }}>Address Book</b>
                    <Divider  style={{background: '#13bfad'}}/>
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
                                             <p style={{display:'inline-block',width:275}}> <Icon name='marker' style={styles.icon} />
                                               {item.city} {item.street}</p>
                                           <div style={{display:'inline-block'}}> <Checkbox style={styles.checkbox} onChange={(e, data) => { this.handleChangeShipping(data.checked, item) }} /></div>

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
                                            <p style={{display:'inline-block',width:275}}><Icon name='marker' style={styles.icon} />
                                            {item.city}
                                            {item.street}</p>
                                           <div style={{display:'inline-block'}}> <Checkbox style={styles.checkbox} onChange={(e, data) => { this.handleChangeBilling(data.checked, item) }} /></div>
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
                    <AddAddress/>
                    </Grid.Column>
                    </Grid>
                   

                    
                   
                    <br/><br/><br/><br/>
                </Container>
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    return {
        addresses: state.checkout.addresses,
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {


    }

}

var styles = {
    h1:{
        color: '#13bfad'
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
        color: '#13bfad',
        marginLeft:36

    },
    listItem:{
        fontSize:20
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
export default connect(mapStateToProps, { open,getAddress })(AddressBook);