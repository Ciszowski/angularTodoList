import { Todo } from './app.state';


const initialState: Todo = {
    todo: [{
        id: null,
        title: null,
        description: null,
        done: null
        }]
}

export function ReducerTodo(state = initialState, action) {
    switch (action.type) {
        case "TODO":
            return {
                ...state,
                todo: action.payload
            }
        case "CHANGE_POS": {
            return {
                ...state,
                todo: action.payload,
            }
        }
        case "EDIT_DESCRIPTION": {
            return {
                ...state.todo,
                todo: state.todo.map((el, idx) => {
                    if (el.id === action.payload.id) {
                        return {
                            ...el,
                            description: action.payload.description
                        }
                    }
                    return el
                })
            }
        }
        case "ADD_TASK":{
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        }
        default:
            return state;
    }
}