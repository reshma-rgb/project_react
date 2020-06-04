import React, { Component } from 'react';
import './App.css';
import * as Constants from './constant';

export default class UserUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      user_name: '',
      role_name: '',
      first_name:  '',
      last_name:  '',
      description:  '',
      roles:  '',
      role_discription:  '',
      isloading:true,
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
      this.handleedit = this.handleedit.bind(this);

    }

componentDidMount(){
      console.log('fetching User data UserId',this.props.userid)
      fetch('http://127.0.0.1:8000/api/'+ this.props.userid + '/' )
      .then(res => res.json())
      .then(data => {this.setState({ id:this.props.userid,
            user_name: data.user_name,
            role_name: data.role_name ,
            first_name:  data.first_name,
            last_name:  data.last_name,
            description:  data.description,
            roles:  data.roles,
            role_discription:  data.role_discription,
            isloading:false });});
};

handleCancel(){
  window.location.reload(true);
};

handleSubmit(event) {
  console.log("Performing Patch on UserId",this.props.userid)
  const requestOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify({ "id": this.props.userid,
             "user_name": this.state.user_name,
              "role_name": this.state.role_name,
              "first_name":  this.state.first_name,
              "last_name":  this.state.last_name,
              "description":  this.state.description,
              "roles":  this.state.roles,
              "role_discription":  this.state.role_discription})
  };
  fetch('http://127.0.0.1:8000/api/'+ this.props.userid + '/', requestOptions);
};

handleInputChange (event) {
  const value = event.target.value;
    this.setState({
      [event.target.name]: value
    });

};
handleedit (event) {
  const value = event.target.value;
  switch (value) {
    case "Group1":
         this.setState({ role_name:Constants.ROLENAME1 ,
          roles: Constants.ROLES1 ,
          role_discription: Constants.ROLEDES1});
        break;
    case "Group2":
         this.setState({ role_name:Constants.ROLENAME2 ,
          roles: Constants.ROLES2 ,
        role_discription: Constants.ROLEDES2});
        break;
   case "Group3":
            this.setState({ role_name:Constants.ROLENAME3 ,
          roles: Constants.ROLES3 ,
          role_discription: Constants.ROLEDES3});
        break;
    case "Group4":
        this.setState({ role_name:Constants.ROLENAME4 ,
         roles: Constants.ROLES4 ,
        role_discription: Constants.ROLEDES4});
        break;
    default:
    this.setState({ role_name:'' ,
     roles:'' ,
    role_discription: ''});
}
};

      render() {

       if (this.state.isloading) return <h1>Loading.....</h1>
      return (

        <div className="panel panel-default manageuser">
        <div className="panel-heading heading3">Admin</div>
        <div className="panel-body">
        <button className="btn cancelupdate" onClick={ this.handleCancel }><i className="fa fa-trash"></i></button>
        <form onSubmit={this.handleSubmit}>

        <div className="form-group">

          <input className="btn btn-primary btn-sm submitupdate" type="submit" value="Save" />

          <div className="panel panel-default manageuser">
          <div className="panel-heading heading2 general">1-General Info</div>
          <div className="panel-body">
          <div className= "userdetail">

          <table id ="generaltab">
          <thead></thead>
          <tbody>
          <tr>
           <td><label>First Name:</label></td>
            <td><input className="block" type="text" onChange={this.handleInputChange} value={this.state.first_name}   name ='first_name' placeholder="First Name" /></td>
          </tr>

          <tr>
          <td><label>Last Name *:</label></td>
          <td><input className="block" type="text" onChange={this.handleInputChange} value={this.state.last_name}  name = 'last_name'  placeholder="Last Name" required/></td>
          </tr>

          <tr>
          <td><label>User Name *:</label></td>
          <td><input  className="block" type="text" onChange={this.handleInputChange} value={this.state.user_name} name='user_name' placeholder="User Name" required/></td>
          </tr>


          <tr>
            <td><label>Description:</label></td>
            <td><input  className="block" type="text" onChange={this.handleInputChange} value={this.state.description}  name ='description'  placeholder="Description" /></td>
          </tr>
            </tbody>
            </table>

           </div>
           </div>
           </div>
           <div  id='users'>
           <div className="panel panel-default manageuser">
           <div className="panel-heading heading2 general">Roles</div>
           <div className="panel-body">
           <div className= "userdetail">
            <table>
            <thead>
            <tr>
            <th><input type="radio"  disabled /></th>
            <th>Role Name</th>
            <th>Description</th>
            <th>Roles</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td><input type="radio"  name="Group" value= "Group1" onChange={ this.handleedit} /></td>
            <td>{Constants.ROLENAME1}</td>
            <td>{Constants.ROLEDES1}</td>
            <td>{Constants.ROLES1}</td>

            </tr>
            <tr>
            <td><input type="radio"  name="Group" value = "Group2" onChange= { this.handleedit } /></td>
            <td>{Constants.ROLENAME2}</td>
            <td>{Constants.ROLEDES2}</td>
            <td>{Constants.ROLES2}</td>
            </tr>

            <tr>
            <td><input type="radio"  name="Group" value= "Group3" onChange={ this.handleedit} /></td>
            <td>{Constants.ROLENAME3}</td>
            <td>{Constants.ROLEDES3}</td>
            <td>{Constants.ROLES3}</td>

            </tr>

            <tr>
            <td><input type="radio"  name="Group" value= "Group4" onChange={ this.handleedit} /></td>
            <td>{Constants.ROLENAME4}</td>
            <td>{Constants.ROLEDES4}</td>
            <td>{Constants.ROLES4}</td>

            </tr>
            </tbody>

            </table>
            </div>
            </div>
            </div>
          </div>
          </div>
        </form>
        </div>

        </div>

      );}
}
