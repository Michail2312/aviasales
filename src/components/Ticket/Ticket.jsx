import { v4 as uuidv4 } from 'uuid'

import { getSegmentInfo } from '../../utilities/utilities'

import ticketStyl from './ticket.module.scss'

export default function Ticket({ item }) {
  const { price, carrier, segments } = item

  const ticketPrice = `${price.toLocaleString('ru')} ₽`

  const aviaCompany = `https://pics.avs.io/220/76/${carrier}.png`

  const ticketContent = segments.map((segment) => {
    const segmentInfo = getSegmentInfo(segment)
    return (
      <li key={uuidv4()} className={ticketStyl.row}>
        <div className={ticketStyl.col}>
          <div className={ticketStyl.label}>{segmentInfo.cities}</div>
          <div className={ticketStyl.text}>{segmentInfo.time}</div>
        </div>
        <div className={ticketStyl.col}>
          <div className={ticketStyl.label}>В пути</div>
          <div className={ticketStyl.text}>{segmentInfo.duration}</div>
        </div>
        <div className={ticketStyl.col}>
          <div className={ticketStyl.label}>{segmentInfo.stopsCount}</div>
          <div className={ticketStyl.text}>{segmentInfo.stops}</div>
        </div>
      </li>
    )
  })

  return (
    <li className={ticketStyl.item}>
      <div className={ticketStyl.header}>
        <div className={ticketStyl.price}>{ticketPrice}</div>
        <img src={aviaCompany} alt="Avia company" className={ticketStyl.logo} />
      </div>
      <ul className={ticketStyl.body}>{ticketContent}</ul>
    </li>
  )
}
