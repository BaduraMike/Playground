import {GET_TODOS, POST_TODO} from './types';
import axios from "axios";

//ES6 SYNTAX
export const getTodos = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15')
        .then(response =>
            dispatch({
                type: GET_TODOS,
                payload: response.data
            })
        );
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
