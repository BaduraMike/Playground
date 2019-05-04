import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import {deleteTodo} from "../actions/todoActions";

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };

    onDeleteClick = id => {
        this.props.deleteTodo(id);
    };

    onCompleteClick = id => {
        this.props.markComplete(id);
    };

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type={"checkbox"}
                           onChange={this.onCompleteClick.bind(this, id)}/>
                    {id}{'. '}
                    {title}
                    <button onClick={this.onDeleteClick.bind(this, id)} style={btnStyle}>x
                    </button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
};

const mapStateToProps = state => ({
    todos: state.todos.items,
});

export default connect(
    mapStateToProps,
    {deleteTodo}
)(TodoItem);