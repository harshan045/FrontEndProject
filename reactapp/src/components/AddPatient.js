import React,{useContext,useState} from 'react'
import{useHistory} from 'react-router-dom'
import{PatientContext} from '../context/PatientContext';
import '../App.css'
function AddPatient() {
    const {addPatient}=useContext(PatientContext)
    const history=useHistory()

    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    
    const handleSubmit=()=>{
        addPatient({
            id:Date.now().toString(),
            name,
            age,
            roomStatus:'Available'
        });
        history.push('/')
    }
  return (
    <div className='add-container'>
      <h2 className='add-title'>Add New Patient</h2>
      <div className='add-card'>
        <input className='add-input' placeholder='Patient Name' value={name} onChange={e=>setName(e.target.value)}/>
        <input className='add-input' placeholder='Patient Age' value={age} onChange={e=>setAge(e.target.value)}/>
        <button className='add-btn' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default AddPatient