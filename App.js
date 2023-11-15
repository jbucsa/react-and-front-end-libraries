//Could not get GitHub to upload properly but this file contains the changes down to the App.js File

import React, { useState } from 'react'

function App(){
    let [ counter, changeCounter ] = useState(2)
    window.changeCounter = changeCounter

    const handleClick = () => {
      changeCounter(counter +1)
    }

    return (
        <div className ='container'>
          <button onClick={handleClick}>Click Me</button>
          <h1>Counter 1: {counter}</h1>
          <h2>Counter 2: {counter}</h2>
        </div>
    )
}

export default App;