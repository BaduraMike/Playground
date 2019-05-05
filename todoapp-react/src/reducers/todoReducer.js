import {GET_TODOS, POST_TODO, DELETE_TODO, TOGGLE_TODO} from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                items: action.payload
            };
        case POST_TODO:
            return {
                ...state,
                item: action.payload
            };
        case DELETE_TODO:
            return {
                ...state,
                items: state.items.filter(
                    item => item.id !== action.payload
                )
            };
        case TOGGLE_TODO:
            return {
                ...state,
                items: state.items.map(todo =>
                    todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
                )};
        default:
            return state;
    }
}