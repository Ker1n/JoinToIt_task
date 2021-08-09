const SET_CALENDAR = "SET_CALENDAR";


const initialState = {
    some: 'sdsd'
}


export const calendarReducer = (state=initialState, action) =>  { 
    switch (action.type) {
        case SET_CALENDAR:
            return { 
                ...state
            }
            
    
        default: return state
           
    }
}