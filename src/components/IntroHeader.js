import React from "react";
import { Link, useLocation } from "react-router-dom";
import Carousel from "./Carousel";
import styles from "../styles/modules/IntroHeader.module.css"

import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaNodeJs, FaGit, FaChevronLeft } from "react-icons/fa";
import { SiWebpack, SiBabel, SiMongodb, SiFirebase, SiExpress, SiJest } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

const IntroHeader = ({ collapsedHeader }) => {
    const location = useLocation()
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className={styles.container}>
            <section>
                <h1 className={collapsedHeader == true ? styles.collapsedHeader : ""}>
                    {collapsedHeader ? <b>Benjamin John Chick</b> : <b><i>Hello,</i> I'm Benjamin.</b>}
                </h1>
                <span className={styles.stainedGlass}>
                    {collapsedHeader ? (
                        <h2>
                            {collapsedHeader && <Link onClick={(e) => {
                                e.preventDefault()
                                goBack()
                            }}>
                                <FaChevronLeft />
                            </Link>}
                            {collapsedHeader && <Link onClick={(e) => {
                                e.preventDefault()
                                goBack()
                            }}>
                                <Icon name={"MdHomeFilled"} />
                            </Link>}
                            {location.pathname}
                        </h2>
                    ) : (
                        <h2>
                            Fullstack Web Developer / UX designer
                        </h2>
                    )}
                    <Carousel collapsed={collapsedHeader}>
                        <div aria-label="HTML5: A markup language used for structuring and presenting content on the World Wide Web." label-position="bottom">
                            <FaHtml5 />
                        </div>
                        <div aria-label="CSS3: (Cascading Style Sheets) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML" label-position="bottom">
                            <FaCss3Alt />
                        </div>
                        <div aria-label="React.js: An open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta." label-position="bottom">
                            <FaReact />
                        </div>
                        <div aria-label="Webpack: An open-source module bundler for JavaScript." label-position="bottom">
                            <SiWebpack />
                        </div>
                        <div aria-label="Babel: An open-source JavaScript transcompiler that used to convert ECMAScript 2015+ (ES6+) code into backwards-compatible JavaScript." label-position="bottom">
                            <SiBabel />
                        </div>
                        <div aria-label="Node.js: A cross-platform, open-source JavaScript runtime environment." label-position="bottom">
                            <FaNodeJs />
                        </div>
                        <div aria-label="Express.js: A back end web application framework for building RESTful APIs with Node.js" label-position="bottom">
                            <SiExpress />
                        </div>
                        <div aria-label={`MongoDB: A "source-available", "cross-platform", "document-oriented" database program.`} label-position="bottom">
                            <SiMongodb />
                        </div>
                        <div aria-label="Google Firebase: A set of backend cloud computing services and application development platforms provided by Google. It hosts databases, services, authentication, and integration" label-position="bottom">
                            <SiFirebase />
                        </div>
                        <div aria-label="Jest: JavaScript testing framework." label-position="bottom">
                            <SiJest />
                        </div>
                        <div aria-label="Git: Git is a free and open source distributed version control system" label-position="bottom">
                            <FaGit />
                        </div>
                        <div aria-label="Github: An AI-powered developer platform that allows developers to create, store, and manage their code." label-position="bottom">
                            <FaGithub />
                        </div>
                    </Carousel>
                </span>
            </section>
        </div>
    )
}

export default IntroHeader