import React ,{useContext} from 'react'
import{useParams,Link} from 'react-router-dom'
import { PatientContext } from '../context/PatientContext'
import '../App.css'
function PatientDetails(){
    const {id}=useParams()
    const {patients}=useContext(PatientContext);

    const patient=patients.find(p=>p.id===id);
    if(!patient)return <h1>Patient List</h1>;

  return (
    <div className='details-container'>
      <h2 className='details-title'>Patient Details</h2>
      <div className="details-card">
        <h3 className='patient-detail-name'>{patient.name}</h3>
        <p>Id:{patient.id}</p>
        <p>Age: {patient.age}</p>
        <p>Room Status: {patient.roomStatus}</p>

        <div className='btn-group'>
        <Link to={`/room/${patient.id}`}>
            <button className='primary-btn'>Update Room Status</button>
        </Link>
        <Link to={"/"}>
            <button className='secondary-btn'>Back to Patient</button>
        </Link>
        </div>
        </div>
    </div>
  )
}

export default PatientDetails