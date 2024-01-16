import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import styles from "../styles/modules/IndexPage.module.css";
import Icon from "../components/Icon";

import { BsLinkedin } from "react-icons/bs";

const IndexPage = () => {

    return (<>
        <div className={styles.pageContainer}>
            <section>
                <nav>
                    <ul>
                        <li>
                            <h3>
                                <Link to={"/all"}>
                                    <i>const</i>&nbsp;<b>projects</b>
                                </Link>
                                &nbsp; = &nbsp;
                                <Icon name={"FaCode"} />
                            </h3>
                        </li>
                        <li>
                            <h3>
                                <Link to={"/resume"}>
                                    <i>const</i>&nbsp;<b>resume</b>
                                </Link>
                                &nbsp; = &nbsp;
                                <BsLinkedin/>
                            </h3>
                        </li>
                        <li>
                            <h3>
                                <Link to={"/contact"}>
                                    <i>const</i>&nbsp;<b>say👋</b>
                                </Link>
                                &nbsp; = &nbsp;
                                <Icon name={"MdEmail"} />
                            </h3>
                        </li>
                        <li>
                            <h3>
                                <Link to={"https://github.com/noodlebenji2960"} target="_blank" rel="noopener noreferrer">
                                    <i>const</i>&nbsp;<b>gitHub</b>
                                </Link>
                                &nbsp; = &nbsp;
                                <Icon name={"FaGithub"} />
                            </h3>
                        </li>
                    </ul>
                </nav>
            </section>
            <section>
                <div>
                    <h3><i>function</i> ☕ intoCode &#123;</h3>
                    <p><b>return (</b><i> "Self-taught web developer passionate about creating seamless and visually compelling online experiences." </i><b> )</b></p>
                    <h3>&#125;</h3>
                </div>
            </section>
        </div >
    </>);
};


export default IndexPage;