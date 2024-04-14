import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTickets } from '../features/tickets/ticketSlice'
import BackButton from '../components/BackButton'
import TicketItem from '../components/TicketItem'
import Spinner from '../components/Spinner'

function Tickets() {
  const { tickets, isLoading } = useSelector((state) => state.tickets)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <BackButton />
      <div className='tickets'>
        <div className='ticket-headings'>
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div></div>
        </div>
        {tickets.map((ticket) => (
          <TicketItem key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </>
  )
}

export default Tickets
