import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProfile } from "../../actions/authActions";
import { Input, Grid, Divider, Button ,Container,} from "semantic-ui-react";
import Sidemenue from '../sidemenue'
class UserProfile extends Component {

    static propTypes = {
        getUserProfile: PropTypes.func.isRequired,
        user: PropTypes.object
    };

    componentWillMount() {
        this.props.getUserProfile();
    }

    renderUser() {
        const user = this.props.user;
        if (user) {
            return (
                <div >
                                <Container textAlign='justified' style={{margin:40}}>

                    <Grid columns={2} >
                        <Grid.Column width={4}>
                            <Sidemenue />
                        </Grid.Column>
                        <Grid.Column style={{ marginLeft: 31 }} width={10}>
                            <h1> Personal Enformation </h1>
                            <Divider />
                            <Grid columns={1}  >
                                <Grid.Column>
                                    <label style={styles.label} >User Name </label><Input style={styles.input} type="text" defaultValue={user.username} icon='users' iconPosition='right' disabled /></Grid.Column>
                                <Grid.Column>
                                    <label style={styles.label}>First Name </label><Input type="text" style={styles.input} defaultValue={user.first_name} icon='users' iconPosition='right' disabled /></Grid.Column>
                                <Grid.Column>
                                    <label style={styles.label}>Full Name </label><Input type="text" style={styles.input} defaultValue={user.full_name} icon='users' iconPosition='right' disabled /></Grid.Column>
                                <Grid.Column>
                                    <label style={styles.label}>email </label><Input type="text" style={styles.input} defaultValue={user.email} icon='users' iconPosition='right' disabled /></Grid.Column>
                                <Grid.Column>
                                    <label style={styles.label}>Website </label><Input type="text" style={styles.input} defaultValue={user.website} icon='users' iconPosition='right' disabled /></Grid.Column>
                                <Grid.Column>
                                    <label style={styles.label}>Mobile </label><Input type="text" style={styles.input} defaultValue={user.mobile} icon='users' iconPosition='right' disabled /></Grid.Column>
                                <Grid.Row>
                                    <Link to="/profile_edit"> <Button style={{}} content="Update Profile" type="button" primary></Button></Link>
                                    <Link to="/change_password"><Button style={{ margin: 'auto' }} content="Change Password" type="button" primary></Button></Link>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid>
                    </Container>
                </div>
            );
        }
        return null;
    }

    render() {
        return (
            <div>
                {this.renderUser()}

                <hr />

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}
var styles = {
    label: {
        width: 180,
        fontSize: 19,
    },
    input: {
        width: 240,
        height: 45
    }
}

export default connect(mapStateToProps, { getUserProfile })(UserProfile);