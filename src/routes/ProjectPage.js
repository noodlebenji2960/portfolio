import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import styles from "../styles/modules/ProjectPage.module.css"

import { projectsData } from "../data/projectData";

const ProjectPage = ({ }) => {
    const location = useLocation()
    const params = useParams()

    const projectData = projectsData.find((project) => {
        if (params.projectId == project.name)
            return project
    })

    useEffect(() => {
        console.log(location)
        console.log(params)
        console.log(projectData)
    })

    return (
        <div className={styles.projectPage}>
            {projectData.preview.type == "video" && <video autoPlay={true} muted loop id="myVideo">
                <source src={projectData.preview.url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>}
            {projectData.preview.type == "image" && <img src={projectData.preview.url}/>}
            <h1>{location.pathname}</h1>
        </div>
    )
}

export default ProjectPage