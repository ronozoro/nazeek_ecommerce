import React from 'react'
import TopHeader from './topHeader'
import MiddleHeader from './middleHeader'
import BottomHeader from './bottomHeader'

const Header = () => {
  return (
    <header id='header'>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </header>
  )
}

export default Header
