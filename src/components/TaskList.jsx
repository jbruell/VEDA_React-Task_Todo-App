import Task from "./Task";
import "./TaskList.css";

const TaskList = ({ tasks, toggleCheckedCallback }) => {
    return (
        <div className="tasklist-wrapper">
            {tasks.map(task => <Task key={task.id}
                task={task}
                toggleCheckedCallback={toggleCheckedCallback} />)}
        </div>
    )
}

export default TaskList;