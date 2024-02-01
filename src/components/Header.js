import React, { useEffect, forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/modules/Header.module.css"

import Carousel from "../components/Carousel";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaNodeJs, FaGit } from "react-icons/fa";
import { SiOpenai, SiBootstrap, SiFigma, SiVite, SiGimp, SiAdobephotoshop, SiAdobeillustrator, SiWebpack, SiBabel, SiMongodb, SiFirebase, SiExpress, SiJest } from "react-icons/si";

import { RiArrowGoBackLine } from "react-icons/ri";
import { MdHomeFilled } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import RippleButton from "./RippleButton";
import TypingText from "./TypingTex";
import Metal from "./Metal";

const Header = ({ collapsedHeader }, ref) => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className={styles.container} ref={ref}>
            <section className={collapsedHeader == true ? styles.collapsedHeader : ""}>
                    <h1>
                        Benjamin Chick
                    </h1>
                <span className="stainedGlass">
                    <h2>
                        {collapsedHeader ? (<>
                            <Link onClick={(e) => {
                                e.preventDefault()
                                goBack()
                            }}>
                                <RiArrowGoBackLine />
                            </Link>
                            <Link to={"/all"}>
                                <MdHomeFilled />
                            </Link>
                        </>) : (<>
                            <Carousel >
                                <div aria-label="HTML5" label-position="bottom">
                                    <FaHtml5 />
                                </div>
                                <div aria-label="CSS3" label-position="bottom">
                                    <FaCss3Alt />
                                </div>
                                <div aria-label="React.js" label-position="bottom">
                                    <FaReact />
                                </div>
                                <div aria-label="Bootstrap" label-position="bottom">
                                    <SiBootstrap />
                                </div>
                                <div aria-label="Webpack" label-position="bottom">
                                    <SiWebpack />
                                </div>
                                <div aria-label="Vite" label-position="bottom">
                                    <SiVite />
                                </div>
                                <div aria-label="Babel" label-position="bottom">
                                    <SiBabel />
                                </div>
                                <div aria-label="Node.js" label-position="bottom">
                                    <FaNodeJs />
                                </div>
                                <div aria-label="Express.js" label-position="bottom">
                                    <SiExpress />
                                </div>
                                <div aria-label="MongoDB" label-position="bottom">
                                    <SiMongodb />
                                </div>
                                <div aria-label="Google Firebase" label-position="bottom">
                                    <SiFirebase />
                                </div>
                                <div aria-label="Jest" label-position="bottom">
                                    <SiJest />
                                </div>
                                <div aria-label="Git" label-position="bottom">
                                    <FaGit />
                                </div>
                                <div aria-label="Github" label-position="bottom">
                                    <FaGithub />
                                </div>
                                <div aria-label="OpenAI" label-position="bottom">
                                    <SiOpenai />
                                </div>
                                <div aria-label="Figma" label-position="bottom">
                                    <SiFigma />
                                </div>
                                <div aria-label="Gimp" label-position="bottom">
                                    <SiGimp />
                                </div>
                                <div aria-label="Adobe Photoshop" label-position="bottom">
                                    <SiAdobephotoshop />
                                </div>
                                <div aria-label="Abobe Illustrator" label-position="bottom">
                                    <SiAdobeillustrator />
                                </div>
                            </Carousel>
                        </>)}
                    </h2>
                </span>
            </section>
        </div>
    )
}

export default forwardRef(Header)