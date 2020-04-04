import React from 'react';
import HogCard from '../components/HogCard'

function HogContainer(props){
    console.hog(props.hogs)

    const renderHogs = () => props.hogs.map(hog => <HogCard key={hog.name} hideHog={props.hideHog} {...hog}/>)

    return(<div className="ui grid container">{renderHogs()}</div>)
}


export default HogContainer