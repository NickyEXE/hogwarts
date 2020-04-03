import React from 'react'
import HogCard from '../components/HogCard.js'


function HogContainer(props){
    
    const renderHogs = () => props.hogs.map((hog, index) => <HogCard key={hog.name} {...hog} hideHog={props.hideHog}/>)
    return (
        <div className="ui grid container">
            {renderHogs()}
        </div>
    )
}

export default HogContainer