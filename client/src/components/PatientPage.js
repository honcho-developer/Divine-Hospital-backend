import React, {useState} from 'react'
import axios from 'axios'

const PatientPage = ( ) => {
const [doctorStaff, setDoctorStaff] = useState([])
const [id, setId] = useState('')

    const handleChange = (e) =>{
        const id = e.target.value
    setId(id)
    console.log(id)
    }
    

    const handleGetPatientReport = e => {
        e.preventDefault()
        axios.get(`http://localhost:3001/add_doctorsReport/${id}`)
        .then(res =>{ console.log("saved", res)
            setDoctorStaff(res.data)})
        .catch(err => {
            console.log(err)
        })
    } 
    return (
        <div>
            <div className="output" >
                {doctorStaff.map((item, index)=>{
                    return(
                        <div key={index}>
                            <p>Your Id: {item.patient_id}</p>
                            <p>{item.report}</p>
                            <p>{item.prescription}</p>
                            <p>{item.status}</p>
                        </div>
                    )
                })
                    
                }
            </div>
            <label>Phone</label>
                <input name='id' onChange={handleChange} value={id}/>
            <button onClick={handleGetPatientReport}>Get Report</button>
        </div>
    )
}

export default PatientPage