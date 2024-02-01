import React from "react";
import styles from "../styles/modules/TypingText.module.css"

const TypingText = ({ children }) => {
    return (
        <div className={styles.typingText}>
            {children}
        </div>
    )
}

export default TypingText