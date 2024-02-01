import React, { useRef, useState } from "react";
import styles from "../styles/modules/ContactPage.module.css"
import RippleButton from "../components/RippleButton";
import { GiCoffeeMug } from "react-icons/gi";
import { IoMdPaperPlane } from "react-icons/io";

const ContactPage = () => {
    const formRef = useRef()
    const [message, setMessage] = useState("")

    const handleTextareaChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSendClick = (e) => {
    }

    const handleClear = (e) => {
        formRef.current.reset();
        setMessage("")
    }

    return (
        <div className={styles.container}>
            <form ref={formRef}>
                <div>
                    <label>
                        To:
                        <input disabled placeholder="noodlebenji2960@gmail.com" />
                    </label>
                    <label>From:
                        <input type="text" placeholder="john.smith@email.com" />
                    </label>
                    <textarea
                        className={styles.textarea}
                        placeholder="Type your message here..."
                        value={message}
                        onChange={handleTextareaChange}
                    />
                    <IoMdPaperPlane />
                </div>
                <p className={styles.description}>
                    Thank you for visiting my web design portfolio. If you are interested in collaborating on a project or have any inquiries regarding my services, I would love to hear from you.
                    <br></br>
                    <br></br>
                    Feel free to reach out using the contact form, and I will respond promptly. Your vision is important, and I am dedicated to bringing it to life through thoughtful and innovative design. I look forward to creating something great together.
                </p>
                <span>
                    <RippleButton onClick={handleClear} alt={true} className={styles.buyCoffee}>
                        Buy me a <GiCoffeeMug />
                    </RippleButton>
                    <span>
                        <RippleButton onClick={handleClear} alt={true}>
                            Clear
                        </RippleButton>
                        <RippleButton onClick={handleSendClick}>
                            Send
                        </RippleButton>
                    </span>
                </span>
            </form>
        </div>
    )
}

export default ContactPage