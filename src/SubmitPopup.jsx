import React, { useState } from 'react';

function SubmitPopup() {
    const [popup,setPop] = useState(false);
    const handleClickOpen=()=>{
      setPop(!popup);
    } 
    const handleclosePopup = () => {
      setPop(!popup);
  
    }

  return (
    <div>
     <button onClick={handleClickOpen}>Looks good</button>
      { popup === true ? (
           <div className='popup'>
          <button onClick={handleclosePopup}>X</button>        
        <img src="https://ik.imagekit.io/otlrg1qg7/Briefing_Questionnaire/Thank_you.jpg?updatedAt=1686117432823" />
        
      </div>)
      : (null)

        }
    </div>
  );
}

export default SubmitPopup;