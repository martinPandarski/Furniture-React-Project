import React, { Component} from "react";
import {Link} from 'react-router-dom'

import Table from 'react-bootstrap/Table'
import api from "../../services/api";
import UserInfo from "./UserInfo/UserInfo";

class Admin extends Component {
    constructor(props){
      super(props)
      this.state = {
        users : []
      }
    }
  
    componentDidMount(){
      fetch(api.users)
      .then(res => res.json())
      .then(users => this.setState({users}) )
    }
    
 
   
  
    render(){

      return (
        <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>#</th>
         
        </tr>
      </thead>
      <tbody>
        {this.state.users.map(user => 
          <UserInfo
          key={user.ownerId}
          objectId={user.objectId}
          email={user.email}
          username={user.username}
       
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