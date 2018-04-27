import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Container from '../UI/Container'


const Controls = (props) => (
    <Container>
        <TextField
            onChange={props.onChangeHandler}
            value={props.newTaskValue}
            name={'new-task'}
            placeholder={'Add new task'}
            fullWidth={true}
        />
        <RaisedButton
            onClick={props.onClickHandler}
            primary={true}
            fullWidth={true}
            label={'ADD'}
        />
        <TextField
            onChange={props.onFilterChangeHandler}
            value={props.filtrTaskValue}
            name={'filter-tasks'}
            placeholder={'Filter task'}
            fullWidth={true}
        />
    </Container>
)

export default Controls