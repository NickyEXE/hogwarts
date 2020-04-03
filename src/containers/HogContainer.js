import React from 'react'
import HogCard from '../components/HogCard.js'

function HogContainer(props){
    const renderHogs = () => props.hogs.map(hog => <HogCard key={hog.name} hideHog={props.hideHog} {...hog}/>)
    return(
        <div className="ui grid container">
            {renderHogs()}
        </div>
    )
}

export default HogContainer