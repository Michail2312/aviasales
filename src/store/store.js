import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import ticketsReducer from './ticketsReducer'
import tabsReducer from './tabsReducer'
import filtersReducer from './filtersReducer'

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  tabs: tabsReducer,
  filters: filtersReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
