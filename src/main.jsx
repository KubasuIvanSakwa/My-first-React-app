import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



  

  setInterval(function tick() {
    const element = (
      <div className='page'>
       <div className='content'>
        <h1 className='greeting'>Hello, World</h1>
        <h2 className='timee'>It is {new Date().toLocaleTimeString()}.</h2>
       </div>
      </div>  
    )
    ReactDOM.createRoot(document.getElementById('root')).render(element)
  }, 1000)