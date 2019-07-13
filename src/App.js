import React from "react";
import "./App.css";
import Banner from "./BannerComponent";
import NavBar from "./NavBar";
import ServicesContainer from "./ServiceComponent";
import QuoteForm from "./Form"

class App extends React.Component {

state = {
  showForm: false
}

showForm = () => {
  this.setState({showForm: true })
}

render () {
  return (
    <div className="App">
      <NavBar />
      <Banner showForm={this.showForm}/>
      <ServicesContainer showForm={this.showForm}/>
      {this.state.showForm && <QuoteForm />}
    </div>
  );
}

}
export default App;
