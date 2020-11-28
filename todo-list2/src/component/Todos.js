import React from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';

class Todos extends React.Component  {

  render(){
    return this.props.todos.map((todo) =>(
   
    <TodoItems key={todo.id} todo={todo} Markdowns={this.props.Markdowns} delete={this.props.delete} />

    ));
  }

}
Todos.propTypes={
  todos: PropTypes.array.isRequired,
  Markdowns: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
}

export default Todos;
