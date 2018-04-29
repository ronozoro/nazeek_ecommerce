import * as React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { close } from '../../actions/checkout'
import { Link } from 'react-router-dom'
import {  Button, Header, Modal } from 'semantic-ui-react'

import  { Input, Icon, Container,Segment, Divider, Label, Table, Form,Dropdown } from 'semantic-ui-react'
import {  Checkbox, Image, Grid } from 'semantic-ui-react'
export class AddAddress extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            open:props.open,  
            city:"" ,
            area:"",
            streat:"",
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
                {/* <Modal  open={this.state.open} onClose={this.close.bind(this)}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content > */}
          <Form onSubmit={this.handleSubmit.bind(this)} style={styles.form}>
             <Grid >
             <Grid.Row columns={1}>
             <Grid.Column>
              <div>
                  <Label style={styles.label}> City </Label><Input size="big" style={styles.input} type="text" name="city" type="text" onChange={this.handleChange.bind(this)}/>
             </div>
             </Grid.Column>
             <Grid.Column>
                  <Label style={styles.label}> Type</Label><Dropdown style={styles.input} fluid name="type"  selection options={types} onChange={this.handleChange.bind(this)} />
             </Grid.Column>
             <Grid.Column>
             <Label style={styles.label}> Area </Label><Dropdown style={styles.input} fluid name="area"  selection options={countryOptions}onChange={this.handleChange.bind(this)} />
             </Grid.Column>
             <Grid.Column>
             <Label style={styles.label}> Street </Label><Input  size="big" style={styles.input} name="streat" type="text" onChange={this.handleChange.bind(this)}/>
             </Grid.Column>
             <Grid.Column>
                 <div>
             <Label style={styles.label}> Jadda/Avenue </Label><Input size="big" style={styles.input} type="text" name="avenue" onChange={this.handleChange.bind(this)}/>
            </div>
             </Grid.Column>
             <Grid.Column>
             <Label style={styles.label}> Huose </Label><Input size="big" style={styles.input}  type="text" name="house" onChange={this.handleChange.bind(this)}/>
             </Grid.Column>
             <Grid.Column>
             <Label style={styles.label}> Extra directions </Label><Input size="big" style={styles.input} type="text" name="directions" onChange={this.handleChange.bind(this)}/>
             </Grid.Column>
             <Grid.Column>
               <Checkbox label='this address is default' />
             </Grid.Column>
             </Grid.Row>
             </Grid>
             <Button   content="ADD" type="submit" onClick={this.close.bind(this)} />

             </Form>
          {/* </Modal.Content>
          <Modal.Actions>
            <Button   content="ADD" type="submit" onClick={this.close.bind(this)} />
          </Modal.Actions>
        </Modal> */}
                   
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
        textAlign: 'center',
        border: '1px solid',
        width: 600,
        margin: 'auto'
    },
   label:{
       fontSize:16,
   },
   input:{
    display:'inline-block',
    margin:'7px',
    width: 300
   }
}
export default connect(mapStateToProps, { close })(AddAddress);