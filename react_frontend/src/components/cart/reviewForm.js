import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { createReviewForProduct } from '../../actions/ReviewListActions'
import { Container, Divider, Table, Rating, Header, Tab } from 'semantic-ui-react'
import { Button, Checkbox, Icon, Grid } from 'semantic-ui-react'
import { Form, Input, TextArea } from 'semantic-ui-react'

class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: null,
            detailsfeeding: null,
            rating: null,
            Reviews: props.Reviews || []
        }
    }
    static propTypes = {

    };
    handleSubmit() {
        let model = {}
        model['comment'] = this.state.comment,
            model['rating'] = this.state.rating,
            model['product'] = this.props.product.id

        console.log(model);
        this.props.createReviewForProduct(model)

    }
    componentWillReceiveProps(nextProps) {
        this.setState({ Reviews: nextProps.Reviews })
    }
    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }

    handleRate = (e, { rating, maxRating }) => {
        this.setState({ rating })

    }
    render() {
        console.log(this.props.Reviews);

        var disabel = false;
        var token = localStorage.getItem('token')
        if (token === null) {
            disabel = true
        }
        else {
            disabel = false
        }
        return (

            <div class="container">

                <div style={styles.div}>
                    {this.state.Reviews.map(item => {
                        return <div>
                             <Rating icon='star' defaultRating={item.value} name='rating' maxRating={5} />
                            <p> {item.comment_text}</p>
                        </div>
                    })}
                </div>
                <div>
                    <h2 class="mt64 mb32 fw_extralight" style={disabel ? styles.h2 : { display: 'none' }}>
                        Please <Link to="/login"><b>log in</b></Link> to comment on this module
                        </h2>
                    <h2 class="mt64 mb32 fw_extralight" style={disabel ? { display: 'none' } : styles.h2}>
                        Write customer review 
                        </h2>
                    <br />

                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Rating icon='star' clearable maxRating={5} disabled={disabel} name='rating' onRate={this.handleRate.bind(this)} />
                        <Form.Input name='comment' disabled={disabel} placeholder='Wrire All  Overall Feeding' onChange={this.handleChange.bind(this)} />
                        <Form.TextArea name="detailsfeeding" placeholder='Write a details Feedback' disabled={disabel} onChange={this.handleChange.bind(this)} />
                        <Form.Button type="submit" content='post' />
                    </Form>
                </div>
            </div>

        );
    }
}


function mapStateToProps(state) {
    return {
        product: state.shop.product || {},
        Reviews: state.reviews.reviewsList
    }
}
var styles={
    div: {
        fontSize: 24,
        padding: 10,
        textAlign: 'center',
        width: 500,
        margin: '10px auto'
    }
    ,
    h2: {
        margin: '10px auto',
        display: 'block',
        border: '1px solid',
        width: 458,
        padding: 5,
        fontSize: 28,
        color: '#13bfad',
        borderRadius: 17
    }
}
export default connect(mapStateToProps, { createReviewForProduct })(Reviews);