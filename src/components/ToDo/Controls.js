import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const styles = {
    paper: {
        margin: '10px',
        padding: '10px'
    }
}

const Controls = ({onClickHandler, onChangeHandler, newTaskValue}) => (
    <Paper style={styles.paper}>
        <TextField
            onChange={onChangeHandler}
            value={newTaskValue}
            name={'new-task'}
            placeholder={'New Task'}
            fullWidth={true}/>
        <RaisedButton
            onClick={onClickHandler}
            primary={true}
            fullWidth={true}
            label={'ADD'}
        />
    </Paper>
)

export default Controls