import React, { Component } from 'react';
import './UserCreateEdit.css';

class UserCreateEdit extends Component {
  constructor(props) {
    super(props);
    this.state={userid:[] }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

handleCancel(){
     window.location.reload(true);

};

handleSubmit(event) {
        console.log("Creating new User")
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            "user_name": this.refs.user_name.value,
            "role_name": this.refs.role_name.value,
            "first_name":  this.refs.first_Name.value,
            "last_name":  this.refs.last_Name.value,
            "description":  this.refs.description.value,
            "roles":  this.refs.roles.value,
            "role_discription":  this.refs.role_discription.value })
      };
     const response =  fetch('http://127.0.0.1:8000/api/', requestOptions)
     if (!response.ok) {
       alert("Could not Perform Post Operation");
     }
     else{alert("User Successfully Created")}
}

render() {
        return (
          <div>
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">

              <div className='userdetail'>

              <label>First Name:</label>
              <input className="form-control" type="text" ref='first_Name' />

              <label>
                Last Name:</label>
                <input className="form-control" type="text" ref='last_Name' />

                <label>
                  User Name:</label>
                  <input className="form-control" type="text" ref='user_name'/>

              <label>
                Descripttion:</label>
                <input className="form-control" type="text" ref='description' />

             </div>
             <div className= 'roledetail'>
             <label>
                Role Name:</label>
                <input className="form-control" type="text" ref='role_name'/>


              <label>
                Roles:</label>
                <textarea className="form-control" ref='roles' ></textarea>

              <label>
                Role Description:</label>
                <textarea className="form-control" ref='role_discription' ></textarea>

              <input className="btn btn-primary" type="submit" value="Submit" />
              </div>
            </div>
          </form>
          <button onClick={() => { this.handleCancel() }}>Cancel</button>
          </div>
        );
      }
}

export default UserCreateEdit;
