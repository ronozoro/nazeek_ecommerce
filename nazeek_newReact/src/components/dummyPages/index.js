import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class DummyPage extends Component {
  state = {
    page: {}
  }

  componentWillReceiveProps (props) {
    console.log('props', props)

    const { name } = this.props.match.params
    const page = props.pages.filter((page) => {
      return page.page_type === name
    })
    console.log(page)

    this.setState({
      page: page[0]
    })
  }
  render () {
    const { title, img, desc } = this.props.location
    const { page } = this.state
    return (
      <React.Fragment>
        <div className='breadcrumb-bar'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><Link to='/'><i className='icon-home icons' /></Link></li>
              <li className='breadcrumb-item active'>{title || page.page_type}</li>
            </ol>
          </div>
        </div>
        <div className='content-innerPage'>
          <div className='container'>
            <div className='sec-head clearfix'>
              <h2 className='sec-title f-left'>{title || page.page_type}</h2>
            </div>
            <div className='content-page-new'>
              <img src={`data:image/jpg;base64, ${img || page.image}`} alt='' className='img-responsive' />
              {/* <h2>What is Lorem Ipsum?</h2> */}
              <p>{desc || page.desc}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default DummyPage
