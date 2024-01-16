import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { projectDataArray } from "../data/projectData"

import styles from "../styles/modules/ProjectsPage.module.css";

import { MdClose } from "react-icons/md";

const ProjectsPage = () => {
    const filteredRef = useRef()
    const [activeFilter, setActiveFilter] = useState();
    const [subCatagory, setSubCatagory] = useState()
    const [filteredData, setFilteredData] = useState([])
    const navigate = useNavigate();
    const location = useLocation();

    const pauseVideo = (e) => {
        e.target.tagName === "VIDEO" && e.target.pause();
    };

    const resumeVideo = (e) => {
        e.target.tagName === "VIDEO" && e.target.play();
    };

    const handleNavMouseOver = (dataRole) => handleNavMouse(dataRole, true);
    const handleNavMouseLeave = (dataRole) => handleNavMouse(dataRole, false);

    const handleNavMouse = (dataRole, isOver) => {
        const elements = document.querySelectorAll(`[data-role="${dataRole}"]`);
        elements.length > 0 && elements.forEach((element) =>
            isOver ? element.classList.add(styles.hovered) : element.classList.remove(styles.hovered)
        );
    };
    

    useEffect(() => {
        const pathSegments = location.pathname.slice(1).split('/');
        setActiveFilter(pathSegments[0]);

        const subCatagory = pathSegments.length > 1 ? pathSegments[1] : undefined;
        setSubCatagory(subCatagory);

        if (subCatagory) {
            const filteredData = projectDataArray.filter(project => project.subCatagory == subCatagory)
            setFilteredData(filteredData)
        } else {
            setFilteredData(projectDataArray)
        }
    }, [location.pathname]);

    useEffect(() => {
        // Clone the original array to avoid modifying the input array
        const shuffledArray = [...projectDataArray];

        // Fisher-Yates (Knuth) Shuffle algorithm
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            // Swap elements at indices i and j
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        setFilteredData(shuffledArray)
    }, [])

    useEffect(()=>{
        document.title = "Projects"
    },[location.pathname])

    useEffect(()=>{
        console.log()
    })

    return (
        <div className={styles.container}>
            <section>
                <nav>
                    <ul>
                        <li className={`${activeFilter == "all" ? styles.activeTab : styles.inactiveTab}`}>
                            <Link
                                to="/all"  >
                                &gt; all
                            </Link>
                        </li>
                        <li
                            className={`${activeFilter == "live" ? styles.activeTab : styles.inactiveTab}`}
                            onMouseOver={(e) => handleNavMouseOver("live")}
                            onMouseLeave={(e) => handleNavMouseLeave("live")}>
                            <Link
                                className={`${activeFilter == "live" ? styles.activeTab : styles.inactiveTab}`}
                                to="/live" >
                                &gt; live
                            </Link>
                            {activeFilter == "live" && <Link
                                className={`${(subCatagory == "webDev") ? styles.activeTab : styles.inactiveTab}`}
                                to="/live/webDev" >
                                &gt; webDevelopment
                            </Link>}
                        </li>
                        <li
                            className={`${activeFilter == "sideProjects" ? styles.activeTab : styles.inactiveTab}`}
                            onMouseOver={(e) => handleNavMouseOver("sideProjects")}
                            onMouseLeave={(e) => handleNavMouseLeave("sideProjects")}>
                            <Link
                                className={`${activeFilter == "sideProjects" ? styles.activeTab : styles.inactiveTab}`}
                                to="/sideProjects" >
                                &gt; projects
                            </Link>
                            {activeFilter == "sideProjects" && (
                                <Link
                                    className={`${subCatagory == "webDev" ? styles.activeTab : styles.inactiveTab}`}
                                    to="/sideProjects/webDev" >
                                    &gt; webDevelopment
                                </Link>
                            )}
                        </li>
                        <li
                            className={`${(activeFilter == "design" || activeFilter == "design/logos" || activeFilter == "design/typography") ? styles.activeTab : styles.inactiveTab}`}
                            onMouseOver={(e) => handleNavMouseOver("design")}
                            onMouseLeave={(e) => handleNavMouseLeave("design")}>
                            <Link
                                className={`${activeFilter == "design" ? styles.activeTab : styles.inactiveTab}`}
                                to="/design" >
                                &gt; design
                            </Link>
                            {activeFilter == "design" && <Link className={`${subCatagory == "logos" ? styles.activeTab : styles.inactiveTab}`} to="/design/logos" >&gt; logos</Link>}
                            {activeFilter == "design" && <Link className={`${subCatagory == "typography" ? styles.activeTab : styles.inactiveTab}`} to="/design/typography" >&gt; typography</Link>}
                            {activeFilter == "design" && <Link className={`${subCatagory == "icons" ? styles.activeTab : styles.inactiveTab}`} to="/design/icons" >&gt; icons</Link>}
                        </li>
                    </ul>
                </nav>
                <div className={styles.close}>
                    {activeFilter && <button onClick={() => setActiveFilter()}>
                        <MdClose />
                    </button>}
                </div>
                <div ref={filteredRef} className={`${styles.filteredContent} ${activeFilter ? styles.expanded : styles.collapsed} `}>
                    {filteredData && filteredData.length > 0 && filteredData.map((project, i) => {
                        if (project.preview.type == "video" && (activeFilter == "all" || project.catagory == activeFilter)) {
                            return (
                                <div className={styles.card} key={i} data-role={project.catagory} data-role2={project.subCatagory}>
                                    <video onClick={() => navigate(`/projects/${project.name}`)} onMouseOver={resumeVideo} onMouseLeave={pauseVideo} muted loop id="myVideo">
                                        <source src={project.preview.url} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            )
                        } else if (project.preview.type == "image" && (activeFilter == "all" || project.catagory == activeFilter)) {
                            return (
                                <div className={styles.card} key={i} data-role={project.catagory} data-role2={project.subCatagory}>
                                    <img onClick={() => navigate(`/projects/${project.name}`)} src={project.preview.url} />
                                </div>
                            )
                        }
                    })}
                </div>
            </section>
        </div>
    )
}

export default ProjectsPage