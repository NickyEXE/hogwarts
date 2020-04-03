import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "../containers/HogContainer";

class App extends Component {
  
  state ={
    greaseFilter: false,
    sortByWeight: false,
    hiddenHogNames: []
  }

  toggle = (key) => this.setState(prevState => ({[key]: !prevState[key]}))

  greaseFilteredHogs = (hogs) => this.state.greaseFilter ? hogs.filter(hog => hog.greased) : hogs
  
  sortedHogs = (hogs) => {
    if (this.state.sortByWeight){
      return [...hogs].sort((hogA, hogB) => hogB.weight - hogA.weight)
    }
    else {
      return [...hogs].sort((hogA, hogB) => hogA.name.localeCompare(hogB.name))
    }
  }

  unhiddenHogs = (hogs) => hogs.filter(hog => !this.state.hiddenHogNames.includes(hog.name))

  hideHog = (hogName) => {
    const hiddenHogNames = this.state.hiddenHogNames
    if (this.state.hiddenHogNames.includes(hogName)){
      const newHogNames = hiddenHogNames.filter(filteredHogName => filteredHogName !== hogName)
      this.setState({hiddenHogNames: newHogNames})
    }
    else {
      this.setState({hiddenHogNames: [...hiddenHogNames, hogName]})
    }
  }

  render() {
    let filteredHogs = this.greaseFilteredHogs(hogs)
    let sortedHogs = this.sortedHogs(filteredHogs)
    let unhiddenHogs = this.unhiddenHogs(sortedHogs)

    return (
      <div className="App">
        <Nav toggle={this.toggle} {...this.state} />
        <HogContainer hogs={unhiddenHogs} hideHog={this.hideHog}/>
      </div>
    );
  }
}

export default App;
