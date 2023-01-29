const defaultState = {
  selectAll: false,
  filters: [
    { id: 0, label: 'Без пересадок', checked: true },
    { id: 1, label: '1 пересадка', checked: false },
    { id: 2, label: '2 пересадки', checked: false },
    { id: 3, label: '3 пересадки', checked: false },
  ],
}

const TOGGLE_FILTERS = 'TOGGLE_FILTERS'
const TOGGLE_ALL_FILTERS = 'TOGGLE_ALL_FILTERS'

const filtersReducer = (state = defaultState, action) => {
  let newFilters
  let allChecked
  switch (action.type) {
    case TOGGLE_FILTERS:
      newFilters = state.filters.map((item) =>
        item.id === action.payload.id ? { ...item, checked: action.payload.isChecked } : item
      )
      allChecked = newFilters.every((item) => item.checked)
      return {
        ...state,
        filters: newFilters,
        selectAll: allChecked,
      }

    case TOGGLE_ALL_FILTERS:
      allChecked = action.payload
      newFilters = state.filters.map((item) => ({ ...item, checked: action.payload }))
      return {
        ...state,
        filters: newFilters,
        selectAll: allChecked,
      }
    default:
      return state
  }
}

export default filtersReducer
