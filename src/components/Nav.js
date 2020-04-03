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
        <button onClick={()=> props.toggle("greaseFilter")}>
          {props.greaseFilter ? "Show me all of my children" : "Only show me my greasy sons"}
        </button>
        <button onClick={()=> props.toggle("sortByWeight")}>
          {props.sortByWeight ? "Sort these hogs by name" : "Sort these hogs by thiccness"}
        </button>
      </div>
    </div>
  );
};

export default Nav;
