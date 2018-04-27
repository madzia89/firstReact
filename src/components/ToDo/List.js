import React from 'react'
import Task from './Task'
import Container from '../UI/Container'
//deleteTask powoduje że funkcja nie zostaje odrazu wywołana tylko dopiero gdy deleteTask zostanie kliknięty (bo tak mamy napisane w Task.js gdyby nie było tutuaj () => wówczas deleteTaskFunction od razu próbowałoby się właśnie tutaj wywołać

const List = ({tasksList, deleteTaskFunction}) => (
    <Container>
        {
            tasksList.map(task => (
                <Task
                    name={task.name}
                    key={task.uid}
                    deleteTask={() => deleteTaskFunction(task.uid)}
                />
            ))
        }
    </Container>
)

export default List