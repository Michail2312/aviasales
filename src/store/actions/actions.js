export const setTab = (id) => ({ type: 'SET_TAB', payload: id })

export const toggleFilters = (id, isChecked) => ({ type: 'TOGGLE_FILTERS', payload: { id, isChecked } })

export const toggleAllFilters = (isChecked) => ({ type: 'TOGGLE_ALL_FILTERS', payload: isChecked })

export const showMoreTickets = (showTickets) => ({ type: 'SHOW_MORE_TICKETS', payload: showTickets })
