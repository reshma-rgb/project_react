import React, { Component } from 'react';
import UserUpdate from './UserUpdate';
import UserCreate from './UserCreate';
import './App.css';

export default class UserListDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users : [],
      isclick: false,
      userid :'',
      isloading:true,
      textDisplay: false,
      }
      this.handleDelete = this.handleDelete.bind(this);
      this.ToggleButton = this.ToggleButton.bind(this);
    }

componentDidMount(){
   console.log('fetching List of Users')
   fetch('http://127.0.0.1:8000/api/')
    .then(res => res.json())
    .then(data => {this.setState({ users : data,isloading:false });
  });
};


handleDelete(id){
 console.log('Deleting UserId', id);
 fetch('http://127.0.0.1:8000/api/' + id,
 {method:'DELETE'});
 window.location.reload(true);
};

handleGet(id){
  this.setState({ isclick:true, userid: id});
};

ToggleButton(){
 this.setState({textDisplay: !this.state.textDisplay });
};

renderTableData() {
  return this.state.users.map((user, index) => {
     const { id, user_name, role_name } = user //destructuring
     return (
        <tr key={id}>
           <td><a onClick={() => { this.handleGet(id) }}><font color="blue">{user_name} </font></a></td>
           <td>{role_name}</td>
            <td><button className="btn" onClick={() => { this.handleDelete(id) }}><i className="fa fa-trash"></i></button></td>
        </tr>
     )
  })
};
renderTableHeader() {
  return (<tr>
<th>User Name</th>
<th>Roles</th>
<th>Action</th>
</tr>)
};
  render() {
  if (this.state.isloading) return <h1>Loading.....</h1>
  if(this.state.isclick) return <UserUpdate userid = {this.state.userid} />

  return (
    <div className="panel panel-default manageuser">
  <button className="AddButton btn  btn-sm" onClick={() => this.ToggleButton()}>
             {this.state.textDisplay ? <i className="fa fa-trash"></i> : <div className="btn-primary a"> Add User</div>}
   </button>
   { this.state.textDisplay ?
    <div><div className="panel-heading heading3">New User</div>
    <div className="panel-body"><UserCreate /></div></div>
    :
     <div><div className="panel-heading heading2">Manage Users</div>
     <div className="panel-body">
    <div className="box123">
        <table id='users'>
           <tbody>
           {this.renderTableHeader()}
           {this.renderTableData()}
           </tbody>
        </table>
     </div></div> </div>
   }
     </div>
  )
  ;}
}
