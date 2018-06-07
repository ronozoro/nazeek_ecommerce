import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import HomeSliderItem from './homeSliderItem'

const HomeSlider = () => {
  return (
    <section className='section-home-slider'>
      <OwlCarousel
        id='homeSlider'
        className='owl-carousel owl-theme style-owl'
        loop
        autoplay
        autoplaySpeed={2000}
        margin={0}
        nav
        dots
        items={1}
      >
        <HomeSliderItem />
        <HomeSliderItem />
      </OwlCarousel>
      <a href='#new-arrivals' className='scroll-button scroll'><i className='icon-arrow-down icons' /></a>
    </section>
  )
}

export default HomeSlider
