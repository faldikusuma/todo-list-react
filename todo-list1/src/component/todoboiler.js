import Header from './component/layout/Header';
import Maincontent from './component/layout/Maincontent';

import todoData from './_json/data';
import './App.css';

class App extends React.Component  {
  constructor(){
    super()
      this.state ={
        todos:todoData
      
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (id) =>{
    
  //   this.setState({todos:this.state.todos.map((todo)=>{
  //     if (todo.id === id) {
  //       todo.completed= !todo.completed;
  //       console.log(todo);
  //     }
  //     return todo;
  //   })
  // })
   this.setState(prevState=>{
     console.log(prevState);
       const updatestate = prevState.todos.map(todo=>{
         if (todo.id === id) {
           todo.completed = !todo.completed
         }
         return todo
       })
       return {
        todos: updatestate
       }
   })
    
  }
  render(){
      const todoList =  this.state.todos.map(todo => <Maincontent key={todo.id} todo={todo} handleChange={this.handleChange}/>)
    return (
      <div className="todo-list">
        <Header />
       {todoList}
       
       
      </div>
    
    );
  }

}


export default App;