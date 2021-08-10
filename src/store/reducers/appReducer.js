const SET_CURRENT_DAY = "SET_CURRENT_DAY";
const INCREMENT_MONTH = "INCREMENT_MONTH";
const DECREMENT_MONTH = "DECREMENT_MONTH";

const initialState = {
  year: 0,
  month: 0,
  day: 0,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_DAY:
      return {
        ...state,
        year: action.payload.year,
        month: action.payload.month,
        day: action.payload.day,
      };
    case INCREMENT_MONTH:
      if (state.month >= 11) {
        return {
          ...state,
          year: state.year + 1,
          month: 0,
        };
      }
      return {
        ...state,
        month: state.month + 1,
      };
    case DECREMENT_MONTH:
      if (state.month <= 0) {
        return {
          ...state,
            year: state.year - 1,
            month: 11,
        };
      }
      return {
        ...state,
        month: state.month - 1,
      };

    default:
      return state;
  }
};

export const setCurrentDay = (payload) => ({ type: SET_CURRENT_DAY, payload });
export const incrementMonth = () => ({ type: INCREMENT_MONTH });
export const decrementMonth = () => ({ type: DECREMENT_MONTH });
