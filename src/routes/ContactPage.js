import React, { useEffect } from "react";
import styles from "../styles/modules/ContactPage.module.css"

const ContactPage=()=>{

    return (
        <div className={styles.container}>
            <section>
                <form>
                    <textarea placeholder={"Send a message..."}/>
                    <input placeholder="email"/>
                    <button>
                        Send
                    </button>
                </form>
            </section>
        </div>
    )
}

export default ContactPage