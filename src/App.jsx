import { useState } from 'react'
import { Form } from '@formio/react';
import './App.css'
import SubmitPopup from './SubmitPopup';

function App() {
  return (
    <div className="App">
    < Form src="https://cdn.form.io/formiojs/formio.full.min.js"></Form>
    
    <SubmitPopup/>
    <div>
      <div className='main'> 
    </div>
    </div>
  </div>
  );
}

export default App
