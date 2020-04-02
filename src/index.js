import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css'
import './index.css';

function hog(){
    console.log("🐷🐷🐷🐷🐷🐷🐷🐷Oink Oink🐷🐷🐷🐷🐷🐷🐷🐷")
    console.log(arguments[0])
    console.log("🐷🐷🐷🐷🐷🐷🐷🐷Oink Oink🐷🐷🐷🐷🐷🐷🐷🐷")
}
console.hog = hog


ReactDOM.render(<App />, document.getElementById('root'));
