import {useRef,useState} from 'react';


const SimpleInput = (props) => {

  const [enteredName,setEnteredName] = useState('');

 const nameChangeHandler = event=>{
    setEnteredName(event.target.value);
  }
  const formSubmitHandler = event=>{
    event.preventDefault();
  }

  return (
    <form  onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
