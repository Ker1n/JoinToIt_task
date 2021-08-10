const SET_CALENDAR = "SET_CALENDAR";

const initialState = [
  {
    date: "10 08 2021",
    events: [
      {
        id: 1,
        eventName: "Interview in Join.To.IT 1",
        eventTime: "12.30",
        eventNotes: "take my PC with me",
      },
      // {
      //   id: 2,
      //   eventName: "Interview in Join.To.IT 2",
      //   eventTime: "13.30",
      //   eventNotes: "take my PC with me",
      // },
      // {
      //   id: 3,
      //   eventName: "Interview in Join.To.IT 3",
      //   eventTime: "14.30",
      //   eventNotes: "take my PC with me",
      // },
      // {
      //   id: 4,
      //   eventName: "Interview in Join.To.IT 3",
      //   eventTime: "14.30",
      //   eventNotes: "take my PC with me",
      // },
    ],
  },
  {
    date: "12 08 2021",
    events: [
      {
        id: 5,
        eventName: "Interview in Join.To.IT",
        eventTime: "12.30",
        eventNotes: "take my PC with me",
      },
    ],
  },
  {
    date: "14 08 2021",
    events: [
      {
        id: 6,
        eventName: "Interview in Join.To.IT",
        eventTime: "12.30",
        eventNotes: "take my PC with me",
      },
    ],
  },
  {
    date: "15 08 2021",
    events: [
      {
        id: 7,
        eventName: "Interview in Join.To.IT",
        eventTime: "12.30",
        eventNotes: "take my PC with me",
      },
    ],
  },
];

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CALENDAR:
      return {
        ...state,
      };

    default:
      return state;
  }
};
