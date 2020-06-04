
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// frontend/src/App.js

class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          UserList :[
          //   {
          //   id:'',
          //   user_name:'',
          //   role_name:'',
          //   first_name:'',
          //   last_name:'',
          //   description:'',
          //   roles:'',
          //   role_discription:'',
          // }
        ],
          activeItem: {
            //   id: null,
            //   user_name: "",
            //   role_name: "",
            //   completed: false,
            //
          },
            editing:false,
        };
        this.fetchTasks = this.fetchTasks.bind(this)
      }
      componentWillMount(){
        this.fetchTasks()
      }
      fetchTasks(){
        console.log('fetching....')
        fetch('http://127.0.0.1:8000/api/')
        .then(response => response.json())
        .then(data => console.log('Data:',data))
        .then(data => this.setState({UserList : data}))
      }


      render() {
        {console.log(this.state.UserList)}
        var users = this.state.UserList
        return (
          <main className="content">
            <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
            <div className="row ">
              <div className="col-md-6 col-sm-10 mx-auto p-0">
                <div className="card p-3">
                  <div className="">
                    <button className="btn btn-primary">Add task</button>
                  </div>
                  <h1> Hellow World </h1>

                </div>
              </div>
            </div>
          </main>
        );
      }
}


export default App;
