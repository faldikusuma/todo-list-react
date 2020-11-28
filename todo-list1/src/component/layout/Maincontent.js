import React from 'react';

function Maincontent(props) {
  const checklist = {
    textDecoration:'line-through',
    fontStyle: 'italic',
    color: '#cdcdcd',
  }
    return (
     
     <div className="todos-item">
      
      <input 
      type="checkbox" 
      checked={props.todo.completed} 
      onChange={() => props.handleChange(props.todo.id)} />
      <p style={props.todo.completed ? checklist: null}>   {props.todo.title}</p>
      </div>
   
    );
   

}




export default Maincontent;
