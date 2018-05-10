import React, {Component} from "react";
import {connect} from "react-redux";
import { Segment, Grid, GridColumn, GridRow, Button, Select, Dropdown } from 'semantic-ui-react'
import Sidemenue from "./sidemenue";

class Payment extends Component {
render() {
return (<div>
<Grid columns={2}>
<Grid.Column width={4}>
<Sidemenue/>

</Grid.Column >
<Grid.Column width={12}>
<div class="col-lg-9 col-md-8 col-sm-12">
<div class="sec-head marg-b0 clearfix">
<h2 class="sec-title f-left">Way of Payments</h2>
</div>
<div class="sec-warpper">
<div class="table-address">
<div class="table-responsive">
<table class="table table-view-address">
<tbody>
<tr>
<td>
<div class="address-title pay-row">
<div class="add-icons"><img src="images/pay.png" alt="" class="img-responsive"/></div>
<div class="add-tTxt">
<h2>Master Card</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
</div>
</div>
</td>
<td>
<a href="#" class="address-edit"><i class="icon-note icons"></i></a>
</td>
<td>
<a href="#" class="address-remove"><i class="icon-close icons"></i></a>
</td>
</tr>
<tr>
<td>
<div class="address-title pay-row">
<div class="add-icons"><img src="images/pay.png" alt="" class="img-responsive"/></div>
<div class="add-tTxt">
<h2>Master Card</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
</div>
</div>
</td>
<td>
<a href="#" class="address-edit"><i class="icon-note icons"></i></a>
</td>
<td>
<a href="#" class="address-remove"><i class="icon-close icons"></i></a>
</td>
</tr>
</tbody>
</table>
</div>
<a href="#" class="add-newAddress"><i class="icon-plus icons"></i>Add New Method</a>
</div>
</div>
</div>
</Grid.Column>
</Grid>
</div>)
}
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(Payment);