import React, { Component} from "react";
import {Link} from 'react-router-dom'

import Table from 'react-bootstrap/Table'
import api from "../../services/api";
import OrderInfo from "./OrderInfo/OrderInfo";

class Admin extends Component {
    constructor(props){
      super(props)
      this.state = {
        orders : []
      }
    }
  
    componentDidMount(){
      fetch(api.orders)
      .then(res => res.json())
      .then(orders => 
        this.setState({orders}) )
    }
    
 
   
  
    render(){
      
      return (
        <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Email</th>
          <th>Items ordered</th>
          <th>Total Price</th>
         
        </tr>
      </thead>
      <tbody>
        {Object.keys(this.state.orders).map(id => 
          <OrderInfo
          key={id}
          email={this.state.orders[id].email}
          order={this.state.orders[id].itemCount}
          price={this.state.orders[id].total}
       
          />
        )}
      </tbody>
    </Table>

    <div>
      <h3> <Link to="/admin/create">Add new items to the catalog</Link></h3>
    </div>
    </div>
      );
    }
}

export default Admin;