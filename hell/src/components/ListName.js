import React from 'react'
import Persons from "./Persons";

function ListName() {

    const persons = [
        {
            id: 1,
            name : 'Az',
            surname :'AQ',
            age : '22'
        },
        {
            id: 2,
            name : 'Sx',
            surname :'SW',
            age : '22'
        },
        {
            id: '3ss',
            name : 'Azss',
            surname :'AQsss',
            age : '422'
        }]

    const personList =  persons.map(person => <Persons key={person.age} person={person} />)
    return (
        <div> {personList} </div>
    )

}
 export default ListName