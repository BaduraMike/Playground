import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getTodos} from '../actions/todoActions';

class Todos extends Component {
    componentDidMount() {
        this.props.getTodos();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newTodo) {
            this.props.todos.unshift(nextProps.newTodo);
        }
    }

    //Toggle Complete
    markComplete = (id) => {
        console.log(id);
        this.setState({
            todos: this.props.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    };

    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.markComplete}
                      delTodo={this.props.delTodo}/>
        ));
    }
}

//PropTypes
Todos.propTypes = {
    getTodos: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    newTodo: PropTypes.object.isRequired,
    // delTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    todos: state.todos.items,
    newTodo: state.todos.item
});

export default connect(mapStateToProps, {getTodos})(Todos);