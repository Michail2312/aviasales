const defaultState = {
  tickets: [],
  stop: false,
  error: false,
  connection: true,
  showTickets: 5,
}

const GET_TICKETS = 'GET_TICKETS'
const SET_STOP = 'SET_STOP'
const SET_ERROR = 'SET_ERROR'
const SET_CONNECTION = 'SET_CONNECTION'
const SHOW_MORE_TICKETS = 'SHOW_MORE_TICKETS'

const ticketsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
      }
    case SET_STOP:
      return {
        ...state,
        stop: action.payload,
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case SET_CONNECTION: {
      return {
        ...state,
        connection: action.payload,
      }
    }
    case SHOW_MORE_TICKETS:
      return {
        ...state,
        showTickets: action.payload,
      }
    default:
      return state
  }
}

export default ticketsReducer
