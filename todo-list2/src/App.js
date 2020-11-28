import React from 'react';
import Todos from './component/Todos';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './component/layout/Header';
import About from './component/pages/About';
import AddTodo from './component/AddTodo';
// import {v4 as uuid} from "uuid";
import axios from 'axios';
class App extends React.Component {
  state = {
    todos: [],
  };
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then((res) => this.setState({ todos: res.data }));
  }

  Markdowns = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  delete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
      );
  };
  AddTodo = (title) => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos?_limit=20', {
        title,
        completed: false,
      })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo inputTodo={this.AddTodo} />
                  <Todos
                    todos={this.state.todos}
                    Markdowns={this.Markdowns}
                    delete={this.delete}
                  />
                </React.Fragment>
              )}
            ></Route>
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
