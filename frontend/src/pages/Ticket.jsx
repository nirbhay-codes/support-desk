import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getTicket, closeTicket } from '../features/tickets/ticketSlice'
import { getNotes, createNote } from '../features/notes/noteSlice'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import NoteItem from '../components/NoteItem'
import Modal from 'react-modal'
import { FaPlus } from 'react-icons/fa'

// Setting top and left to '50%' positions the top-left corner of the modal at a point that is 50% down from the top of the viewport and 50% across from the left of the viewport, respectively. This means the modal is initially positioned such that its center is at the center of the viewport horizontally and vertically.
// However, simply setting top and left to '50%' doesn't fully center the modal, as it would position the top-left corner at the center, not the center of the modal itself. This is why the transform: translate(-50%, -50%); is used. It moves the modal up and to the left by 50% of its own height and width, effectively centering the modal both vertically and horizontally within the viewport.
const customStyle = {
  content: {
    width: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
  },
}

Modal.setAppElement('#root')

const Ticket = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [noteText, setNoteText] = useState('')
  const { ticket } = useSelector((state) => state.tickets)
  const { notes } = useSelector((state) => state.notes)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { ticketId } = useParams()

  useEffect(() => {
    dispatch(getTicket(ticketId)).unwrap().catch(toast.error)
    dispatch(getNotes(ticketId)).unwrap().catch(toast.error)
  }, [ticketId, dispatch])

  // Close ticket
  const onTicketClose = () => {
    // !NOTE: we can unwrap our AsyncThunkACtion here so no need for isError and
    // !isSuccess state
    dispatch(closeTicket(ticketId))
      .unwrap()
      .then(() => {
        toast.success('Ticket Closed')
        navigate('/tickets')
      })
      .catch(toast.error)
  }

  // Create note submit
  const onNoteSubmit = (e) => {
    // !NOTE: we can unwrap our AsyncThunkACtion here so no need for isError and
    // !isSuccess state
    e.preventDefault()
    dispatch(createNote({ noteText, ticketId }))
      .unwrap()
      .then(() => {
        setNoteText('')
        closeModal()
      })
      .catch(toast.error)
  }
  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  if (!ticket) {
    return <Spinner />
  }

  return (
    <div className='ticket-page'>
      <header className='ticket-header'>
        <BackButton />
        <h2>
          Ticket ID: {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>
          Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-IN')}
        </h3>
        <h3>Product: {ticket.product}</h3>
        <hr />
        <div className='ticket-desc'>
          <h3>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
        <h2>Notes</h2>
      </header>

      {ticket.status !== 'closed' && (
        <button onClick={openModal} className='btn'>
          <FaPlus /> Add Note
        </button>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyle}
        contentLabel='Add Note'
      >
        <h2>Add Note</h2>
        <button className='btn-close' onClick={closeModal}>
          X
        </button>
        <form onSubmit={onNoteSubmit}>
          <div className='form-group'>
            <textarea
              name='noteText'
              id='noteText'
              className='form-control'
              placeholder='Note text'
              value={noteText}
              onChange={(e) => {
                setNoteText(e.target.value)
              }}
            ></textarea>
          </div>
          <div className='form-group'>
            <button className='btn' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </Modal>
      {notes ? (
        notes.map((note) => <NoteItem key={note._id} note={note} />)
      ) : (
        <Spinner />
      )}

      {ticket.status !== 'closed' && (
        <button onClick={onTicketClose} className='btn btn-block btn-danger'>
          Close Ticket
        </button>
      )}
    </div>
  )
}

export default Ticket
