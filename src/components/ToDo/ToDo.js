import React from 'react'
import List from './List'
import Controls from './Controls'
import Container from '../UI/Container'


class ToDo extends React.Component {
    state = {
        tasks: [
            {name: 'umyj naczynia ', uid: 82664478218},
            {name: 'biegaj ', uid: 82686478218}
        ],
        filterText: '',
        newTask: ''
    }

    deleteTask = (taskUid) => {
        const newTasks = this.state.tasks.filter(task => taskUid !== task.uid)
        this.setState({
            tasks: newTasks
        })
    }

    addTask = () => {
        const newTask = {
            name: this.state.newTask,
            uid: Date.now()
        }
        const newTasks = this.state.tasks.concat(newTask)
        this.setState({
            tasks: newTasks
        })
    }

    newTaskChangeHandler = (event, newValue) => {
        this.setState({
            newTask: newValue
        })
    }

    render() {
        return (
            <Container>
                <Controls
                    onClickHandler={this.addTask}
                    onChangeHandler={this.newTaskChangeHandler}
                    newTaskValue={this.state.newTask}

                />

                <List
                    deleteTaskFunction={this.deleteTask}
                    tasksList={this.state.tasks}
                />
            </Container>
        )
    }
}

export default ToDo