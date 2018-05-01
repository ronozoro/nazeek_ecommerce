import * as React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { close } from '../../actions/checkout'
import {open} from '../../actions/checkout'
import { Link } from 'react-router-dom'
import { Button, Header, Modal } from 'semantic-ui-react'
import { addAdress } from '../../actions/checkout'
import { Input, Icon, Container, Segment, Divider, Label, Table, Form, Dropdown } from 'semantic-ui-react'
import { Checkbox, Image, Grid } from 'semantic-ui-react'
export class AddAddress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            city: "",
            area: "",
            street: "",
            avenue: "",
            type: "",
            directions: "",
            house: "",

        }
    }
    // componentDidMount(){
    //     this.props.open()
    // }
    componentWillReceiveProps(nextProps) {
        console.log("addadress");
        
        this.setState({ open: nextProps.open })
    }
    close() {
        this.setState({ open: false })
        this.props.close()
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

    }
    handleChange = (e, { name, value }) => {
        console.log(name, value);

        this.setState({ [name]: value })
    }

    render() {
        const countryOptions = [
            { key: "1", text: "enter1", value: "enter1" },
            { key: "2", text: "enter2", value: "enter2" },
            { key: "3", text: "enter3", value: "enter3" }
        ]
        const types = [
            { key: "1", text: "shipping", value: "shipping" },
            { key: "2", text: "pilling", value: "pilling" }
        ]
        var thos = this
        return (
            <div >
                <Container style={styles.Container}>
                    {/* <Modal open={this.state.open} onClose={this.close.bind(this)}>
                        <Modal.Header style={{color:'white',background:'#13bfad'}}>Add New Address</Modal.Header>
                        <Modal.Content > */}
                        <h1 style={{color:'#13bfad'}}>Add New Address</h1>
                        <Divider style={{background:'#13bfad'}}/>
                            <Form onSubmit={this.handleSubmit.bind(this)} style={styles.form}>
                                <Grid columns={1}>
                                    <Grid.Column>
                                        <label style={styles.label}>City</label><Input  style={styles.input} name="city" type="text" onChange={this.handleChange.bind(this)} />
                                    </Grid.Column>
                                    <Grid.Column>
                                    <label style={styles.label}>type</label><Dropdown style={styles.menu}  name="type"    selection options={types} onChange={this.handleChange.bind(this)} />
                                    </Grid.Column>
                                    <Grid.Column>
                                    <label style={styles.label}>area</label> <Dropdown style={styles.menu} button name="area"   selection options={countryOptions} onChange={this.handleChange.bind(this)} />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <label style={styles.label}>Street</label><Input  style={styles.input} name="street" type="text" onChange={this.handleChange.bind(this)} />
                                    </Grid.Column>
                                    <Grid.Column>

                                        <label style={styles.label}>Avenue</label><Input  style={styles.input} type="text" name="avenue" onChange={this.handleChange.bind(this)} />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <label style={styles.label}>house</label><Input  style={styles.input} type="text" name="house" onChange={this.handleChange.bind(this)} />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <label style={styles.label}>Extra directions</label><Input style={styles.input} type="text" name="directions" onChange={this.handleChange.bind(this)} />
                                    </Grid.Column>
                                    <Grid.Row>
                                        <Button content="ADD" primary type="submit" style={{ margin: 'auto' }} onClick={this.close.bind(this)} />

                                    </Grid.Row>
                                </Grid>
                                <br /><br />

                            </Form>
                        {/* </Modal.Content>

                    </Modal> */}

                </Container>
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    return {
        open: state.checkout.open
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {


    }

}

var styles = {
    form: {
        // textAlign: 'center',
        // border: '1px solid',
        width: 600,
        margin: 'auto'
    },
    Container:{
        width: 600,
        margin: 14,
        border: '1px solid',
        borderRadius: 15
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
    label:{
    width: 124,
    margin: 10,    
    fontSize: 17
    }
}
export default connect(mapStateToProps, { open,close, addAdress })(AddAddress);