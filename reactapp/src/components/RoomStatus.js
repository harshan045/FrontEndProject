import React,{useContext,useEffect,useState} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import {PatientContext} from '../context/PatientContext'
import '../App.css'

function RoomStatus(){
  const{id}=useParams();
  const history=useHistory();
  const {patients,updateRoomStatus}=useContext(PatientContext);

  const patient=patients.find(p=>p.id===id)
  const [status,setStatus]=useState('Available');
  useEffect(()=>{
    if(patient){
      setStatus(patient.roomStatus)
    }
  },[patient]);

  if(!patient)return <p>Loading...</p>;

  const handleUpdate=()=>{
    updateRoomStatus(id,status);
    history.push(`/patient/${id}`);
  }
  
  return (
    <div className='room-card'>
      <h2 className='room-title'>{patient.name}</h2>
      <label className='room-label'>Room Status</label>
      <select className="room-select" value={status} onChange={e=>setStatus(e.target.value)}>
        <option value='Available'>Available</option>
        <option value='Occupied'>Occupied</option>
      </select>
      <button className="room-btn" onClick={handleUpdate}>Update Status</button>
    </div>
  )
}

export default RoomStatus