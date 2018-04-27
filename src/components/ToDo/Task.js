import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import Delete from 'material-ui/svg-icons/action/delete'



const Task = ({name, deleteTask}) => (
    <MenuItem
        primaryText={name}
        rightIcon={
            <Delete
                onClick={deleteTask}
            />
        }
    />
)

export default Task