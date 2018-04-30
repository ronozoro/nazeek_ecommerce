import * as React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { close } from '../../actions/checkout'
import { Link } from 'react-router-dom'
import {  Button, Header, Modal } from 'semantic-ui-react'
import {addAdress} from '../../actions/checkout'
import  { Input, Icon, Container,Segment, Divider, Label, Table, Form,Dropdown } from 'semantic-ui-react'
import {  Checkbox, Image, Grid } from 'semantic-ui-react'
export class AddAddress extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            open:props.open,  
            city:"" ,
            area:"",
            street:"",
            avenue:"",
            type:"",
            directions:"",
            house:"",

        }
    }
   
    componentWillReceiveProps(nextProps) {
        this.setState({open:nextProps.open})       
    }
  close(){
  this.setState({open:false})
  this.props.close()
  }
  handleSubmit(){
    console.log("sumit");
    console.log(this.state.city,this.state.directions);
    let model={};
    model['city']=this.state.city,
    model['house']=this.state.house,
    model['street']=this.state.street,
    model['area']=this.state.area,
    model['directions']=this.state.directions,
    model['type']=this.state.type,
    model['avenue']=this.state.avenue
    
    this.props.addAdress(model)

  }
  handleChange = (e, { name, value }) => {
      console.log(name, value);
      
      this.setState({ [name]: value })
  }

    render() {  
        const countryOptions=[
            {key:"1",text:"enter1",value:"enter1"},
            {key:"2",text:"enter2",value:"enter2"},
            {key:"3",text:"enter3",value:"enter3"}
        ]    
        const types=[
            {key:"1",text:"shipping",value:"shipping"},
            {key:"2",text:"pilling",value:"pilling"}
        ]  
        var thos = this
        return (
            <div>
            <Container >
                <Modal  open={this.state.open} onClose={this.close.bind(this)}>
          <Modal.Header>Add New Address</Modal.Header>
          <Modal.Content >
          
          <Form onSubmit={this.handleSubmit.bind(this)} style={styles.form}>
             <Grid columns={1}>             
             <Grid.Column>
                  <Input  label="City" style={styles.input} name="city" type="text" onChange={this.handleChange.bind(this)}/>
             </Grid.Column>
             <Grid.Column>
                  <Dropdown style={styles.menu} button icon='user' name="type" className='icon' labeled placeholder="Type" selection options={types} onChange={this.handleChange.bind(this)} />
             </Grid.Column>
             <Grid.Column>
             <Dropdown   style={styles.menu} button name="area"  icon="marker" className='icon' placeholder="area" labeled selection options={countryOptions}onChange={this.handleChange.bind(this)} />
             </Grid.Column>
             <Grid.Column>
             <Input label="Street" style={styles.input}  name="street"  type="text" onChange={this.handleChange.bind(this)}/>
             </Grid.Column>
             <Grid.Column>
                 
             <Input label="Avenue" style={styles.input}  type="text" name="avenue" onChange={this.handleChange.bind(this)}/>
             </Grid.Column>
             <Grid.Column>
              <Input  label="House" style={styles.input} type="text" name="house" onChange={this.handleChange.bind(this)}/>
             </Grid.Column>
             <Grid.Column>
             <Input   label="Extra directions" style={styles.input} type="text" name="directions" onChange={this.handleChange.bind(this)}/>
             </Grid.Column>            
             <Grid.Row>
             <Button   content="ADD"  primary type="submit" style={{margin:'auto'}} onClick={this.close.bind(this)} />

             </Grid.Row>
             </Grid>
             <br/><br/>

             </Form>
          </Modal.Content>
         
        </Modal>
                   
                </Container>
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    return {
        open:state.checkout.open
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {


    }

}

var styles = {
    form:{
        // textAlign: 'center',
        border: '1px solid',
        width: 600,
        margin: 'auto'
    },
   menu:{
    margin:'7px',
    width: 345,
    height:50  
 },

   input:{
    margin:'7px',
    width: 300,
    height:50
   }
}
export default connect(mapStateToProps, { close,addAdress })(AddAddress);