const defaultState = {
  tabs: [
    { id: 'cheap', label: 'Самый дешевый', active: true },
    { id: 'fast', label: 'Самый быстрый', active: false },
    { id: 'optimal', label: 'Оптимальный', active: false },
  ],
}
const SET_TAB = 'SET_TAB'

const tabsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TAB: {
      const newTabs = state.tabs.map((item) => ({ ...item, active: item.id === action.payload }))
      return {
        ...state,
        tabs: newTabs,
      }
    }
    default:
      return state
  }
}

export default tabsReducer
