import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { toggleAllFilters, toggleFilters } from '../../store/actions/actions'
import { selectFilters } from '../../utilities/utilities'

import filtersStyl from './filters.module.scss'

export default function Filters() {
  const dispatch = useDispatch()
  const { filters, selectAll } = useSelector(selectFilters)

  const onAllFiltersCheck = (payload) => dispatch(toggleAllFilters(payload))
  const onFiltersCheck = (...payload) => dispatch(toggleFilters(...payload))

  const checkAll = (
    <li>
      <label htmlFor="all" className={filtersStyl.label}>
        <input
          id="all"
          className={filtersStyl.input}
          type="checkbox"
          checked={selectAll}
          onChange={(e) => onAllFiltersCheck(e.target.checked)}
        />
        Все
      </label>
    </li>
  )

  const filtersCheck = filters.map((item) => {
    const { label, id, checked } = item
    return (
      <li key={uuidv4()}>
        <label htmlFor={id} className={filtersStyl.label}>
          <input
            id={id}
            className={filtersStyl.input}
            type="checkbox"
            checked={checked}
            onChange={(e) => onFiltersCheck(id, e.target.checked)}
          />
          {label}
        </label>
      </li>
    )
  })

  return (
    <aside className={filtersStyl.wrapper}>
      <h2 className={filtersStyl.title}>количетво пересадок</h2>
      <ul className={filtersStyl.list}>
        {checkAll}
        {filtersCheck}
      </ul>
    </aside>
  )
}
