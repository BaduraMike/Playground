import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {postTodo} from "../actions/todoActions";

class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            completed: false,
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onSubmit = (e) => {
        e.preventDefault();

        const todo = {
            title: this.state.title,
            completed: this.state.completed,
        };

        this.props.postTodo(todo);
        this.setState({title: ''});
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input
                    type="text"
                    name="title"
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add Todo"
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

//PropTypes
AddTodo.propTypes = {
    postTodo: PropTypes.func.isRequired,
};

export default connect(null, {postTodo})(AddTodo);