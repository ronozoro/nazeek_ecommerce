import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getProducts} from "../../actions/shopActions";


class ShopData extends Component {
    static propTypes = {
        getProducts: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.props.getProducts();
    }



    renderProducts(object) {
        return (
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                <div className="product-result-item">
                    <a href="#" className="pro-resThumb">
                        <img data-image={object.object.id} className="active"
                             src={'data:image/png;base64, ' + object.object.image}
                             alt={object.object.name}/>
                    </a>
                    <div className="pro-resCaption">
                        <div className="color-choose">
                            {
                                object.object.variation_set.map(function (product) {
                                    var style = {
                                        backgroundColor: product.color
                                    }
                                    return (
                                        <div>
                                            <input data-image={product.image} name={product.title}
                                                   value={product.price} checked="" type="radio"/>
                                            <label style={style}>
                                                <span>
                                                </span>
                                            </label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="pro-resTxt">
                            <h2 className="pr-title"><a href="#">{object.object.title}</a></h2>
                            <p className="pr-shop">{object.object.seller_name}</p>
                            <span className="pr-sa">{object.object.price}</span>
                            <ul className="pro-resAction">
                                <li>
                                    <a href="#" className="heart-btn">
                                        <i className="icon-heart icons"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="basket-btn">
                                        <i className="icon-basket icons"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderFilters() {
        return (
            <div>

            </div>
        )
    }

    renderSortBy() {
        return (
            <div className="sec-head marg-b0 col-left-right clearfix">
                {/*<h2 className="sec-title f-left">Living Room</h2>*/}
                <div className="col--right clearfix">
                    <div className="filter-sortrg">
                        <i className="zmdi zmdi-unfold-more"></i>
                        <select className="form-control sort-s">
                            <option>Sort by</option>
                            <option>Sort</option>
                            <option>Sort</option>
                            <option>Sort</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }

    renderShop() {
        const products = this.props.products;
        if (products) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="side-filter">
                                <h2>Filter</h2>
                                <div className="filter-block-content">

                                    {this.renderFilters()}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8">
                            {this.renderSortBy()}
                            <div className="sec-warpper">
                                {/*<p className="p-results">23 Results</p>*/}
                                <div className="product-result-list">
                                    <div className="row">
                                        {products.map((object, i) => this.renderProducts({object}))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderShop()}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps, {getProducts})(ShopData);