const initialState = {
    name: '',
    age: 0,
    cities: [],
}

function sampleReducer(state = initialState, action) {
    switch (action.type) {
        case "SAMPLE":
            return { ...state, name: action.payload };
       
        default:
            return state;
    }
}

export default sampleReducer;