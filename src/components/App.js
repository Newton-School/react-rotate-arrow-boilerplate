import React from 'react'
import '../styles/App.css';
import arrow from '../arrow.png'
const App = () => {

  return (
    <div id="main">
      <div className='arrow-holder'>
        <input type={'number'} value="90"/>
        <img src={arrow} style={{transformOrigin:'center', transform:'(90deg)'}} />
      </div>
     
    </div>
  )
}


export default App;
