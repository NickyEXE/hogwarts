import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css'
import './index.css';

function hog(){
    console.log("🐷🐷🐷🐷🐷🐷🐷🐷Oink Oink🐷🐷🐷🐷🐷🐷🐷🐷")
    Array.from(arguments).forEach(a => console.log(a))
    console.log("🐷🐷🐷🐷🐷🐷🐷🐷Oink Oink🐷🐷🐷🐷🐷🐷🐷🐷")
}
console.hog = hog


ReactDOM.render(<App />, document.getElementById('root'));
