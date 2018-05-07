import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {Rating, Menu,Header, MenuItem, Icon, Sidebar, Segment, Dimmer, Loader,Dropdown,Table,TableBody,TableCell } from 'semantic-ui-react'

class Filtermenue extends React.Component {
      constructor(props){
        super(props);
        this.state={
      //     data:this.props.data
        }
      }
        static propTypes = {
      //     get: PropTypes.func.isRequired,
        };
        componentWillRecivePrpos(){
      //     this.setState({data:newprops.data})
        }
        render(){
              return <div> <div class="side-filter">
              <h2>Filter</h2>
              <div class="filter-block-content">
                  <div class="filter-block">
                      <h3 class="f-title-sm">Furniture</h3>
                      <h3 class="f-title-xs">Furniture</h3>
                      <div class="asked-list panel-group accordion-content" id="accordion">
                          <div class="panel panel-default">
                              <div class="panel-heading accordion-heading">
                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" class="">Table</a>
                              </div>
                              <div id="collapse1" class="panel-collapse collapse in">
                                  <div class="panel-body">
                                      <div class="ui_checkbox-collapse">
                                          <div class="ui_checkbox">
                                              <input type="checkbox" name="example"/>
                                              <label>Table</label>
                                          </div>
                                          <div class="ui_checkbox">
                                              <input type="checkbox" name="example"/>
                                              <label>Chair</label>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="panel panel-default">
                              <div class="panel-heading accordion-heading">
                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse2" class="collapsed">Chair</a>
                              </div>
                              <div id="collapse2" class="panel-collapse collapse"/>
                                  <div class="panel-body">
                                      <div class="ui_checkbox-collapse">
                                          <div class="ui_checkbox">
                                              <input type="checkbox" name="example"/>
                                              <label>Table</label>
                                          </div>
                                          <div class="ui_checkbox">
                                              <input type="checkbox" name="example"/>
                                              <label>Chair</label>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="panel panel-default">
                              <div class="panel-heading accordion-heading">
                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse3" class="collapsed">Sofa</a>
                              </div>
                              <div id="collapse3" class="panel-collapse collapse"/>
                                  <div class="panel-body">
                                      <div class="ui_checkbox-collapse">
                                          <div class="ui_checkbox">
                                              <input type="checkbox" name="example"/>
                                              <label>Table</label>
                                          </div>
                                          <div class="ui_checkbox">
                                              <input type="checkbox" name="example"/>
                                              <label>Chair</label>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* <div class="filter-block">
                      <h3 class="f-title-sm">Designer/ shop</h3>
                      <div class="block-checkList content accordion-content mCustomScrollbar _mCS_1" data-mcs-theme="dark"><div id="mCSB_1" class="mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside" style={{maxHeight: 200}} tabindex="0"><div id="mCSB_1_container" class="mCSB_container" style={{position:'relative', top:0, left:0,}} dir="ltr">
                          <div class="ui_checkbox">
                              <input type="checkbox" name="example"/>
                              <label>Table</label>
                          </div>
                          <div class="ui_checkbox">
                              <input type="checkbox" name="example"/>
                              <label>Chair</label>
                          </div>
                          <div class="ui_checkbox">
                              <input type="checkbox" name="example"/>
                              <label>Console</label>
                          </div>
                          <div class="ui_checkbox">
                              <input type="checkbox" name="example"/>
                              <label>Dining Table</label>
                          </div>
                          <div class="ui_checkbox">
                              <input type="checkbox" name="example"/>
                              <label>Sofa</label>
                          </div>
                          <div class="ui_checkbox">
                              <input type="checkbox" name="example"/>
                              <label>Table</label>
                          </div>
                          <div class="ui_checkbox">
                              <input type="checkbox" name="example"/>
                              <label>Chair</label>
                          </div>
                          <div class="ui_checkbox">
                              <input type="checkbox" name="example"/>
                              <label>Console</label>
                          </div>
                          <div class="ui_checkbox">
                              <input type="checkbox" name="example"/>
                              <label>Dining Table</label>
                          </div>
                          <div class="ui_checkbox">
                              <input type="checkbox" name="example"/>
                              <label>Sofa</label>
                          </div>
                      </div><div id="mCSB_1_scrollbar_vertical" class="mCSB_scrollTools mCSB_1_scrollbar mCS-dark mCSB_scrollTools_vertical" style={{display: 'block'}}><div class="mCSB_draggerContainer"><div id="mCSB_1_dragger_vertical" class="mCSB_dragger" style={{position: 'absolute', minHeight: 30, display: 'block', height: 118, maxHeight: 190, top: 0}}><div class="mCSB_dragger_bar" style={{lineHeight: 30}}></div></div><div class="mCSB_draggerRail"></div></div></div></div></div>
                  </div>
                  <div class="filter-block">
                      <h3 class="f-title-sm">Style</h3>
                      <h3 class="f-title-xs">Designer/ shop</h3>
                      <div class="block-checkList content accordion-content mCustomScrollbar _mCS_2 mCS_no_scrollbar" data-mcs-theme="dark"><div id="mCSB_2" class="mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside" tabindex="0" style={{maxHeight: 'none'}}><div id="mCSB_2_container" class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y" style={{position:'relative', top:0, left:0}} dir="ltr">
                          <div class="ui_checkbox">
                              <input type="checkbox" name="example"/>
                              <label>Modern</label>
                          </div>
                          <div class="ui_checkbox">
                              <input type="checkbox" name="example"/>
                              <label>Contemporary</label>
                          </div>
                          <div classn="ui_checkbox">
                              <input type="checkbox" name="example"/>
                              <label>Classic</label>
                          </div>
                          <div class="ui_checkbox">
                              <input type="checkbox" name="example"/>
                              <label>Islamic</label>
                          </div>
                          <div class="ui_checkbox">
                              <input type="checkbox" name="example"/>
                              <label>Islamic</label>
                          </div>
                      </div>
                      <div id="mCSB_2_scrollbar_vertical" class="mCSB_scrollTools mCSB_2_scrollbar mCS-dark mCSB_scrollTools_vertical" style={{display: 'none'}}>
                          <div class="mCSB_draggerContainer">
                              <div id="mCSB_2_dragger_vertical" class="mCSB_dragger" style={{position: 'absolute', minHeight: 30,height: 0, top: 0}}>
                                  <div class="mCSB_dragger_bar" style={{lineHeight: 30}}></div>
                                  </div><div class="mCSB_draggerRail">
                                      </div></div></div></div></div>
                  </div> */}
                  </div>
                 
        
        }
      }

      export default Filtermenue;