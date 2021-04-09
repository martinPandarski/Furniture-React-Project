import React, {useEffect, useState} from 'react'
import {Table} from 'react-bootstrap';
import {useAuth} from '../../../context/auth';
import api from '../../../services/api';
import OrderInfo from '../../Admin/OrderInfo/OrderInfo'

export default function UserOrders() {
    const [orders, setOrders] = useState([]);
    const { currentUser } = useAuth()
    useEffect(() => {
        fetch(api.orders)
        .then(res => res.json())
        .then(orders => setOrders(orders))
        .catch(err => alert(err))
        
      }, [])
      console.log(orders)
    return (
        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Email Address</th>
      <th>Items Bought</th>
      <th>Total Price</th>

    </tr>
  </thead>
  <tbody>
  {Object.keys(orders).map(id => 
      orders[id].email === currentUser.email ? 
      <OrderInfo
          key={id}
          email={orders[id].email}
          order={orders[id].itemCount}
          price={orders[id].total}
       
          />
    : ''
  )}
  </tbody>
</Table>
        </div>
    )
}
