import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import styles from "../styles/modules/ProjectsPage.module.css";

import { MdClose } from "react-icons/md";
import { projectsData } from "../data/projectData";

const ProjectsPage = () => {
    const filteredRef = useRef()
    const [activeFilter, setActiveFilter] = useState()
    const navigate = useNavigate()
    const location = useLocation()

    const pauseVideo = (e) => {
        e.target.pause()
    }

    const resumeVideo = (e) => {
        e.target.play()
    }

    useEffect(() => {
        if (location.pathname) {
            setActiveFilter(location.pathname.slice(1))
        }
    })

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <nav>
                    <ul>
                        <li className={`${activeFilter == "all" ? styles.activeTab : ""}`}>
                            <Link to="/all"  >&gt; all</Link>
                        </li>
                        <li className={`${activeFilter == "projects" ? styles.activeTab : ""}`}>
                            <Link to="/projects" >&gt; live</Link>
                        </li>
                        <li className={`${activeFilter == "sideProjects" ? styles.activeTab : ""}`}>
                            <Link to="/sideProjects" >&gt; projects</Link>
                        </li>
                        <li className={`${activeFilter == "design" ? styles.activeTab : ""}`}>
                            <Link to="/design" >&gt; design</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.close}>
                    {activeFilter && <button onClick={() => setActiveFilter()}>
                        <MdClose />
                    </button>}
                </div>
                <div ref={filteredRef} className={`${styles.filteredContent} ${activeFilter ? styles.expanded : styles.collapsed}`}>
                    {projectsData.map((project, i) => {
                        if (project.preview.type == "video") {
                            return (
                                <div className={styles.card} key={i}>
                                    <video onClick={() => navigate(`/projects/${project.name}`)} onMouseOver={resumeVideo} onMouseLeave={pauseVideo} muted loop id="myVideo">
                                        <source src={project.preview.url} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            )
                        } else if (project.preview.type == "image") {
                            return (
                                <div className={styles.card} key={i}>
                                    <img onClick={() => navigate(`/projects/${project.name}`)} src={project.preview.url} />
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage