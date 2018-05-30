import React from 'react'
import RecentProductsSlider from './recentProductsSlider/recentProductsSlider'

const RecentProducts = ({ products, isFetching, error }) => {
  return (
    <section className='section-recent'>
      <div className='container'>
        <div className='sec-head clearfix'>
          <h2 className='sec-title'>RECENT VIEW</h2>
        </div>
        <div className='sec-warpper padd-l-r'>
          {
            isFetching
              ? <h4>Loading ...</h4>
              : <RecentProductsSlider
                products={products}
              />
          }
        </div>
      </div>
    </section>
  )
}

export default RecentProducts
