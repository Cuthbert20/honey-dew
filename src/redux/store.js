import { createStore } from 'redux'

function reducer(state) {
    return state;
}

let initialState = {
    toDos: ['Dishes', 'Laundry', 'Fence', 'Spray for Bugs', 'Build Cabin']
}

export default createStore(reducer, initialState)