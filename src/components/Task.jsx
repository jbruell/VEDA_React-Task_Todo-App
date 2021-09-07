import "./Task.css";

const Task = ({ task, toggleCheckedCallback }) => {
    return (
        <div className="task-wrapper">
            <span className={`task-text ${task.checked ? "checked"  : ""}`}>{task.text}</span>
            <span className="round">
                <input type="checkbox"
                    id={task.id}
                    className="task-checkbox"
                    checked={!!task.checked}
                    onChange={() => toggleCheckedCallback(task)} />
                <label htmlFor={task.id}></label>
            </span>
        </div>
    )
}

export default Task;