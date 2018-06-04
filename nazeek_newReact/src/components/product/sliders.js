import React, { Component } from 'react'
import Slider from 'react-slick'
import ReactImageMagnify from 'react-image-magnify'
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
      style: { width: 125 },
      slidesToShow: 3,
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
          {
            this.props.imgs.map((img) => {
              return (
                <div className='pro-slide-item'>
                  <div className='pro--Thumb slider-for__item ex1' >
                    <ReactImageMagnify {...{
                      smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        // isFluidWidth: true,
                        width: 500,
                        height: 507,
                        src: `data:image/jpg;base64, ${img.image}`
                      },
                      largeImage: {
                        src: `data:image/jpg;base64, ${img.image}`,
                        width: 1000,
                        height: 1007
                      },
                      lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
                      isHintEnabled: true,
                      shouldHideHintAfterFirstActivation: false,
                      enlargedImagePosition: 'over'
                    }}
                    />
                  </div>
                </div>
              )
            })
          }
        </Slider>

        <div>
          <Slider
            {...navSlider}
            className='slider slider-nav clearfix'
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
          >
            {
              this.props.imgs.map((img) => {
                return (
                  <div className='sp-nav' style={{ width: 125 }}>
                    <img src={`data:image/jpg;base64, ${img.image}`} alt='' className='img-responsive' />
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </React.Fragment>
    )
  }
}

export default Sliders
