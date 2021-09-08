import { useState } from "react";
import "./Footer.css";
import "../utils.css";

const Footer = ({ addTask }) => {
    const [input, setInput] = useState("");

    const handleConfirm = () => {
        if (input.length > 0) {
            addTask(input);
            setInput("");
        }
    }
    return (
        <footer className="footer-wrapper">
            <input className="input-field"
                placeholder="Erstelle eine Aufgabe..."
                type="text"
                name="input"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        handleConfirm();
                    }
                }}
                autoFocus
            />
            <button className="input-button" onClick={handleConfirm}>
                <span className="fas fa-plus"></span>
            </button>
        </footer>
    )
}

export default Footer;