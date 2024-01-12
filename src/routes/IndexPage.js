import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import styles from "../styles/modules/IndexPage.module.css";

import { MdClose } from "react-icons/md";
import { projectsData } from "../data/projectData";

const IndexPage = () => {

    return (<>
        <div className={styles.pageContainer}>
            <div className={styles.section}>
                <div>
                    <h3><i>function</i> ☕ intoCode &#123;</h3>
                    <p><b>return (</b><i> "Self-taught web developer passionate about creating seamless and visually compelling online experiences." </i><b> )</b></p>
                    <h3>&#125;</h3>
                </div>
            </div>
        </div>
    </>);
};


export default IndexPage;