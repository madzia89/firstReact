import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'



const Task = ({name, deleteTask}) => (
    <div>
        {name}
        <RaisedButton
            secondary={true}
            onClick={deleteTask}>X</RaisedButton>
    </div>
)

export default Task