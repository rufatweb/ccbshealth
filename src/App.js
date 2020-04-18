import React from "react";
import "./App.css";
import Banner from "./BannerComponent";
import NavBar from "./NavBar";
import ServicesContainer from "./ServiceComponent";
import QuoteForm from "./Form"
import axois from "axios";

class App extends React.Component {

state = {
  showForm: false,
  submitted: false,
}

showForm = () => {
  this.setState({showForm: true, submitted: false})
}

handleSubmit = () => {
  this.setState({submitted: !this.state.submitted, showForm: !this.state.showForm})
}

render () {
  return (
    <div className="App">
      <NavBar />
      <Banner showForm={this.showForm}/>
      <ServicesContainer showForm={this.showForm}/>
      {this.state.showForm && <QuoteForm handleSubmit={this.handleSubmit}/>}
      {(this.state.submitted) ? <div className="thanks"> Thanks. Someone will be in touch soon. </div>: null}
    </div>
  );
}



}
export default App;
