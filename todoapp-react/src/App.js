import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';
import {Provider} from 'react-redux';
import store from './store';

import './App.css';

class App extends Component {

    //Toggle Complete
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    };

    //Delete Todo
    delTodo = (id) => {
        axios.delete('https://jsonplaceholder.typicode.com/todos/' + id)
            .then(res => this.setState({
                todos:
                    [...this.state.todos.filter(todo => todo.id !== id)]
            }));
    };

    render() {

        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <div className="container">
                            <Header/>
                            <Route exact path="/" render={props => (
                                <React.Fragment>
                                    <AddTodo />
                                    {/*<Todos todos={this.state.todos}*/}
                                    {/*       markComplete={this.markComplete}*/}
                                    {/*       delTodo={this.delTodo}/>*/}
                                    <Todos />
                                </React.Fragment>
                            )}/>
                            <Route path="/about" component={About}/>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
