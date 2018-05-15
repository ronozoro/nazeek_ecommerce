
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
import Slider from 'react-slick'
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
	var homesettings={
		dots:false,
		arrows:true,
		infinite: true,
		autoplay:true,
		slickNext:<button>next</button>,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
	}
		return (
			<div>
				<div>	
					<Slider {... homesettings}>
					<div>
					<div className="item">
					<div className="item-slide" style={{backgroundImage: `url('../../src/styles/images/img-slide.jpg')`}}>
						<div className="container">
							<div className="row">
								<div className="col-md-6 col-sm-8 margin-auto">
									<div className="slide-txt to-animate fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.2s">
										<h2>Lorem ipsum dolor sit amet, 
										consectetur adipisicing elit, sed do</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
										<a href="#" className="btn-link">Start Here <i className="icon-action-redo icons"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
					</div>
					<div>
					<div className="item">
					<div className="item-slide" style={{backgroundImage: `url('../../src/styles/images/img-slide.jpg')`}}>
						<div className="container">
							<div className="row">
								<div className="col-md-6 col-sm-8 margin-auto">
									<div className="slide-txt to-animate fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.2s">
										<h2>Lorem ipsum dolor sit amet, 
										consectetur adipisicing elit, sed do</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
										<a href="#" className="btn-link">Start Here <i className="icon-action-redo icons"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
					</div>


	<div>
					<div className="item">
					<div className="item-slide" style={{backgroundImage: `url('../../src/styles/images/img-slide.jpg')`}}>
						<div className="container">
							<div className="row">
								<div className="col-md-6 col-sm-8 margin-auto">
									<div className="slide-txt to-animate fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.2s">
										<h2>Lorem ipsum dolor sit amet, 
										consectetur adipisicing elit, sed do</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
										<a href="#" className="btn-link">Start Here <i className="icon-action-redo icons"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
					</div>
					</Slider>
				{/* <Slide
					images={images}
					duration={5000}
					transitionDuration={1000}
				/> */}
				</div>
				<br />
				<div >
					{/* <Grid columns={2}> */}
						
						{/* <Grid.Column width={10}> */}
							{/* <div className="sec-head clearfix">
								<h2 className="sec-title f-left">new arrivals</h2>
								<a href="#" className="more-page f-right">more <i className="icon-arrow-right icons"></i></a>
							</div> */}
							<NewArivals/>
							
						{/* </Grid.Column> */}

					{/* </Grid> */}
				</div>
				<div className="recent" style={{
			position: 'relative',
			padding: '80px 0px 70px',
			backgroundAttachment: 'fixed',
			backgroundSize: 'cover',
			backgroundPosition: 'center'}}>
					<div className="sec-head clearfix" style={{display:'table',margin:'auto'}}>
						<h2 className="sec-title">RECENT VIEW</h2>

					</div>
                           
					<Test/>

				</div>
<div>
<section className="section-subscribe">
			<div className="container">
				<div className="row">
					<div className="col-md-5 col-sm-6">
						<div className="scribe-txt">
							<img src="images/email.png" alt=""/>
							<p>Subscrib For Mailing List</p>
						</div>
					</div>
					<div className="col-md-offset-2 col-md-5 col-sm-6" style={{marginLeft:163}}>
						<form className="scribe-form" action="#">
							<input type="email" className="form-control" placeholder="Enter Your Mail"/>
							<button type="submit" className="btn btn-scribe"><i className="icon-paper-plane icons"></i></button>
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