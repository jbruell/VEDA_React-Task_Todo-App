import { useState } from "react";
import EditMode from "./EditMode";
import "./Task.css";

const Task = ({ task, toggleCheckedCallback, updateTask, deleteTask }) => {
    const [editMode, setEditMode] = useState(false);
    return (<>
        {editMode ?
            <EditMode task={task} setEditMode={setEditMode}
                updateTask={updateTask}
                deleteTask={deleteTask} />
            :
            <div className={`task-wrapper ${task.marked ? "marked" : ""}`}>
                <span className={`task-text ${task.checked ? "checked" : ""}`}
                    onClick={() => setEditMode(true)}>
                        {task.text}
                </span>
                <span className="round">
                    <input type="checkbox"
                        id={task.id}
                        className="task-checkbox"
                        checked={!!task.checked}
                        onChange={() => toggleCheckedCallback(task)} />
                    <label htmlFor={task.id}></label>
                </span>
            </div>
        }
    </>
    )
}

export default Task;