import {DELETE_TODO, GET_TODOS, POST_TODO, TOGGLE_TODO} from './types';
import axios from "axios";

//ES6 SYNTAX
export const getTodos = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit')
        .then(response =>
            dispatch({
                type: GET_TODOS,
                payload: response.data
            })
        );
};

export const postTodo = (todo) => dispatch => {
    axios.post('https://jsonplaceholder.typicode.com/todos', todo)
        .then(post =>
            dispatch({
                type: POST_TODO,
                payload: post.data,
            })
        );
};

//Delete Todo
export const deleteTodo = (id) => dispatch => {
    axios.delete('https://jsonplaceholder.typicode.com/todos/' + id);
    dispatch({
        type: DELETE_TODO,
        payload: id,
    });
};

export const toggleTodo = (id) => dispatch => {
    dispatch({
        type: TOGGLE_TODO,
        payload: id,
    });
};

// preES6 SYNTAX
// export function getTodos() {
//     return function (dispatch) {
//         axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
//             .then(response => dispatch({
//                 type: GET_TODOS,
//                 payload: response.data
//             }))
//     }
// }
