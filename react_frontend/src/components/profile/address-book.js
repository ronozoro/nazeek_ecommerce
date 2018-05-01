import * as React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAddress } from "../../actions/checkout";
import { open } from '../../actions/checkout'
import { Link } from 'react-router-dom'
import Sidemenue from '../sidemenue'
import  { Input, Icon, Container,Segment, Divider, List, Table, Rating, Header } from 'semantic-ui-react'
import { Button, Checkbox, Image, Grid } from 'semantic-ui-react'
export class AddressBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addresses: props.addresses||[],
            shippingAddress:[],
            pillingAddress:[],
           
        }
    }
   componentWillMount(){
       this.props.getAddress()
   }
    componentWillReceiveProps(nextProps) {
        console.log({ nextProps });
        var tempS,tempP
        var thos=this
        this.setState({ addresses: nextProps.addresses })
        for(var i=0;i<nextProps.addresses.length;i++){
            if(nextProps.addresses[i].type === 'shipping'){
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
                <Container textAlign='justified' style={{margin:40}}>

                <Grid columns={2} >
                    <Grid.Column width={4}>
                        <Sidemenue />
                    </Grid.Column>
                    <Grid.Column style={{    marginLeft: 31}} width={10}>
                    <b style={{ fontSize: 23 }}>Address Book</b>
                    <Divider  style={{background: '#13bfad'}}/>
                    <Grid columns={2} coulmns="equal" style={{}}>
                    <Grid.Column width={8}>
                    <List>
                    <h1 style={styles.h1}> shipping address</h1>                    
                    {this.state.shippingAddress.map(add=>{
                        return<List.Item style={styles.listItem}>
                            city:{add.city},streat:{add.street}
                        </List.Item>
                    })}
                    </List>
                    </Grid.Column>
                    <Grid.Column width={8}>
                    <List>
                    <h1 style={styles.h1}> pilling address</h1>
                    {this.state.pillingAddress.map(add=>{
                        console.log("ffffff");
                        return<List.Item style={styles.listItem}>
                            city:{add.city},streat:{add.street}
                        </List.Item>
                    })}
                    </List>
                    </Grid.Column>
                    <Grid.Row>
                      <Link to="AddAddress"><Button type="button" style={styles.btnAdd} onClick={this.handleClick.bind(this)}> <Icon name="plus circle" /> Add New Adress </Button></Link>

                    </Grid.Row>
                    </Grid>
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