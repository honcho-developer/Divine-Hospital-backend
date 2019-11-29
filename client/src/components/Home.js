import React, {useState} from 'react'

import axios from 'axios'
import '../App.css'



const Home = () => {

    const [patient, setPatient] = useState([{
        first: ' ',
        last: '',
        address: '',
        state: '',
        next: '',
        phone: null,
        health: ''
    }])

    const handleChange = (e) =>{
        const {name, value} = e.target
        setPatient({...patient, [name]: value})
    console.log(patient)
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:3001/add_form", {
        first: patient.first,
        last: patient.last,
        address: patient.address,
        state: patient.state,
        next: patient.next,
        phone: patient.phone,
        health: patient.health
        })
        .then(res => console.log("saved", res))
        .catch(err => {
            console.log(err)
        })
    } 

            return(
                <main>
                   
                    <div className="cad">
                        <div className="card">
                            <form >
                                <label>First Name: 
                                     <input type="text" placeholder="Write your First Name" name='first'  value={patient.first} onChange={handleChange}/>   
                                </label> <br/>
                                <label>Last Name: 
                                     <input type="text" placeholder="Write your Last Name" name='last' value={patient.last} onChange={handleChange}/>   
                                </label> <br/>
                                <label>Address: 
                                     <input type="text" placeholder="Write your Home Address" name='address' value={patient.address} onChange={handleChange}/>   
                                </label> <br/>
                                <label>State: 
                                     <input type="text" placeholder="State of Origin" name='state' value={patient.state} onChange={handleChange}/>   
                                </label> <br/>
                                <label>Next of Kin: 
                                     <input type="text" placeholder="Write Name of your next kin" name='next' value={patient.next} onChange={handleChange}/>   
                                </label> <br/>
                                <label>Phone Number: 
                                     <input type="number"  name='phone' value={patient.phone} onChange={handleChange}/>   
                                </label> 
                                <label>Health Status : 
                                     <input type="text"  name='health' value={patient.health} onChange={handleChange}/>   
                                </label> 
                                <button onClick={handleSubmit}>Submit</button>
                            </form>
                        </div>
                        
                    </div>
                </main>
            )
        
}

export default Home