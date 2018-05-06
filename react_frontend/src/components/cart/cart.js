import * as React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {changeQuantity} from "../../actions/cart";
import {checkout} from '../../actions/checkout'
import {Link} from 'react-router-dom'
import{ Input,  Container, Divider, Table, Rating, Header } from 'semantic-ui-react'
import { Button, Checkbox,Image, Icon, Grid } from 'semantic-ui-react'
export class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartItems:props.cart
        }
        this.handleChange=this.handleChange.bind(this)

    }
    handleChange(quantity,id,prodId){  
        this.props.changeQuantity({quantity:quantity,id:id,prodId:prodId})
    }
    componentWillReceiveProps(nextProps){
        console.log({nextProps});
        
     this.setState({cartItems:nextProps.cart})
    }
    handlClick(){
        this.props.checkout()
    }
    render() {
        var thos=this
        const columnsName=[
            {id:'product',title:'Product'},
            {id:'item',title:'ProductId'},
            {id:'quantity',title:'quantity'},
            {id:'price',title:'ItemPrice'},
            {id:'color',title:'color'},

        ]
        if(this.state.cartItems&&this.state.cartItems.length&& this.props.products&&this.props.products.length)
        return (
            <div>

                <Container textAlign='justified'>
                    <b style={{ fontSize: 23 }}>SHOPING CART</b>
                    <Divider />
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
                            {this.state.cartItems.map((item,index)=>{                                
                                return <Table.Row> 
                            {columnsName.map((coulm)=>{
                            if(coulm.id=='product') {
                                return this.props.products.map(prod=>{
                                    console.log(prod);                                        
                                    if(item.product===prod.id){
                                    //    return prod.productimage_set.map(I=>{
                                    //        console.log({I});                                           
                                    //         if(I.product==item.product){
                                                return<Table.Cell>                                      
                                                <div style={styles.img}><Image width={150} src={'data:image/png;base64, '+prod.image} size='tiny' verticalAlign='middle' /></div>
                                                 {/* <div style={styles.contentImg}>Middle ;lk;flk;fkdf;kdf;skf;dlfk;dlfk;dlfk;dfkkflkfmldfkdlsfkdlkfAligned</div> */}
                                                </Table.Cell> 
                                            }
                                    //     })
                                    
                                    // }
                                })

                                  
                                    }
                                if(coulm.id=='item') {                                   
                                        return <Table.Cell>
                                        {item[coulm.id] }
                                     </Table.Cell>                                 
                                   
                                } 
                                if(coulm.id=='quantity') {                                   
                                        return <Table.Cell>
                                        {item[coulm.id] }
                                        <Input type="number" ref="input" onChange={(e,data)=>{this.handleChange(data.value,item.item,item.product)}}/>
                                     </Table.Cell>                                 
                                   
                                } 
                                if(coulm.id=='price') {
                                    return<Table.Cell>
                                       {item[coulm.id]}
                                    </Table.Cell>
                                } 
                                if(coulm.id=='color') {
                                   return this.props.products.map(prod=>{
                                        console.log(prod);                                        
                                        if(item.product===prod.id){
                                           return prod.variation_set.map(v=>{
                                                if(item.item===v.id){
                                                 return<Table.Cell>
                                                    {v.color}
                                                 </Table.Cell>
                                                }
                                            })
                                        
                                        }
                                    })
                                   
                                } 
                                    })
                                }
                               
                                </Table.Row>
                                
                            })
                        }
                           
                        </Table.Body>

                    </Table>

                    <br /><br />
                    <div>
                        <Grid>
                            <Grid.Row columns="equal">
                                <Grid.Column>
                                    <span style={{ fontSize: 15 }}> By countinu to checkout you accept of term of use and privecy policy</span>
                                </Grid.Column>
                                <Grid.Column style={{ marginTop: -40 }}>
                                    <div><p style={styles.p}>
                                        <Icon name="file text outline" />
                                        TOTAL <span style={{ fontSize: 18 }}>(without delivry fees)</span> : 3435 KD</p>
                                    </div>
                                    <br />
                                    <Button content="Checkout" type="button" style={styles.btn} onClick={this.handlClick.bind(this)}/>
                                   <Link to="shop"> <Button animated style={styles.btn}>
                                        <Button.Content visible>Continue Shopping</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='mail forward' />
                                        </Button.Content>
                                    </Button></Link>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <br /><br />
                    </div>
                    <div>
                        <b style={{ fontSize: 23 }}>MAY BE YOU LIKE THIS</b>
                        <Divider />
                    </div>
                </Container>
            </div>
        )
        else{
            return <div style={styles.emptycart}>
                this cart is empty
            </div>
        }
    }
}
const mapStateToProps =(state)=>{
    return {
      cart:state.cart.cartItems,
      products:state.shop.products,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
       
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
export default connect(mapStateToProps, {changeQuantity,checkout})(Cart);