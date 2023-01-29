import { add, format } from 'date-fns'
// Получение информации для сегмента из билета

export const getSegmentInfo = (ticket) => {
  const { date, duration, origin, destination, stops } = ticket

  const start = format(new Date(date), 'HH:mm')
  const landing = format(add(new Date(date), { minutes: duration }), 'HH:mm')

  const hours = Math.floor(duration / 60)
  const minutes = duration - hours * 60

  const addZero = (num) => (num < 10 ? `0${num}` : `${num}`)

  let stopsCount
  if (stops.length < 1) stopsCount = 'Без пересадок'
  if (stops.length === 1) stopsCount = '1 пересадка'
  if (stops.length > 1) stopsCount = `${stops.length} пересадки`

  return {
    stopsCount,
    stops: stops.join(', '),
    cities: `${origin} – ${destination}`,
    time: `${start} – ${landing}`,
    duration: `${addZero(hours)}ч ${addZero(minutes)}м`,
  }
}

// Фильтрация билетов

export const getFilteredTickets = (checkedFilters, tickets) => {
  const ids = checkedFilters.map((ticket) => ticket.id)
  if (ids.length > 0) {
    return tickets.filter((ticket) => {
      const stops = ticket.segments.map((segment) => segment.stops)
      return ids.includes(stops[0].length) || ids.includes(stops[1].length)
    })
  }
  return null
}

// Сортировка билетов

const sortByPrice = (ticket) => ticket.sort((a, b) => a.price - b.price)

const sortByTime = (ticket) =>
  ticket.sort((a, b) => {
    const A = a.segments[0].duration + a.segments[1].duration
    const B = b.segments[0].duration + b.segments[1].duration
    return A - B
  })

export const getSortedTickets = (activeTabb, tickets) => {
  if (tickets) {
    switch (activeTabb.id) {
      case 'cheap':
        return sortByPrice(tickets)
      case 'fast':
        return sortByTime(tickets)
      case 'optimal':
        return sortByTime(sortByPrice(tickets))
      default:
        return tickets
    }
  }
  return tickets
}

export const selectFilters = (state) => state.filters
export const selectTabs = (state) => state.tabs
export const selectTickets = (state) => state.tickets
export const selectLoading = (state) => !state.tickets.stop
