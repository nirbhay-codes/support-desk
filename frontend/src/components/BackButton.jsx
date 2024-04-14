import { useNavigate } from 'react-router-dom'
import { FaArrowCircleLeft } from 'react-icons/fa'

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <button  className='btn btn-reverse btn-back' onClick={() => navigate(-1)}>
      <FaArrowCircleLeft /> Back
    </button>
  )
}

export default BackButton
