
const Reducer= (state, action) =>{

    if(action.type === "Add_Item"){
        const newPeople= [...state.people, action.payload]
        return {
            
            people:newPeople,
            modalContent:"Item Added",
            modal: true,
        }
    }
    if(action.type === "NO_VALUE"){
        return {
            ...state,
            modalContents:"No Value Added",
            color:"danger",
            modal: true,
        }
    };

    if(action.type === "REMOVE"){
        const newPerson= state.people.filter( (person)=> person.id !== action.payload);
        return {...state.people, people:newPerson}
        
    };

    if(action.type === "CLEAR__ALL"){
        return {
            people:[],
            modalContents:"No Value Added",
            modal: true,
        };
    };

    if( action.type === "CLOSE"){
        return(
            {...state, modal:false}
        )
    }

    return state
}

export default Reducer
