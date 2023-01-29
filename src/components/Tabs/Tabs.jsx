import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'

import { setTab } from '../../store/actions/actions'
import { selectTabs } from '../../utilities/utilities'

import tabsStyl from './tabs.module.scss'

export default function Tabs() {
  const dispatch = useDispatch()
  const { tabs } = useSelector(selectTabs)

  const onTabClick = (...args) => dispatch(setTab(...args))

  const tabz = tabs.map((item) => {
    const { id, label, active } = item

    const tabClass = classNames({
      [tabsStyl.tab]: true,
      [tabsStyl['tab--active']]: active,
    })

    return (
      <button onClick={() => onTabClick(id)} key={id} className={tabClass} type="button">
        {label}
      </button>
    )
  })

  return <div className={tabsStyl.tabs}>{tabz}</div>
}
