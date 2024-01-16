import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import styles from "../styles/modules/ProjectPage.module.css"

import { projectDataArray } from "../data/projectData";

const ProjectPage = ({ }) => {
    const location = useLocation()
    const params = useParams()

    const projectData = projectDataArray.find((project) => {
        if (params.projectId == project.name)
            return project
    })

    return (
        <div className={styles.container}>
            <div className={styles.projectPage}>
                {projectDataArray && projectData.preview.type == "video" && <video autoPlay={true} muted loop id="myVideo">
                    <source src={projectData.preview.url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>}
                {projectData && projectData.preview.type == "image" && <img src={projectData.preview.url} />}
                <h1>{location.pathname}</h1>
            </div>
            <section>
                <h1>
                    {projectData && projectData.name}
                </h1>
                <h2>
                    {projectData && projectData.tagline}
                </h2>
                <div>
                    <div>
                        <h3>Frameworks:</h3>
                        <ul>
                            <li>
                                React
                            </li>
                        </ul>
                        {projectDataArray && projectDataArray.assets?.map((asset) => {
                            return (
                                <>
                                    {asset.type === "video" && (
                                        <video key={asset.id} controls>
                                            <source src={asset.url} type="video/mp4" />
                                            {/* Add more source elements if needed for different video formats */}
                                            Your browser does not support the video tag.
                                        </video>
                                    )}

                                    {asset.type === "image" && (
                                        <img key={asset.id} src={asset.url} alt={`Image ${asset.id}`} />
                                    )}
                                </>
                            );
                        })}
                    </div>
                    <div>
                        <p>{projectDataArray && projectDataArray.description}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectPage