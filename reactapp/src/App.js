import React from 'react'
import './App.css'
import {Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import AddPatient from './components/AddPatient'
import PatientList from './components/PatientList'
import PatientDetails from './components/PatientDetails'
import RoomStatus from './components/RoomStatus'
function App() {
  return (
    <div className='app-container'>
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path="/" component={PatientList}/>
            <Route path="/add" component={AddPatient}/>
            <Route path="/patient/:id" component={PatientDetails}/>
            <Route path="/room/:id" component={RoomStatus}/>
          </Switch>
        </div>
    </div>
  )
}

export default App