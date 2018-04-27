import React from 'react'
import Task from './Task'
//deleteTask powoduje że funkcja nie zostaje odrazu wywołana tylko dopiero gdy deleteTask zostanie kliknięty (bo tak mamy napisane w Task.js gdyby nie było tutuaj () => wówczas deleteTaskFunction od razu próbowałoby się właśnie tutaj wywołać

const List = ({tasksList, deleteTaskFunction}) => (
    <div>
        {
            tasksList.map(task => (
                <Task
                    name={task.name}
                    key={task.uid}
                    deleteTask={() => deleteTaskFunction(task.uid)}
                />
            ))
        }
    </div>
)

export default List