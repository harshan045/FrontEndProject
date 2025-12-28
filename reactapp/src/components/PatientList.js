import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { PatientContext } from '../context/PatientContext'
import '../App.css'
function PatientList() {
    const {patients}=useContext(PatientContext)
  return (
    <div className='card'>
        <h1>Patient List</h1>
        {patients.length===0 ?(
            <p className='EmptyText'>No Patients Yet</p>
        ):(
        <ul className='patient-ul'>
        {patients.map(patient=>(
            <li key={patient.id} className='patient-item'>
                <Link className='view-btn' to ={`/patient/${patient.id}`}>
                <span className='patient-id'>ID:{patient.id}</span>
                <span className='separator'>|</span>
                <span className='patient-name'>{patient.name}</span>
                </Link>
            </li>
        ))}
        </ul>
        )}
    </div>
  )
}

export default PatientList