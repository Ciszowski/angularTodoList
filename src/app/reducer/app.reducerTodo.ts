import { Todo } from './app.state';

const action = ['TODO', 'CHANGE_POS','DELETE','ADDNEW']

const initialState: Todo = {
    id: 0,
    todo: [{
        id: 0,
        title: '',
        description: '',
        done : false

    }]
}


export function ReducerTodo(state = initialState, action) {
    switch (action.type){
        case "TODO":
            return {
                ...state,
                todo: action.payload
            }
        case "CHANGE_POS":{
            return{
                ...state,
                todo: action.payload,
            }
        }
        // case "CHANGE_STATE":{
        //     return{
        //         ...state, 
        //        todo: state.todo[action.payload].done = true
        //     }
        // }
        default:
            return state;

    }

}