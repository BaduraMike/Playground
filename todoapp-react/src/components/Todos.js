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

    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.onCompleteClick}
                      deleteTodo={this.props.deleteTodo}/>
        ));
    }
}

//PropTypes
Todos.propTypes = {
    getTodos: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    newTodo: PropTypes.object.isRequired,
    // deleteTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    todos: state.todos.items,
    newTodo: state.todos.item
});

export default connect(
    mapStateToProps,
    {getTodos}
)(Todos);