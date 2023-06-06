import { useState } from 'react'
import { Form } from '@formio/react';
import './App.css'
import SubmitPopup from '../../SubmitPopup';

function App() {
  const [count, setCount] = useState(0)
  
    const form = {
      components: [
        {
          type: 'custom',
          key: 'myCustomComponent',
        },
      ],
    };
  const [popup,setPop] = useState(false);
  const handleClickOpen=()=>{
    setPop(!popup);
  } 
  const handleclosePopup = () => {
    setPop(!popup);

  }
  return (
    <div className="App">
    <Form src="https://forms-stage.vialto.com/formio/kayla" form={form} />
    <button onClick={handleClickOpen}> Open Popup</button>
    
    <SubmitPopup/>
    <div>
      <div className='main'>
        { popup === true ? (
           <div className='popup'>
          <button onClick={handleclosePopup}>X</button>        
        <img src="https://im2.ezgif.com/tmp/ezgif-2-a20fcbbcdf.png"/>
        
      </div>)
      : (null)

        }
     
    </div>
    </div>
  </div>
  );
}

export default App
