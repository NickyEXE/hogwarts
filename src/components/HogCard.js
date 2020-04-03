import React, {Component} from 'react';

class HogCard extends Component {

    state = {
        clicked: false
    }

    toggleClick = () => this.setState(prevState => ({clicked: !prevState.clicked}))

    render(){
        const {name, specialty, weight, greased} = this.props
        const imageStub = name.toLowerCase().split(" ").join("_")
        return (
            <div className="ui eight wide column card" onClick={this.toggleClick}>
                 <div className="image">
                    <img src={require(`../hog-imgs/${imageStub}.jpg`)} alt={name}/>
                </div>
                <div className="content">
                    <div className="header">
                        {name}
                    </div>
                    {this.state.clicked && <div className="description">
                        <strong>Specialty: </strong>{specialty}
                        <div>
                            <button onClick={() => this.props.hideHog(name)}>Get this hog out of my sight!</button>
                        </div>
                    </div>}
                </div>
                    {this.state.clicked && 
                    <div className="extra content">
                    <span className="right floated">
                      {greased ? "A greasy boi" : "Sadly dry 🐷😿"}
                    </span>
                    <span className="left floated">
                      {weight} Refridgerators
                    </span>
                  </div>
                    }
            </div>
        )
    }


}

export default HogCard