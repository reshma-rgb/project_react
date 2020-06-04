import React,{Component} from 'react';
import './App.css';
import App from  './App';
import image from './image.png';



class NavTry extends Component{
  constructor(props) {
    super(props);
    this.state={
       textDisplay: false
   }
   this.ToggleButton = this.ToggleButton.bind(this);
  }

  ToggleButton(){
   this.setState({textDisplay: !this.state.textDisplay });
}

  render(){
  return ( <div>
    <nav className="navbar navbar-dark bg-dark ">
    <p>
    <button className="btn btn-dark hamburger" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-controls="navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
  <a className="navbar-brand" href="http://localhost:3000/"><img src={image} alt=" " /></a></p>
  </nav>
  <div className="collapse" id="navbarNav">
  <div className="useclass">
  <h6 className="myButton">Users</h6></div>
  <App />
</div>
</div>)
};
}

export default NavTry;
