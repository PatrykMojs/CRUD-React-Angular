import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

interface Person
{
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    origin: string,
}

const AddPersonForm = () =>{
    const [person, setPerson] = useState<Person>({
        firstName: '',
        lastName: '',
        dateOfBirth: new Date(),
        origin: '',
    })

    const navigate = useNavigate()

    const handleSubmit = async(e: React.FormEvent) =>{
        e.preventDefault()

        const response = await fetch('http://localhost:5147/PersonAdd',{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(person)
        })

        if(response.ok){
            navigate('/')
        }
    }

    return(
        <form onSubmit={handleSubmit}>

            <input 
                type="text" 
                value={person.firstName}
                onChange={(e)=>setPerson({...person, firstName: e.target.value})}
                placeholder="Imię"
            />

            <input 
                type="text" 
                value={person.lastName}
                onChange={(e)=>setPerson({...person, lastName: e.target.value})}
                placeholder="Nazwisko"
            />

            <input 
                type="text" 
                value={person.dateOfBirth.toISOString().split("T")[0]}
                onChange={(e)=>setPerson({...person, dateOfBirth: new Date(e.target.value)})}
                placeholder="Data urodzenia"
            />

            <input 
                type="text" 
                value={person.origin}
                onChange={(e)=>setPerson({...person, origin: e.target.value})}
                placeholder="Pochodzenie"
            />

            <button type="submit">Dodaj</button>
        </form>
    )
}

export default AddPersonForm