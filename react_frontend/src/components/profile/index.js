import * as React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import Sidemenue from '../sidemenue'
import { Button, Header, Modal } from 'semantic-ui-react'
import { Input, Icon, Container, Segment, Card, Divider, Label, Table, Form, Dropdown } from 'semantic-ui-react'
import { Checkbox, Image, Grid } from 'semantic-ui-react'
export class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }

    componentWillReceiveProps(nextProps) {
    }


    render() {

        var thos = this
        return (

            <Container >
                <Grid columns={2} >
                    <Grid.Column width={4}>
                        <Sidemenue />
                    </Grid.Column>
                    <Grid.Column style={{    marginLeft: 31}} width={10}>
                        
                            <h1> Profile</h1>
                            <Divider />
                            <Grid columns={2} >
                                <Grid.Column>
                                    <Link to="/userProfile">
                                        <Card style={styles.Card}>
                                            <Card.Content style={styles.header} header=' personal Information' />
                                            <Card.Content description='Manage Your Personal Information' />
                                        </Card>
                                    </Link>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card style={styles.Card}>
                                        <Card.Content style={styles.header} header='Order History' />
                                        <Card.Content description='Manage your Order History' />

                                    </Card>
                                </Grid.Column>
                                <Grid.Column>
                                    <Link to="addressbook"> < Card style={styles.Card}>
                                        <Card.Content style={styles.header} header='Address Book' />
                                        <Card.Content description='Manage Address Book' />
                                    </Card></Link>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card style={styles.Card}>
                                        <Card.Content style={styles.header} header='WishList' />
                                        <Card.Content description='Mange My WishList' />

                                    </Card>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card style={styles.Card}>
                                        <Card.Content style={styles.header} header='Elliot Baker' />
                                        <Card.Content description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                        />
                                    </Card>
                                </Grid.Column>
                            </Grid>
                        
                    </Grid.Column>
                </Grid>
               
            </Container>
            
             
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
    header: {
        background: '#13bfad',
        color: 'white'
    },
    Card: {
        width: 350,
        height: 100
    }
}
export default connect(mapStateToProps, {})(Profile);

 {/* <div style={{display:'inline-block'}}>
                    <Sidemenue/>
                </div> */}
                {/* <div style={{display:'inline-block'}}>
                <h1> Profile</h1>
                <Divider/>
                    <Grid columns={2} >
                    <Grid.Column>
                    <Link to="/userProfile">
                    <Card style={styles.Card}>
                        <Card.Content style={styles.header} header=' personal Information'/>                       
                        <Card.Content description='Manage Your Personal Information'/>
                     </Card>
                    </Link> 
                    </Grid.Column>
                    <Grid.Column>
                    <Card style={styles.Card}>
                        <Card.Content style={styles.header} header='Order History'/>
                        <Card.Content description='Manage your Order History'/>
                    
                    </Card>
                    </Grid.Column>
                    <Grid.Column>
                     <Link to="addressbook"> < Card style={styles.Card}>
                        <Card.Content style={styles.header} header='Address Book'/>
                        <Card.Content description='Manage Address Book' />
                    </Card></Link>
                    </Grid.Column>
                    <Grid.Column>
                    <Card style={styles.Card}>
                        <Card.Content style={styles.header} header='WishList'/>
                        <Card.Content description='Mange My WishList'/>
                    
                    </Card>
                    </Grid.Column>
                    <Grid.Column>
                    <Card style={styles.Card}>
                        <Card.Content style={styles.header} header='Elliot Baker'/>
                        <Card.Content description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    />
                    </Card>
                    </Grid.Column>
                    </Grid>
                    </div> */}