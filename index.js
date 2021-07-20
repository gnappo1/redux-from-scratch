addQuarter.addEventListener('click', () => {
    store.dispatch(add(25))
    total.innerText = store.getState()
})

addDime.addEventListener('click', () => {
    store.dispatch(add(10))
    total.innerText = store.getState()

})

addNickel.addEventListener('click', () => {
    store.dispatch(add(5))
    total.innerText = store.getState()
})

addPenny.addEventListener('click', () => {
    store.dispatch(add(1))
    total.innerText = store.getState()
})

// Actions

const add = (quantity) => {
    return {
        type: "ADD",
        payload: quantity
    }
}

const subtract = (quantity) => {
    return {
        type: "SUBTRACT",
        payload: quantity
    }
}

// THIS IS A PURE FUNCTION
function countReducer(state = 0, action){
    switch(action.type) {
        case "ADD":
            return state + action.payload
        case "SUBTRACT":
            return state - action.payload
        default:
            return state
    }
}

function createStore(reducer){
    // we will keep track of state
    let state 
    // we will have the ability to update state
    return {
        getState: () => state,
        dispatch: (action) => {
            state = reducer(state, action)
        }
    }
}

//create the store
store = createStore(countReducer)
//dispatch an initial action
store.dispatch({type: "@@INIT"})