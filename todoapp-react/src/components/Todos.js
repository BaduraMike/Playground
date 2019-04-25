import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getTodos} from '../actions/todoActions';

class Todos extends Component {

    componentDidMount() {
        this.props.getTodos();
    }

    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}
                      delTodo={this.props.delTodo}/>
        ));
    }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    // markComplete: PropTypes.func.isRequired,
    // delTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    todos: state.todos.items
});

export default connect(mapStateToProps, {getTodos})(Todos);