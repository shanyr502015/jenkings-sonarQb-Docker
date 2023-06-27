import React from 'react';
import Person from './Person';

function NameList() {
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    }
  ];

  const personList = persons.map(person => <Person key={person.name} person = {person}/>)
   //   return <div>{personList}</div>; 

   //   const personList = persons.map(person => <Person person = {person}/>)
   //   return <div>{personList}</div>; 
    
    //   <h2>
    //     I am {person.name}. I am {person.age} years old. I know {person.skill}
    //   </h2> 
    // we have to remove <h2></h2> and add it into Person.js
  
}
export default NameList;
