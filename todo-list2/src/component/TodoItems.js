import React,{Component} from 'react';
import PropTypes from 'prop-types';

 class TodoItems extends Component {

   getStyle = () =>{
     return {
       background:'#f5f5f5',
       padding:'12px',
       borderBottom:'1px #ccc dotted',
       textDecoration:this.props.todo.completed ? 'line-through' : 'none'
     };
   }

  render(){
      const {id,title} = this.props.todo;
    return (
       <div style={this.getStyle()}>
         <p>
           <input type="checkbox" value="" onChange={this.props.Markdowns.bind(this,id)}/>{' '}
           {title}
           <button style={btnStyle} onClick={this.props.delete.bind(this,id)}>X</button>
         </p>
       </div>
         )
     }
 }

const btnStyle = {
  background:'#ff0000',
  color:'#fff',
  border:'none',
  padding: '5px 10px',
  borderRadius:'50%',
  cursor: 'pointer',
  float: 'right'
}
//PropTypes
TodoItems.propTypes={
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}
export default TodoItems;
