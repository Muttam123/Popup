import { useState } from 'react'
import { Form } from '@formio/react';
import './App.css'
import SubmitPopup from '../../SubmitPopup';

function App() {
  return (
    <div className="App">
    <Form src="https://forms-stage.vialto.com/formio/kayla"/>
    
    <SubmitPopup/>
    <div>
      <div className='main'> 
    </div>
    </div>
  </div>
  );
}

export default App
