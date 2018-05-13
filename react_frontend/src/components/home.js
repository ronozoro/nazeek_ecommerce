
require('./cart/style.css')

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getsorteditems } from '../actions/filterMenue'
import { Slide } from 'react-slideshow-image';
import Sidemenue from './sidemenue'
import Products from './products'
import { getProducts } from "../actions/shopActions";
import Test from './testSlider'
import NewArivals from '../pages/newarrivals'
import { Menu, MenuItem, Divider, Sidebar, Segment, Image, Loader, Grid, GridColumn, GridRow, Button, Dropdown } from 'semantic-ui-react'
var slideIndex = 1;
class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			slideCount: 1
		}

	}
	componentDidMount(){
		//this.props.getsorteditems('modified_date')
		this.props.getProducts()
	  }
	render() {

		const images = [
			'../../src/styles/images/img-slide.jpg',
			'../../src/styles/images/img-slide.jpg',
			'../../src/styles/images/img-slide.jpg',
			'../../src/styles/images/img-slide.jpg',

		];
		var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
		return (
			<div>
				<div>	<Slide
					images={images}
					duration={5000}
					transitionDuration={1000}
				/></div>
				<br />
				<div >
					{/* <Grid columns={2}> */}
						
						{/* <Grid.Column width={10}> */}
							{/* <div class="sec-head clearfix">
								<h2 class="sec-title f-left">new arrivals</h2>
								<a href="#" class="more-page f-right">more <i class="icon-arrow-right icons"></i></a>
							</div> */}
							<NewArivals/>
							
						{/* </Grid.Column> */}

					{/* </Grid> */}
				</div>
				<div class="recent" style={{
			position: 'relative',
			padding: '80px 0px 70px',
			backgroundAttachment: 'fixed',
			backgroundSize: 'cover',
			backgroundPosition: 'center'}}>
					<div class="sec-head clearfix" style={{display:'table',margin:'auto'}}>
						<h2 class="sec-title">RECENT VIEW</h2>

					</div>
                           
					<Test/>

				</div>
<div>
<section class="section-subscribe">
			<div class="container">
				<div class="row">
					<div class="col-md-5 col-sm-6">
						<div class="scribe-txt">
							<img src="images/email.png" alt=""/>
							<p>Subscrib For Mailing List</p>
						</div>
					</div>
					<div class="col-md-offset-2 col-md-5 col-sm-6" style={{marginLeft:163}}>
						<form class="scribe-form" action="#">
							<input type="email" class="form-control" placeholder="Enter Your Mail"/>
							<button type="submit" class="btn btn-scribe"><i class="icon-paper-plane icons"></i></button>
						</form>
					</div>
				</div>
			</div>
		</section>
</div>
			</div>
		)


	}
}
const mapStateToProps = (state, Props) => {
	console.log(state)
	return {

	}

}
var styles = {
	div: {
		width: 1318,
		textAlign: 'center',
		margin: 'auto'
	},
	h1: {
		fontSize: 22,
		display: 'inline-block',
		color: '#13bfad'
	},
	menue: {
		fontSize: 15,
		color: '#13bfad'
	}
}

export default connect(mapStateToProps,{getProducts})(Home);