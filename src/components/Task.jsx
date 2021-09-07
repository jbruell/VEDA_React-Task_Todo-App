import "./Task.css";

const Task = ({ task, toggleCheckedCallback }) => {
    return (
        <div className="task-wrapper">
            <span>{task.text}</span>
            <input type="checkbox"
                checked={!!task.checked}
                onChange={() => toggleCheckedCallback(task)} />
        </div>
    )
}

export default Task;