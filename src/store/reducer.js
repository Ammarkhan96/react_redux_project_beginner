const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {

    switch(action.type){
        case 'ADD_PERSON':
            const newPerson = {
                id: new Date().getTime(),
                age: Math.floor(Math.random() * 40),
                name: action.name
            };
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            };
        
        case 'DELETE_PERSON':
            const updatedPersons = state.persons.filter( person => {
                return person.id !== action.personId;
            });
            
            return {
                ...state,
                persons: updatedPersons
            };
    }
    return state;
}

export default reducer;