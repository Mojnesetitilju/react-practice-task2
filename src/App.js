import { useState } from 'react';
import './App.css';
import Osoba from './Osoba';
import NovaOsoba from './Nova Osoba';

function App() {
  const [persons, setPersons] = useState([
    {id: 1, name: "John", surname: "Doe", age: 25 },
    {id: 2, name: "Jane", surname: "Smith", age: 30 },
    {id: 3, name: "Tom", surname: "Johnson", age: 35 },
    {id: 4, name: "Emily", surname: "Williams", age: 28 },
  ]);
  
  const handleNameChange = (newName,newSurname,newAge,index) =>{
     
      setPersons((prevPersons) => {
        const updatedPersons = [...prevPersons];
        const updatedPerson = { ...updatedPersons[index] };
    
        if (newName !== "") {
          updatedPerson.name = newName;
        }
    
        if (newSurname !== "") {
          updatedPerson.surname = newSurname;
        }
    
        if (newAge !== "") {
          updatedPerson.age = newAge;
        }
    
        updatedPersons[index] = updatedPerson;
        return updatedPersons;
      });
   
   
  
    
      
  };
  const handleDeleteUser = (index) => {
    const newList = [...persons];
    newList.splice(index,1);
    setPersons(newList)
   
    
  };
  
  const handleNewPerson = (newPersonName,newPersonSurname, newPersonAge) => {   
        const newPerson = {
               name: newPersonName,
               surname: newPersonSurname,
               age: newPersonAge
    };
    setPersons(prevPersons => [...prevPersons, newPerson]);
  };

  return (
    <div>
      <h1>Person List</h1>
      <NovaOsoba onNewUserSubmit ={handleNewPerson}/>
      <ol>
      {persons.map((user, index) => (
            <Osoba
            key={user.index}
            name = {user.name}
            surname = {user.surname}
            age = {user.age}
            index = {index}
            onNameChange={handleNameChange}
            onDelete ={handleDeleteUser}
            className="name"
            />
          
      ))}
      </ol>
      
    </div>
  );
      };

export default App;
