import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogContainer from '../containers/HogContainer.js'

class App extends Component {

  state = {
    greaseFilter: false,
    sortByWeight: false,
    hiddenHogNames: []
  }

  toggle = (key) => this.setState({[key]: !this.state[key]})


  filterByGrease = (hogs) => {
    if (this.state.greaseFilter){
      return hogs.filter(hog => hog.greased)
    }
    else {
      return hogs
    }
  }

  sortedHogs = (hogs) => {
    if (this.state.sortByWeight){
      const sortByWeight = (hogA, hogB) => hogB.weight - hogA.weight
      return [...hogs.sort(sortByWeight)]
    }
    else {
      return [...hogs.sort((hogA, hogB) => hogA.name.localeCompare(hogB.name))]
    }
  }

  unhiddenHogs = (hogs) => hogs.filter(hog => !this.state.hiddenHogNames.includes(hog.name))

  hideHog = (name) => {
    if (this.state.hiddenHogNames.includes(name)){
      let newHogNames = this.state.hiddenHogNames.filter(hogName => hogName !== name)
      this.setState({hiddenHogNames: newHogNames})
    }
    else{  
      this.setState({hiddenHogNames: [...this.state.hiddenHogNames, name]})
    }
  }

  render() {
    let filteredHogs = this.filterByGrease(hogs)
    let sortedHogs = this.sortedHogs(filteredHogs)
    let unhiddenHogs = this.unhiddenHogs(sortedHogs)
    return (
      <div className="App">

        <Nav toggle={this.toggle} {...this.state}/>
        <HogContainer hogs={unhiddenHogs} hideHog={this.hideHog} />
      </div>
    );
  }
}

export default App;
