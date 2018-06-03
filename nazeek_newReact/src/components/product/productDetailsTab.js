import React from 'react'

const ProductDetailsTab = () => {
  return (
    <React.Fragment>
      <ul className='nav-tab-product clearfix'>
        <li className='active'>
          <a href='#pro-t1' data-toggle='tab' aria-expanded='true'>overview</a>
        </li>
        <li>
          <a href='#pro-t2' data-toggle='tab' aria-expanded='false'>Details</a>
        </li>
        <li>
          <a href='#pro-t3' data-toggle='tab' aria-expanded='false'>Reviews</a>
        </li>
      </ul>
      <div className='tab-content'>
        <div className='tab-pane active' id='pro-t1'>
          <div className='tab-content-txt'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            U           t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className='tab-pane fade' id='pro-t2'>
          <div className='tab-content-txt'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className='tab-pane fade' id='pro-t3'>
          <div className='tab-content-txt'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductDetailsTab
