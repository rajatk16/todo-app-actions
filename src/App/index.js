import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './style.css';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import Message from '../components/Message';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <h1>A Todo App Using Redux-Actions</h1>
        </div>
        <Router>
          <div className="Todo-App">
            <Message />
            <Loader />
            <TodoForm />
            <Route
              path="/:filter?"
              render={({match}) => <TodoList filter={match.params.filter} />}
            />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
