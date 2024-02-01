import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import styles from "../styles/modules/ProjectPage.module.css"

import { projectDataArray } from "../../data/projectData";

import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaNodeJs, FaGit, FaStripe } from "react-icons/fa";
import { SiWebpack, SiBabel, SiMongodb, SiFirebase, SiExpress, SiJest } from "react-icons/si";
import { IoLogoJavascript, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { BiLinkExternal } from "react-icons/bi";
import ScrollToTopButton from "../components/ScrollToTopButton";
import VideoPlayer from "../components/VideoPlayer";

const ProjectPage = ({ }) => {
    const location = useLocation()
    const params = useParams()

    const projectData = projectDataArray.find((project) => {
        if (params.projectId == project.name)
            return project
    })

    return (
        <div className={styles.container} >
            <ScrollToTopButton />
            <div className={styles.header}>
                <h1>
                    {projectData.name.slice(0, 1).toUpperCase() + projectData.name.slice(1)}
                    <ul className={styles.frameworks}>
                        {projectData && projectData.frameworks && projectData.frameworks.length > 0 && projectData.frameworks.map((framework) => {
                            const Icon = () => {
                                if (framework == "HTML") {
                                    return <FaHtml5 />
                                } else if (framework == "CSS") {
                                    return <FaCss3Alt />
                                } else if (framework == "JS") {
                                    return <IoLogoJavascript />
                                } else if (framework == "React") {
                                    return <FaReact />
                                } else if (framework == "Webpack") {
                                    return <SiWebpack />
                                } else if (framework == "Babel") {
                                    return <SiBabel />
                                } else if (framework == "Node") {
                                    return <FaNodeJs />
                                } else if (framework == "Express") {
                                    return <SiExpress />
                                } else if (framework == "MongoDB") {
                                    return <SiMongodb />
                                } else if (framework == "Firebase") {
                                    return <SiFirebase />
                                } else if (framework == "Jest") {
                                    return <SiJest />
                                } else if (framework == "Git") {
                                    return <FaGit />
                                } else if (framework == "Github") {
                                    return <FaGithub />
                                } else if (framework == "Stripe") {
                                    return <FaStripe />
                                } else {
                                    return <></>
                                }
                            }
                            return (
                                <li className={styles.framework}>
                                    <Icon />
                                </li>
                            )
                        })}
                    </ul>
                    {projectData.preview.type == "image" && <img src={projectData.preview.url} />}
                </h1>
                {projectData && projectData.preview.type == "video" && <video autoPlay={true} loop={true} controls={false}>
                    <source src={projectData.preview.url} />
                </video>}
            </div>
            <div>
                <section>
                    <span>
                        <h2>
                            {projectData.tagline}
                        </h2>
                        <nav>
                            <ul>
                                <li>
                                    {projectData.hostedAt && <Link to={`/projects/${projectData.hostedAt}`}>
                                        <BiLinkExternal />
                                        &nbsp;
                                        {projectData.hostedAt}
                                    </Link>}
                                </li>
                                <li>
                                    {projectData.github && <Link to={`/projects/${projectData.github}`}>
                                        <FaGithub />
                                        &nbsp;
                                        {projectData.github}
                                    </Link>}
                                </li>
                            </ul>
                        </nav>
                        <p>{projectData.description}</p>
                    </span>
                    {projectData && projectData.preview.type == "video" && <VideoPlayer src={projectData.preview.url} />}
                    {projectData.preview.type == "image" && <img src={projectData.preview.url} />}
                </section>
                {projectData && projectData.assets?.map((asset, i) => {
                    return (
                        <section>
                            <div className={styles.assets} key={i}>
                                {asset.type === "video" && (
                                    <video controlsList="nodownload" loop playsInline controls autoPlay={true} loading="lazy">
                                        <source src={asset.url} type="video/mp4" />
                                        {/* Add more source elements if needed for different video formats */}
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                                {asset.type === "image" && (
                                    <img src={asset.url} alt={`Image ${asset.id}`} />
                                )}
                                {asset.type === "codepen" && (
                                    <iframe src={asset.url} frameborder="no" loading="lazy" />
                                )}
                                <h4>{asset.title}</h4>
                                <p>{asset.description}</p>
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    )
}

export default ProjectPage