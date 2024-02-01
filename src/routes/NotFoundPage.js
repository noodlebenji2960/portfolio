import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "../styles/modules/NotFoundPage.module.css"

const NotFoundPage = () => {
    const location = useLocation();

    return (
        <div className={styles.container}>
            <h1>404 Not Found</h1>
            <p>{location.pathname} was not found!</p>
        </div>
    )
}

export default NotFoundPage