import * as React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAddress } from "../../actions/checkout";
import { open } from '../../actions/checkout'
import { Link } from 'react-router-dom'

import  { Input, Icon, Container,Segment, Divider, List, Table, Rating, Header } from 'semantic-ui-react'
import { Button, Checkbox, Image, Grid } from 'semantic-ui-react'
export class AddressBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addresses: props.addresses||[],
            shippingAddress:[],
            pillingAddress:[],
            shippingTemp:[],
            pillingTemp:[]
        }
    }
   componentDidMount(){
       this.props.getAddress()
   }
    componentWillReceiveProps(nextProps) {
        console.log({ nextProps });
        var tempS,tempP
        var thos=this
        this.setState({ addresses: nextProps.addresses })
        for(var i=0;i<nextProps.addresses.length;i++){
            if(nextProps.addresses[i].type === 'shipping'){
                console.log("jjjj");
                thos.state.shippingAddress.push(nextProps.addresses[i])
            }
            else {
                thos.state.pillingAddress.push(nextProps.addresses[i])

            }
        }
       
    }
    handleClick(){
        this.props.open()
    }
   
    render() {        
        console.log(this.state.shippingAddress);
        console.log(this.state.pillingAddress);

        console.log(this.props.addresses);
        
        var thos = this
        return (
            <div>
                <Container textAlign='justified' style={{width:600}}>
                    {/* <b style={{ fontSize: 23 }}>Address Book</b>
                    <Divider  style={{background: '#13bfad'}}/> */}
                    <div>
                        <h1> shipping address</h1>                    
                    <List>
                    {this.state.shippingAddress.map(add=>{
                        return<List.Item>
                            city:{add.city},streat:{add.street}
                        </List.Item>
                    })}
                    </List>
                    </div>
                    <div>
                    <h1> pilling address</h1>
                    
                    <List>
                    {this.state.pillingAddress.map(add=>{
                        console.log("ffffff");
                        
                        return<List.Item>
                            city:{add.city},streat:{add.street}
                        </List.Item>
                    })}
                    </List>
                    </div>
                    {/* <Table
                        fixed
                        striped
                        basic='very'
                        style={styles.table}
                    >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell  style={styles.header}> Address Book</Table.HeaderCell>

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
                                   
                                </Table.Row>

                            })
                            }
                        </Table.Body>
                    </Table> */}

                    <br /><br />
                    <div>
                        <Link to="AddAddress"><Button type="button" style={styles.btnAdd} onClick={this.handleClick.bind(this)}> <Icon name="plus circle" /> Add New Adress </Button></Link>
                    </div>
                   
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