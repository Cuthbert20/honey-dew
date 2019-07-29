const ADD_TODO = 'todos/ADD_TODO';
const REMOVE_TODO = 'todos/REMOVE_CHORE';

//THINGS TO LOOK UP
//switch() action spread operator

remember state looks like this

// var state = {
//     todos: toDos: ['Dishes', 'Laundry', 'Fence', 'Spray for Bugs', 'Build Cabin']
// }

export default function reducer(state, action) {
    switch(action.type){
        case ADD_TODO:
            let newState = {};
            let newTodo = action.payload;
            let newTodos = [...state.todos,newTodo]

            return {
                todos: newTodos
            }
            case REMOVE_TODO:
                let targetTodo = action.payload;
                let newState = {}
                let newTodos = [...state.todos]

                newTodos.splice(newTodos.indexOf(targetTodo), 1);

                return {
                    todos: newTodos
                }

                default:
                    return state
    }
}