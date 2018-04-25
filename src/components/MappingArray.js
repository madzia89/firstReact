import React from 'react'

const users = [
    {name: 'Bartek', key: "kjajshdd"},
    {name: 'Magda', key: "kjsdajshdd"},
    {name: 'Szymon', key: "sadymsadon"}
    ]

const MappingArray = () => (
    <div>
        {
            users.map((user,i) => <div key={user.key}>{user.name}</div> )
        }
    </div>
)

export default MappingArray