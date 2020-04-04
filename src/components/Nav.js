import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <div className="buttons">
        <button onClick={props.toggleGrease}>{props.greaseFilter ? "Show me all my children" :"Show only the greasy bois"}</button>
        <button onClick={props.toggleSort}>{props.sortByWeight ? "Sort my children by name" : "Sort my children by weight"}</button>
      </div>
    </div>
  );
};

export default Nav;
