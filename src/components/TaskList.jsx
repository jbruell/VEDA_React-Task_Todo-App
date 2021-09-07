import Task from "./Task";
import "./TaskList.css";

const TaskList = ({ tasks, toggleCheckedCallback, updateTask }) => {
    return (
        <div className="tasklist-wrapper">
            {tasks.map(task => (
                <Task key={task.id}
                    task={task}
                    toggleCheckedCallback={toggleCheckedCallback}
                    updateTask={updateTask} />
            ))}
        </div>
    )
}

export default TaskList;