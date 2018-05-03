import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Sidemenue from '../sidemenue'
import {getWishListItems}  from '../../actions/wishlistListActions'
import {Container,Divider, Rating, Menu, Header, MenuItem, Icon, Sidebar, Segment, Dimmer, Loader, Dropdown, Table, TableBody, TableCell } from 'semantic-ui-react'
import {Grid,Image} from "semantic-ui-react";
class wishlist extends React.Component {
      constructor(props){
        super(props);
        this.state={
          data:this.props.data||[]
        }
      }
        static propTypes = {
          getWishListItems: PropTypes.func.isRequired,
        };
        componentWillRecivePrpos(nextProps){
           this.setState({data:nextProps.data})
        }
        componentDidMount(){
          this.props.getWishListItems()

        }
        render(){
          console.log(this.props.wishlistItem,this.props.products);
          const columnsName=[
            {id:'product',title:'Product'},
            {id:'item',title:'itemId'},
            {id:'seller_name',title:' shop Name'},
            {id:'price',title:'ItemPrice'},
           

        ]
              return <div>
                <Container>
                  <Grid columns={2}>
                  <Grid.Column width={4}>
                  <Sidemenue/>
                  </Grid.Column>
                  <Grid.Column style={{ marginLeft: 31}} width={10}>
                    <b style={{ fontSize: 23 }}>wish List Items</b>
                    <Divider  style={{background: '#13bfad'}}/> 
                    <Table
                        fixed
                        striped
                        basic='very'
                        style={styles.table}
                    >
                        <Table.Header>
                            <Table.Row>
                               {columnsName.map((coulm,index)=>{
                               return  <Table.HeaderCell>{coulm.title}</Table.HeaderCell>
                                })
                               } 
                                                             
                            </Table.Row>
                        </Table.Header>

                        <Table.Body >
                            {this.props.wishlistItem.map((item,index)=>{ 
                              console.log(item);
                              
                               return <Table.Row> 
                                    {columnsName.map((col)=>{
                            if(col.id=='product') {
                                return this.props.products.map(prod=>{
                                    console.log(prod);                                        
                                    if(item.product===prod.id){
                                                return<Table.Cell>                                      
                                                <div style={styles.img}><Image width={150} src={'data:image/png;base64, '+prod.image} size='tiny' verticalAlign='middle' /></div>
                                                 <div style={styles.contentImg}>Middle ;lk;flk;fkdf;kdf;skf;dlfk;dlfk;dlfk;dfkkflkfmldfkdlsfkdlkfAligned</div>
                                                </Table.Cell> 
                                            }
                                        })
                                    
                                    }
                                  else if(col.id === 'item'){
                                      console.log("equakkkkk",item.id);
                                      return<Table.Cell>                                      
                                         {item.id}
                                      </Table.Cell> 
                                     }
                                    else if(col.id === 'seller_name'){
                                      return this.props.products.map(prod=>{
                                        if(item.product===prod.id){
                                          return<Table.Cell>                                      
                                          {prod[col.id]}
                                       </Table.Cell> 
                                                }
                                            })
                                      
                                     }
                                    else if(col.id=='price'){
                                      return this.props.products.map(prod=>{
                                        if(item.product===prod.id){
                                          return<Table.Cell>                                      
                                          {prod[col.id]}
                                        </Table.Cell> 
                                                }
                                            })
                                     
                                     }
                                     else{
                                       
                                     }
                                    //  <Table.Cell>                                      
                                    //      <Icon name='delete'/>
                                    //     </Table.Cell> 

                                })
                         }

                     </Table.Row> 
                            })
                        }
                           
                        </Table.Body>

                    </Table>
                </Grid.Column>

                  </Grid>
            </Container>
            </div>
        }
      }

      const mapStateToProps = (state, Props) => {
        return {
          wishlistItem:state.wishList.wishListItem,
          products:state.shop.products
        }
      }
      var styles={
        btn:{
        borderRadius: 20,
        color: 'white',
        background: '#13bfad',
        fontSize: 17,    
        textAlign: 'center',
        float: 'right'
        },
        emptycart:{
            textAlign: 'center',
        fontSize: 25,
        borderRadius: 13,
        border: '1px solid',
        width: 700,
        margin: 'auto',
        pading: 20,
        padding: 20,
        marginBottom: 30,
        },
        contentImg:{
        // display:'inline-block',
        // border: '1px solid',
        // width: 350,
        // margin: 'auto',
        // overflow: 'auto',
       
        },
        img:{
            // display: 'inline-block',
            border: '1px solid',
            // bottom: 47,
            // position: 'relative',
            // width: 50,
            width: 170,
           
        },
        table:{
        textAlign: 'center',
        fontSize: 15
        },
        p:{
        float: 'right',
        fontSize: 25,
        padding: 5,
        color: '#13bfad',
        }
    }
    
    export default connect(mapStateToProps, {getWishListItems})(wishlist);
    // export default wishlist
