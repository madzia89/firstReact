import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Container from '../UI/Container'


const Controls = ({onClickHandler, onChangeHandler, newTaskValue}) => (
    <Container>
        <TextField
            onChange={onChangeHandler}
            value={newTaskValue}
            name={'new-task'}
            placeholder={'Add new task'}
            fullWidth={true}
        />
        <RaisedButton
            onClick={onClickHandler}
            primary={true}
            fullWidth={true}
            label={'ADD'}
        />
    </Container>
)

export default Controls