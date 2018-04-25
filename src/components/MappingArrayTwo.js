import React from 'react'

const maleNames = [
    {name: 'Mateusz ', key: "1", position: "1. "},
    {name: 'Tadeusz ', key: "2", position: "2. "},
    {name: 'Tymoteusz ', key: "3", position: "3. "},
    {name: 'Amadeusz ', key: "4", position: "4. "}
]
const mapped = maleNames.map((user, i )=> <li key={i}>{i+1}. {user.name}</li>)

const MappingArrayTwo = () => (
   <ol>{mapped}</ol>
)

export default MappingArrayTwo