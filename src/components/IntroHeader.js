import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import styles from "../styles/modules/IntroHeader.module.css"

import { AiOutlineShareAlt } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { GrSend } from "react-icons/gr";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiWebpack, SiBabel, SiMongodb, SiFirebase, SiExpress, SiJest } from "react-icons/si";
import { useLocation } from "react-router-dom";

const IntroHeader = ({collapsedHeader}) => {
    const location = useLocation()

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <h1 className={collapsedHeader==true ? styles.collapsedHeader : ""}>
                    <b><i>Hello</i> </b> i'm <b>Benjamin.</b>
                </h1>
                <span className={styles.stainedGlass}>
                    <h2>Fullstack Web Developer / UX designer</h2>
                    <Carousel collapsed={collapsedHeader}>
                        <div aria-label="HTML5" label-position="bottom">
                            <FaHtml5 />
                        </div>
                        <div aria-label="CSS3" label-position="bottom">
                            <FaCss3Alt />
                        </div>
                        <div aria-label="React" label-position="bottom">
                            <FaReact />
                        </div>
                        <div aria-label="Express" label-position="bottom">
                            <SiExpress />
                        </div>
                        <div aria-label="Webpack" label-position="bottom">
                            <SiWebpack />
                        </div>
                        <div aria-label="Node.js" label-position="bottom">
                            <FaNodeJs />
                        </div>
                        <div aria-label="MongoDB" label-position="bottom">
                            <SiMongodb />
                        </div>
                        <div aria-label="Firebase" label-position="bottom">
                            <SiFirebase />
                        </div>
                        <div aria-label="Jest" label-position="bottom">
                            <SiJest />
                        </div>
                        <div aria-label="Babel" label-position="bottom">
                            <SiBabel />
                        </div>
                        <div aria-label="Github" label-position="bottom">
                            <FaGithub />
                        </div>
                    </Carousel>
                </span>
            </div>
        </div>
    )
}

export default IntroHeader