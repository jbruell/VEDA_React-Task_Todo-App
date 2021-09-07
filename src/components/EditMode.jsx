import { useState } from "react";
import "./EditMode.css";

const EditMode = ({ task, setEditMode, updateTask }) => {
    const [text, setText] = useState(task.text);
    const [marked, setMarked] = useState(task.marked);
    return (
        <div>
            <div className="overlay" onClick={() => setEditMode(false)}></div>
            <div className="edit-task-wrapper">
                <input className="edit-title-field"
                    type="text"
                    name="input"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            updateTask({...task, text: text});
                            setEditMode(false);
                        }
                    }}
                    autoFocus
                />
                <button className="input-button">
                    <span className="fas fa-plus"></span>
                </button>
            </div>
        </div>
    )
}

export default EditMode;