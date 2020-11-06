import React from 'react';
import ReactDOM from 'react-dom';
import About, {About_P, Skills, Experience, Extra} from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';


// This will initiate what's rendered at first which will be the About Me page.
ReactDOM.render(
    <About />,
  document.getElementById('root')
);

function About_Me() {
  ReactDOM.render(
    <About_P />,
    document.getElementById('root')
  );
};
// The following line attaches a click event to the 'abt' button that runs the About_Me function and returns false.
document.getElementById('abt').addEventListener('click',About_Me,false);
function Skills_P() {
  ReactDOM.render(
    <Skills />,
    document.getElementById('root')
  );
};
// The following line attaches a click event to the 'skl' button that runs the Skills_P function and returns false.
document.getElementById('skl').addEventListener('click',Skills_P,false);

function Experience_P() {
  ReactDOM.render(
    <Experience/>,
    document.getElementById('root')
  );
};
// The following line attaches a click event to the 'exp' button that runs the Experience_P function and returns false.
document.getElementById('exp').addEventListener('click',Experience_P,false)

function Extra_P() {
  ReactDOM.render(
    <Extra/>,
    document.getElementById('root')
  );
};
document.getElementById('ext').addEventListener('click',Extra_P,false);
/*I'll create my react components that will be rendered by ReactDOM into the Main element
 *(The Vertial NavBar will have About Me, Skills, Experience, Extracurriculars buttons that will 
 *trigger onClick functions that render these components. */




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
