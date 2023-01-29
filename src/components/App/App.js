import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'

import Filters from '../Filters/Filters'
import Tabs from '../Tabs/Tabs'
import TicketsList from '../TicketsList/TicketsList'
import ShowMore from '../ShowMore/ShowMore'
import { fetchData } from '../../store/actions/ticketsActions'
import { selectLoading, selectTickets } from '../../utilities/utilities'

import app from './app.module.scss'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  const { tickets } = useSelector(selectTickets)
  const loading = useSelector(selectLoading)
  const progress = tickets.length / 100

  const logo = './plane-logo.png'
  return (
    <div className={app.wrapper}>
      <header className={app.header}>
        <img src={logo} className={app.logo} alt="logo" />
      </header>
      <main className={app.main}>
        <Filters />
        <section className={app.content}>
          <Tabs />
          {loading ? (
            <LoadingBar
              progress={progress}
              shadow={false}
              height={10}
              color="#2196f3"
              containerStyle={{ position: 'relative' }}
              className={app.loader}
            />
          ) : null}
          <TicketsList />
          <ShowMore />
        </section>
      </main>
    </div>
  )
}
