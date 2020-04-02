import React, {Component} from 'react';

class HogCard extends Component {
    state = {
        clicked: false
    }

    onClick = () => {this.setState({clicked: !this.state.clicked})}

    render(){
        const {name, specialty, weight, greased} = this.props
        const medal = this.props["highest medal achieved"]
        const getImage = () => {
            const name = this.props.name.split(" ").map(item => item.toLowerCase()).join("_")
            return require(`../hog-imgs/${name}.jpg`)
        }
        return (
        <div className="ui eight wide column card" onClick={this.onClick}>
            <div className="image"><img src={getImage()}/></div>
            <div className="content">
                <div className="header">{name}</div>
            </div>
            {(this.state.clicked) && <div>
                <p><strong>Weight:</strong> {weight} Refridgerators</p>
                <p><strong>Specialty:</strong> {specialty}</p>
                <p><strong>Is my bud right here greased? </strong>{greased ? "Heck yeah" : "No 😿"}</p>
                <button onClick={()=> this.props.hideHog(name)}>Get this hog out of my sight!</button>
                </div>}
        </div>
        )
    }
}

export default HogCard