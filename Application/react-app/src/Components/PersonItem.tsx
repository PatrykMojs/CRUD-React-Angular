import React from "react";

interface PersonItemProps
{
    id: number,
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    origin: string,
}

const PersonItem = ( props : PersonItemProps ) =>{
    const data = new Date(props.dateOfBirth)

    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{data.toLocaleDateString()}</td>
            <td>{props.origin}</td>
        </tr>
    )
}

export default PersonItem