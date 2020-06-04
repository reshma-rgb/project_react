import React, { Component } from 'react';
import './App.css';
import UserListDelete from './UserListDelete';
import { BrowserRouter } from 'react-router-dom';
//import { Route } from 'react-router-dom';
import UserCreate from './UserCreate';

// frontend/src/App.js
// const BaseLayout = () => (
//   <div>
//    <UserListDelete />
//    <UserCreateEdit />
//    </div>
// )


class App extends Component {
      constructor(props) {
        super(props);
        this.state={
           textDisplay: false
       }

      }

      render() {
        var tempDate = new Date();
        var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        var month =["Jan","Feb","Mar","April","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
         var date =  days[tempDate.getDay()] + ', ' + month[tempDate.getMonth()] + ' '+ tempDate.getDate() +' ' + tempDate.getFullYear();
         const currDate = date;
      return (
        <BrowserRouter>
        <div className="panel panel-default">
       <div className="panel-heading">User Management</div>
       <div className="panel-body">
        <div className="myTable" > { this.state.textDisplay ?   <UserCreate />  : <UserListDelete />  } </div>

        </div>
        <div className="panel-footer">Last Refreshed {currDate}</div>
        </div>

      </BrowserRouter>
      );}
}

export default App;
