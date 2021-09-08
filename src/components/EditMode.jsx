import { useState } from "react";
import "./EditMode.css";
import "../utils.css";

const EditMode = ({ task, setEditMode, updateTask, deleteTask }) => {
    const [text, setText] = useState(task.text);
    const [marked, setMarked] = useState(task.marked);

    const handleConfirm = () => {
        updateTask({...task, text: text, marked: marked});
        setEditMode(false);
    }
    return (
        <div>
            <div className="overlay" onClick={() => setEditMode(false)}></div>
            <div className="edit-task-wrapper">
                <input className="edit-title-field input-field"
                    type="text"
                    name="input"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            handleConfirm();
                        }
                    }}
                    autoFocus
                />
                <button className={`icon-button ${marked ? "marked" : ""}`}
                    onClick={() => setMarked(!marked)}>
                    <span className="fas fa-flag"></span>
                </button>
                <button className="icon-button"
                    onClick={() => deleteTask(task)}>
                    <span className="fas fa-trash"></span>
                </button>
                <button className="icon-button"
                    onClick={() => handleConfirm()}>
                    <span className="fas fa-check"></span>
                </button>
            </div>
        </div>
    )
}

export default EditMode;