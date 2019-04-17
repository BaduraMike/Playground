import React, {Component} from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Learn React',
                completed: false
            },
            {
                id: 2,
                title: 'Eat',
                completed: true
            },
            {
                id: 3,
                title: 'Sleep',
                completed: false
            },
        ]
    }
    render() {
        return (
            <div className="App">
                <h1>ToDoApp</h1>
                <Todos todos={this.state.todos} />
            </div>
        );
    }
}

export default App;
