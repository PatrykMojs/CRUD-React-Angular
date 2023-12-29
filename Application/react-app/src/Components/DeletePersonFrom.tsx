import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const DeletePersonForm = () =>{
    const [personId, setPersonId] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault()

        try{
            const response = await fetch(`http://localhost:5147/PersonDelete/${personId}`,{
                method: "DELETE",
            })

            if(response.ok){
                navigate('/')
            }
        }catch(err){
            console.error(err)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Id:
                <input 
                    type="text" 
                    value={personId}
                    onChange={(e)=>setPersonId(e.target.value)}
                />
            </label>
            <button type="submit">Usuń</button>
        </form>
    )
}

export default DeletePersonForm