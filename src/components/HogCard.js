import React, {Component} from 'react';

class HogCard extends Component {

    state = {
        clicked: false,
        hidden: false
    }

    toggle= (arg) => this.setState({[arg]: !this.state[arg]})
    toggleHidden = () => this.setState({hidden: !this.state.hidden})


    render(){
        console.log(this.state)
        const {name, specialty, greased, weight} = {...this.props}
        const medal = this.props["highest medal achieved"]
        const image = this.props.name.toLowerCase().split(" ").join("_")
        const display = this.state.hidden ? "none" : "show"
        return(
        <div className="card ui eight wide column" style={{display: display}} onClick={() => this.toggle("clicked")}>
            <div className="image">
                <img src={require(`../hog-imgs/${image}.jpg`)} alt={name}/>
            </div>
            <div className="content">
                <div className="header">{name}</div>
                {this.state.clicked && <div className="description">
                    <strong>Specialty: </strong>{specialty}<br/>
                    <strong>Weight: </strong>{weight} Refridgerators
                    </div>}
            </div>
            {this.state.clicked && <div className="extra content">
                <span className="right floated">
                    {greased ? "This is one greasy boi" : "This pig needs some grease!"}
                </span>
                <span className="left floated">
                    <strong>Highest Medal Achieved: </strong> {medal}
                </span>
                <br/>
                <button onClick={()=> this.props.hideHog(name)}>Get this hog out of my sight!</button>
            </div>
            }
        </div>
        )
    }
}

export default HogCard;