import React from "react"
import { useState } from 'react';
export default function Osoba({name,surname,age,onNameChange,onDelete,index}){
    const [newName,setNewName] = useState("");
    const [newSurname,setNewSurname] = useState("");
    const [newAge,setNewAge] = useState(""); 
    
    const handleFormSubmit = (e)=>{
    
        e.preventDefault();
        
        onNameChange(newName,newSurname,newAge,index);
        setNewName("");
        setNewSurname("");
        setNewAge("");
        
         

    };
    const handleDelete = () => {
        onDelete(index);
    };
    return (
        <>
            <li className="name">{name} {surname} {age}</li>
            <form onSubmit={handleFormSubmit}>
                <label>Change name <input onChange={(e)=>{setNewName(e.target.value)}} value={newName}/></label><br/>
                <label>Change surname <input onChange={(e)=>{setNewSurname(e.target.value)}} value={newSurname}/></label><br/>
                <label>Change age <input type="number" onChange={(e)=>{setNewAge(e.target.value)}} value={newAge}/></label><br/>
                <button type="submit">Submit</button><br/>
            </form>
            <button onClick={handleDelete}>Delete User</button>
        </>
    )
};