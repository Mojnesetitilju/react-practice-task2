import { useState } from "react";
export default function NovaOsoba({onNewUserSubmit}){
    const [newPersonName , setNewPersonName] = useState ("");
    const [newPersonSurname , setNewPersonSurname] = useState ("");
    const [newPersonAge , setNewPersonAge] = useState ("");
    const handleNewPersonSubmit = (e)=> {
        e.preventDefault();
        onNewUserSubmit(newPersonName, newPersonSurname, newPersonAge);
        setNewPersonName("");
        setNewPersonSurname("");
        setNewPersonAge("");
    };
    
  
    return (
        <>
        <form onSubmit={handleNewPersonSubmit}>
        <fieldset>
          <legend>New Person</legend>
          <label className="name">Name:<input  type='text'onChange={(e)=>{setNewPersonName(e.target.value)}} value={newPersonName}/></label><br/>
          <label className="surname">Surname:<input  type='text' onChange={(e)=>{setNewPersonSurname(e.target.value)}} value={newPersonSurname}/></label><br/> 
          <label className="age">Age<input  type='number' onChange={(e)=>{setNewPersonAge(e.target.value)}} value={newPersonAge}/></label><br/>
          <button>Submit new person</button>
        </fieldset>
        
        <hr/>
      </form>
      </>
    )
    
};