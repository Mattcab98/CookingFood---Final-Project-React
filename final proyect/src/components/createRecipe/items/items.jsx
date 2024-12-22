import { useState } from 'react';
import './items.css';
import Checker from './image/checkY.png'

const items = ({isComplete = false, children, id, deleteCallBack}) => {
    const [isChecked, setChecked] = useState(isComplete);

  return (
    <>
    <div className="wrapper">
        <button 
        onClick={() => setChecked (!isChecked)}
        className={"checker" + (isChecked ? "active" : "")}
        style={{ backgroundImage: isChecked ? `url(${Checker})` : ""}}   
        ></button>
        <li style={{ textDecoration: isChecked ? `line-through` : ""}}>
            {children}</li>
        <button 
        onClick={() => {
            deleteCallBack(id);
        }}
        className='delete'>
        X</button>
    </div>
    </>
  );
};
export default items