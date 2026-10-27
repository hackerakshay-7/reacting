import React from 'react';
import{createRoot} from 'react-dom/client';
import App from './App.jsx'

const Reactelement = React.createElement( // ## this is react wala render // order pre defined
  // tree creation according to react convintion
  // first one is tag
  'a',
  // second we pass object ie properties
  {href : 'http://google.com' , target : ' _blank'},
  // third argument is text itslef
  ' click me to suck ass'
)

const anotherelement = (
  // this is custom render
  <a href="http://google.com" target='_blank'> speak good </a>
)

createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
 // Reactelement
 // anotherelement
)

