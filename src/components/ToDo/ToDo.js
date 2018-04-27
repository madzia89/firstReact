import React from 'react'
import List from './List'

class ToDo extends React.Component {
    state = {
        tasks: [
            {name: 'umyj naczynia', uid: 82664478218},
            {name: 'biegaj', uid: 82686478218}
        ],
        filterText: ''
    }

    deleteTask = (taskUid) => {
        const newTasks = this.state.tasks.filter(task => taskUid !== task.uid)
        this.setState({
            tasks: newTasks
        })
    }

    render() {
        return (
            <div>
                <List
                    deleteTaskFunction={this.deleteTask}
                    tasksList={this.state.tasks}
                />
            </div>
        )
    }
}

export default ToDo