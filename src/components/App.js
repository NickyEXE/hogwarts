import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from '../containers/HogContainer';


class App extends Component {

  state = {
    greaseFilter: false,
    sortByWeight: false,
    hiddenHogNames: []
  }

  toggleGrease = () => this.setState({greaseFilter: !this.state.greaseFilter})
  toggleSort = () => this.setState({sortByWeight: !this.state.sortByWeight})

  filteredHogs = (hogs) => {
    if (this.state.greaseFilter){
      return hogs.filter(hog => hog.greased)
    }
    else{
      return hogs
    }
  }

  sortedHogs = (hogs) => {
    if (this.state.sortByWeight){
      return [...hogs].sort((hogA, hogB) => hogB.weight - hogA.weight)
    }
    else{
      return [...hogs].sort((hogA, hogB) => hogA.name.localeCompare(hogB.name))
    }
  }

  unhiddenHogs = (hogs) => {
    // hogs = ["Augustus Gloop", "Cherub", "Piggy Smalls"]
    // this.state.hiddenHogNames = ["Augustus Gloop"]

    // function amINotIncludedInTheListOfHiddenHogs(hog){
    //   !this.state.hiddenHogNames.includes(hog.name)
    // }

    // return hogs.filter(amINotIncludedInTheListOfHiddenHogs)
    return hogs.filter(hog => !this.state.hiddenHogNames.includes(hog.name))
    // ["Cherub", "Piggy Smalls"]
  }

  hideHog = (name) => this.setState({hiddenHogNames: [...this.state.hiddenHogNames, name]})

  render() {
    // filter hogs
    const filteredHogs = this.filteredHogs(hogs)
    const sortedHogs = this.sortedHogs(filteredHogs)
    const unhiddenHogs = this.unhiddenHogs(sortedHogs)
    return (
      <div className="App">
        <Nav toggleGrease={this.toggleGrease} {...this.state} toggleSort={this.toggleSort}/>
        <HogContainer hogs={unhiddenHogs} hideHog={this.hideHog} />
      </div>
    );
  }
}

export default App;
