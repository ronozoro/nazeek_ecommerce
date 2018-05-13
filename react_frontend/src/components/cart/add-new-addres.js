import * as React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { close } from '../../actions/checkout'
import { open } from '../../actions/checkout'
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
        this.handleSelectTypeChange=this.handleSelectTypeChange.bind(this)
        this.handleSelectAreaChange=this.handleSelectAreaChange.bind(this)

    }
    // componentDidMount(){
    //     this.props.open()
    // }
    // componentWillReceiveProps(nextProps) {
    //     console.log("addadress");

    //     this.setState({ open: nextProps.open })
    // }
    close() {
        this.setState({ open: false })
        if (this.props.onClose)
            this.props.onClose({ open: false })
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
        this.setState({ city: "", house: "", street: "", area: "", directions: "", type: "", avenue: "" })

    }
    handleChange = (e, { name, value }) => {
        console.log(name, value);
        this.setState({ [name]: value })
    }
handleSelectTypeChange(e){
   this.setState({type:e.target.value})
}
handleSelectAreaChange(e){
    this.setState({area:e.target.value})
 }
    render() {
       
        var thos = this
        return (
          <div>

               <button type="button" style={styles.btnAdd} class="btn btn-info btn-lg" data-backdrop="static" data-toggle="modal" data-target="#exampleModal">
                        <Icon name="plus circle" /> Add New Adress
                    </button>

                    <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="dialog" style={{ marginTop: 250 }}>
                            <div class="modal-content">
                                <div style={{ margin: 10 }}>
                                    <h2 class="sec-title f-left">Add New Address</h2>
                                    <button type="button" class="close" data-dismiss="modal" >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <Form onSubmit={this.handleSubmit.bind(this)} style={styles.form}>
                                        <Grid columns={1}>
                                            <Grid.Column>
                                                <label style={styles.label}>City</label><Input style={styles.input} defaultValue={this.state.city} name="city" type="text" onChange={this.handleChange.bind(this)} />
                                            </Grid.Column>
                                            <Grid.Column>
                                                <label style={styles.label}>type</label>
                                                <div style={{ display: 'inline-block' }}><select style={styles.menu} defaultValue={this.state.type} class="form-control chosen-select select2-hidden-accessible" onChange={this.handleSelectTypeChange} tabIndex="-1" aria-hidden="true">
                                                    <option >Enter yours here</option>
                                                    <option value="shipping">shipping</option>
                                                    <option value="billing" >billing</option>
                                                </select></div>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <label style={styles.label}>area</label>
                                                <div style={{ display: 'inline-block' }}><select style={styles.menu} defaultValue={this.state.area} class="form-control chosen-select select2-hidden-accessible" onChange={this.handleSelectAreaChange} tabIndex="-1" aria-hidden="true">
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
                                                <Button content="CANCEL" primary type="button" style={styles.btn} class="close" data-dismiss="modal" aria-label="Close" />

                                            </Grid.Column>
                                        </Grid>
                                        <br /><br />
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
          </div>


        )

    }
}
const mapStateToProps = (state) => {
    return {
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
    Container: {
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
    label: {
        width: 124,
        margin: 10,
        fontSize: 17
    },
    btn: {
        background: '#13bfad',
        border: '1px solid',
        borderRadius: 17
    },
    btnAdd: {
        border: '1px solid',
        borderRadius: 37,
        fontSize: 15,
        background: 'white',
        color: '#13bfad'

    },
}
export default connect(mapStateToProps, { addAdress })(AddAddress);