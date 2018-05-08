import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Grid,GridRow,GridColumn} from 'semantic-ui-react'
import {connect} from "react-redux";
import {Input} from 'semantic-ui-react'
import {getItemsOfCart} from '../actions/cart'
import {fetchWishlistItemCount} from '../actions/WishlistListActions'
import {getcatagorysitms} from '../actions/filterMenue'
import {getcatagorys} from '../actions/filterMenue'
import {getProducts} from '../actions/shopActions'
import history from "../utils/historyUtils";

// import {aftersearsh} '../actions/header'
import {aftersearsh} from '../actions/filterMenue'
 class Header extends Component {
constructor(props){
    super(props);
    this.state={
        count:props.count||0,
        catagorys:props.catagorys||[],
        filteritems:[]
    }
}
    static propTypes = {
        authenticated: PropTypes.bool,
        fetchWishlistItemCount:PropTypes.func.isRequired,
        getItemsOfCart:PropTypes.func.isRequired
    };
   
     renderCart() {
        return (
            <div className="col-md-3 col-sm-3">
                <div className="clearfix">
                    <ul className="menu-purches clearfix">
                        <li className="favorite-btn">
                        <Link to="/wishlist"><i
                                className="icon-heart icons"></i><span>{this.props.wishlistCount}</span></Link>
                        </li>
                        <li className="cart-purches-btn">
                            <Link to="/cart"><i className="icon-basket icons"></i><span>{this.state.count}</span></Link>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
    renderLinks() {
        if (this.props.authenticated) {
            return (
                [
                    <li  key="profile">
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </li>,
                    <li key="logout">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                ]
            );

        } else {
            return (
                [
                    <li  key="login">
                        <Link  to="/login">Login</Link>
                    </li>,
                    <li  key="signup">
                        <Link  to="/signup">Sign Up</Link>
                    </li>
                ]
            );
        }
    }

    renderHeaderTop() {
        return (
            [
                <div className="header-top">
                    <div className="container">
                        <ul className="topHmenu-left clearfix">
                            <li><a href="contact.html"><i className="fa fa-envelope-o" aria-hidden="true"></i>mail@mail.com</a>
                            </li>
                            <li><i className="fa fa-mobile" aria-hidden="true"></i>+965-444-444-444</li>
                        </ul>
                        <ul className="topHmenu-right clearfix">
                            {this.renderLinks()}
                            <li>
                                <a href="index_ar.html"><i className="icon-globe icons"></i>Arabic</a>
                            </li>
                        </ul>

                    </div>
                </div>
            ]
        );

    }

    renderMiddle() {
        return (
                <div className="header-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-3">
                                <a href="index.html" className="logo-site">
                                    <img src="/nazeek_ecommerce/" alt="" className="img-responsive"/>
                                </a>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <form className="form-search-head" action="#">
                                <Input className="form-control" placeholder="Search" type="text" onChange={this.handlechange.bind(this)}></Input>
                                        <button type="button" className="btn btn-submit-search" onClick={this.search.bind(this)}><i
                                            className="icon-magnifier icons" aria-hidden="true"></i></button>
                                </form>
                            </div>
                            {this.renderCart()}
                        </div>
                    </div>
                </div>
        );

    }


    renderHeaderBottom() {
        return (

            <div className="header-bottom">
                <div className="container">

                    <div className="hb-right clearfix">
                        <a href="#" className="btn-design">design your room</a>
                        <a href="#menu" className="hamburger is-closed">
                            <span className="hamb-top"></span>
                            <span className="hamb-middle"></span>
                            <span className="hamb-bottom"></span>
                        </a>
                    </div>

                    <div className="hb-left clearfix">
                        <ul className="menu-st search-by clearfix">
                            <li className="dropdown">
                                <a href="product-page.html" data-toggle="dropdown"><i className="icon-magnifier icons"
                                                                                      aria-hidden="true"></i> search
                                    by<span className="m-arrow"><i className="icon-arrow-down icons"></i></span></a>

                                <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">

                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">rooms</a>
                                        <div className="dropdown-menu">
                                            <h3>rooms</h3>
                                            <ul>
                                                <li><a href="#">Bedroom</a></li>
                                                <li><a href="#">Livingroom</a></li>
                                                <li><a href="#">Kids room</a></li>
                                                <li><a href="#">Kitchen</a></li>
                                                <li><a href="#">Bathroom</a></li>
                                                <li><a href="#">Dinning room</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">brands</a>
                                        <div className="dropdown-menu">
                                            <h3>brands</h3>
                                            <ul>
                                                <li><a href="product-page.html">Bedroom</a></li>
                                                <li><a href="product-page.html">Livingroom</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">styles</a>
                                        <div className="dropdown-menu">
                                            <h3>styles</h3>
                                            <ul>
                                                <li><a href="product-page.html">Bedroom</a></li>
                                                <li><a href="product-page.html">Livingroom</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">occasions</a>
                                        <div className="dropdown-menu">
                                            <h3>occasions</h3>
                                            <ul>
                                                <li><a href="product-page.html">Bedroom</a></li>
                                                <li><a href="product-page.html">Livingroom</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>

                            </li>
                        </ul>
                        <ul className="menu-st main-menu clearfix">
                            <li className="dropdown">
                                <a href="product-page.html" data-toggle="dropdown">Furniture</a>
                                <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">

                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">Furniture</a>
                                        <div className="dropdown-menu">
                                            <h3>Furniture</h3>
                                            <ul>
                                                <li><a href="#">Furniture</a></li>
                                                <li><a href="#">Furniture</a></li>
                                                <li><a href="#">Furniture</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">Furniture</a>
                                        <div className="dropdown-menu">
                                            <h3>Furniture</h3>
                                            <ul>
                                                <li><a href="product-page.html">Furniture</a></li>
                                                <li><a href="product-page.html">Furniture</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">Furniture</a>
                                        <div className="dropdown-menu">
                                            <h3>Furniture</h3>
                                            <ul>
                                                <li><a href="product-page.html">Furniture</a></li>
                                                <li><a href="product-page.html">Furniture</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">Furniture</a>
                                        <div className="dropdown-menu">
                                            <h3>Furniture</h3>
                                            <ul>
                                                <li><a href="product-page.html">Furniture</a></li>
                                                <li><a href="product-page.html">Furniture</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="product-page.html" data-toggle="dropdown">Home Decor</a>
                                <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">

                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">Home Decor</a>
                                        <div className="dropdown-menu">
                                            <h3>Home Decor</h3>
                                            <ul>
                                                <li><a href="#">Home Decor</a></li>
                                                <li><a href="#">Home Decor</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">Home Decor</a>
                                        <div className="dropdown-menu">
                                            <h3>Home Decor</h3>
                                            <ul>
                                                <li><a href="product-page.html">Home Decor</a></li>
                                                <li><a href="product-page.html">Home Decor</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">Home Decor</a>
                                        <div className="dropdown-menu">
                                            <h3>Home Decor</h3>
                                            <ul>
                                                <li><a href="product-page.html">Home Decor</a></li>
                                                <li><a href="product-page.html">Home Decor</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">Home Decor</a>
                                        <div className="dropdown-menu">
                                            <h3>Home Decor</h3>
                                            <ul>
                                                <li><a href="product-page.html">Home Decor</a></li>
                                                <li><a href="product-page.html">Home Decor</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="product-page.html">Serve ware</a>
                            </li>
                            <li>
                                <a href="product-page.html">Outdoor</a>
                            </li>
                        </ul>
                        <ul className="menu-st offerMenu clearfix">
                            <li className="new-m">
                                <a href="product-page.html"><span>new</span> arrivals</a>
                            </li>
                            <li className="offers-m">
                                <a href="product-page.html"><span>offers</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    handleClick(id,title){
        console.log(id)
        this.props.getcatagorysitms(id,title)
    }
    handlechange(e,data){
        console.log(e)
        console.log(data.value);

        if(this.props.products.length!=0)
        {
            console.log(this.props.products)
       this.props.products.map((product)=>{
              if( product.title.toLowerCase().indexOf(data.value.toLowerCase())!== -1)
                 {
                     this.setState({filteritems:this.state.filteritems.push (product)})
                } 
            })
    // this.props.aftersearsh(filteritems)
    //         console.log(filteritems)
       
        }
       

       
        
    }
    search(){
        console.log(this.state.filteritems);
        
        if(this.state.filteritems.length!=0)
        {
            //this.props.aftersearsh(filteritems)
        }
    }
    componentDidMount(){
        console.log("didmount");
        
        this.props.fetchWishlistItemCount()
        this.props.getItemsOfCart()
        this.props.getcatagorys();
        this.props.getProducts()

    }
    componentWillReceiveProps(nextProps){
        this.setState({count:nextProps.count,catagorys:nextProps.catagorys,})
    }
    render() {
        console.log({cartcount:this.props.count});
        let catagorys=this.props.catagorys

        return (
            <header>
                {this.renderHeaderTop()}
                {this.renderMiddle()}
                <Grid>
                    <GridRow>
                      <GridColumn style={styles.right} width={2}> <Link to="/offers" style={{color:'white'}} > search by </Link></GridColumn>
                     {this.state.catagorys.map((catagory,index)=>{
                        //  console.log(catagory);
                         
                          let id=catagory.id
                        //  console.log(id);
                         
                         return <GridColumn style={styles.right} id={index+1} key={index} width={2} onClick={this.handleClick.bind(this,id,catagory.title)}> {catagory.title}</GridColumn>}) }
                      {/* <GridColumn style={styles.right} width={2}> <Link style={{color:'white'}} to='/homedecore'>Home Decor</Link></GridColumn>
                      <GridColumn style={styles.right} width={2}> <Link style={{color:'white'}} to="/servware"> Serve ware</Link></GridColumn>
                      <GridColumn style={styles.right} width={2}> <Link style={{color:'white'}} to="/outdoor">Outdoor</Link></GridColumn>*/}
                    <GridColumn style={styles.right} width={2}> 
                           {/* <span style={{backgroundColor: '#f54236',
                            borderRadius: 3,padding: '1 5 0',lineHeight: 20}}>new</span> */}
                             <Link style={{color:'white'}} to="/newv">
                       arrivals</Link></GridColumn> 
                      <GridColumn style={styles.right} width={1}><Link style={{color:'white'}} to='/Offers'>offers
                       {/* <span style={{backgroundColor: '#f54236',
    borderRadius: 3,padding: '1 5 0',lineHeight: 20}}>offers</span> */}
                       </Link></GridColumn>
                      <GridColumn style={styles.btn} width={3}>design your room</GridColumn>
                    </GridRow>
                    
                </Grid>
                {/* {this.renderHeaderBottom()} */}
            </header>

        )
    }
}

function mapStateToProps(state) {    
    return {
        authenticated: state.auth.authenticated,
        count:state.cart.count,
        wishlistCount:state.wishList.count,
        catagorys:state.filterMenu.catagorys,
        products:state.shop.products
    }
}

const styles={
    btn: {
        display: 'inline-block',
        color:' #fefefe',
        fontSize: 16,
        fontWeight: 900,
        textTransform: 'uppercase',
        backgroundColor:' #706f6f',
        padding: '11 10 9 20',
        //lineHeight: 28,
        textAlign: 'center',
        paddingTop: 10,
        height: 50,


    },
    right: {
        display: 'inline-block',
        color:' #fefefe',
        fontSize: 16,
        fontWeight: 700,
        textTransform: 'uppercase',
        padding: '11 10 9 20',
        //lineHeight: 28,
        textAlign: 'center',
        paddingTop: 10,
        backgroundColor: '#13bfad',
        paddingLeft: 0,
        paddingRight: 0,
        height: 50,


    },
    span1:{backgroundColor: '#f54236',
    borderRadius: 3,padding: '1 5 0',lineHeight: 20}
}
export default connect(mapStateToProps,{fetchWishlistItemCount,getItemsOfCart,getcatagorys,getcatagorysitms,getProducts,aftersearsh})(Header);