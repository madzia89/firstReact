import React from 'react'

const names = ['Bartek', 'Magda', 'Szymon']

//poniższy div jest tablicą która zawiera elementy JSX dlatego musimy dodać klucze
// const divs = [
//         <div key={1}>{names[0]}</div>,
//         <div key={2}>{names[1]}</div>,
//         <div key={3}>{names[2]}</div>
// ]

const MappingArray = () => (
    <div>
        {
            names.map((name,i) => <div key={name}>{name}</div> )
        }
    </div>
)

export default MappingArray