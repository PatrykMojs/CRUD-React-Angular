import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import PersonItem from "./PersonItem";

interface Person
{
    id: number,
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    origin: string,
}

const PersonList = () =>{
    const [people, setPeople] = useState<Person[]>([])

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await fetch('http://localhost:5147/GetPeople')
                const data: Person[] = await response.json()
                setPeople(data)
            }catch(err){
                console.error(err)
            }
        }

        fetchData()
    },[])

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>DateOfBirth</th>
                        <th>Origin</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person)=>(
                        <PersonItem key={person.id} {...person}/>
                    ))}
                </tbody>
            </table>

            <Link to="/add">Dodaj</Link>
            <Link to="/update">Edytuj</Link>
            <Link to="/delete">Usuń</Link>
        </>
    )
}

export default PersonList