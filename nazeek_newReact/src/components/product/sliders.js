import React, { Component } from 'react'
import Slider from 'react-slick'
import image1PNG from '../../assets/images/small/image1.png'
import image1JPG from '../../assets/images/large/image1.jpg'
import '../../styles/slick.css'

class Sliders extends Component {
  state = {
    nav1: null,
    nav2: null
  }

  componentDidMount () {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    })
  }

  next = () => {
    this.slider1.slickNext()
  }
  previous = () => {
    this.slider1.slickPrev()
  }

  render () {
    const sideSlider = {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      asNavFor: '.slider-nav'
    }

    const navSlider = {
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      asNavFor: '.slider-for',
      dots: false,
      arrows: false,
      focusOnSelect: true,
      centerMode: true,
      vertical: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            vertical: false,
            centerMode: true
          }
        }
      ],
      speed: 1000,
      autoplaySpeed: 2000
    }

    return (
      <React.Fragment>
        <Slider
          {...sideSlider}
          className='slider slider-for'
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
        >
          <div className='pro-slide-item'>
            <div className='pro--Thumb slider-for__item ex1' >
              <img src={image1JPG} alt='' />
            </div>
          </div>
          <div className='pro-slide-item'>
            <div className='pro--Thumb slider-for__item ex1' >
              <img src={image1JPG} alt='' />
            </div>
          </div>
          <div className='pro-slide-item'>
            <div className='pro--Thumb slider-for__item ex1' >
              <img src={image1JPG} alt='' />
            </div>
          </div>
          <div className='pro-slide-item'>
            <div className='pro--Thumb slider-for__item ex1' >
              <img src={image1JPG} alt='' />
            </div>
          </div>
          <div className='pro-slide-item'>
            <div className='pro--Thumb slider-for__item ex1' >
              <img src={image1JPG} alt='' />
            </div>
          </div>
          <div className='pro-slide-item'>
            <div className='pro--Thumb slider-for__item ex1' >
              <img src={image1JPG} alt='' />
            </div>
          </div>
        </Slider>

        <div style={{ width: 125 }}>
          <Slider
            {...navSlider}
            className='slider slider-nav clearfix'
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
          >
            <div className='sp-nav' style={{ width: 125 }}>
              <img src={image1PNG} alt='' className='img-responsive' />
            </div>
            <div className='sp-nav' style={{ width: 125 }}>
              <img src={image1PNG} alt='' className='img-responsive' />
            </div>
            <div className='sp-nav' style={{ width: 125 }}>
              <img src={image1PNG} alt='' className='img-responsive' />
            </div>
            <div className='sp-nav' style={{ width: 125 }}>
              <img src={image1PNG} alt='' className='img-responsive' />
            </div>
            <div className='sp-nav' style={{ width: 125 }}>
              <img src={image1PNG} alt='' className='img-responsive' />
            </div>
            <div className='sp-nav' style={{ width: 125 }}>
              <img src={image1PNG} alt='' className='img-responsive' />
            </div>
          </Slider>
        </div>
      </React.Fragment>
    )
  }
}

export default Sliders