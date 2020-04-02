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
      <button onClick={() => props.toggle("greaseFilter")}>{props.greaseFilter ? "Show me all those hogs, regardless of grease" : "Show me the greasy bois only"}</button>
      <button onClick={() => props.toggle("sortByWeight")}>{props.sortByWeight ? "Sort all my beautiful children by name" : "Sort all my beautiful children by weight"}</button>
      </div>
    </div>
  );
};

export default Nav;
