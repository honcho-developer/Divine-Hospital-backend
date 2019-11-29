import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

import axios from 'axios'
const Doctor = ( ) => {
const [doctorStaff, setDoctorStaff] = useState([])

    const handleChange = (e) =>{
        const {name, value} = e.target
        setDoctorStaff({...doctorStaff, [name]: value})
    console.log(doctorStaff)
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:3001/add_doctorsReport", {
        report: doctorStaff.report,
        status: doctorStaff.status,
        prescription: doctorStaff.prescription,
        patient_id: doctorStaff.patient_id
        
        })
        .then(res => console.log("saved", res))
        .catch(err => {
            console.log(err)
        })
    } 
    return (
        <div>
            <form>
                    <label> Report: 
                        <input type="text" placeholder=""  value={doctorStaff.report} name='report'  onChange={handleChange}/>   
                    </label> <br/>
                    <label>Status: 
                        <input type="text" placeholder="" value={doctorStaff.status} name='status'  onChange={handleChange}/>   
                    </label> <br/>
                    <label> Prescription:
                        <input type="text" placeholder="" value={doctorStaff.prescription} name='prescription'  onChange={handleChange}/>   
                     </label> <br/>
                     <label> Patient ID:
                        <input type="number" placeholder="" value={doctorStaff.patient_id} name='patient_id'  onChange={handleChange}/>   
                     </label> <br/>

                     <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Doctor