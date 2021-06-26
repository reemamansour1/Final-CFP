import React , {useState} from 'react';
import './Page1.css';
function Search() {

  const [input1 , setinput1] = useState(null)

  const [input2 , setinput2] = useState(null)
  const [Click , setClick]= useState('')


  let sentence = ''

  const inputs = (e) => {
    setinput1(e.target.value)
  }

  const inputss = (e) => {
    setinput2(e.target.value)
  }

  const num = (input2/100)*(input2/100)

  let sum = input1/num

  
  if(sum >= 18 & sum <= 25 & sum !== 0)  {
    sentence = ' Your BMI is Normal weight . GOOD JOB . Follow our Workout section to keep FIT and maitain your weight according to a appropriate deit '
  }

  if(sum <= 18 & sum !== 0) {
    sentence = ' Your BMI is Under weight , You MUST gain weight by increasing healthy food & workout daily . Follow our website sections and you will SET A RECORD WITH US !! '
  }

  if(sum >= 25 & sum !== 0) {
    sentence = ' Your BMI is Obese ,You MUST lose weight . Follow our website sections And you will SET A RECORD WITH US !! '
  }
  const show = () => {
    setClick(sentence)


  }
return (
  <div className="All">
    <div className="title">Healthy Lifestyle</div>
      <div className="Page1">
        {/* <h1 className="title">React Movie Search</h1> */}

        
        <div className="inputSide">
          <input className = 'input' type="number" autocomplete="off" required  onChange = {inputs} value ={input1} placeholder = 'Write your Weight' />
          <input className = 'input' type="number" autocomplete="off" required onChange = {inputss} value ={input2} placeholder = 'Write your Height' />
          
          <button className = 'button'onClick = {show}>Submit</button>
        </div>
        <p>{Click}</p>
    
      
        </div> 
      </div>
       );
}

export default Search;