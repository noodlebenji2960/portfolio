import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { projectDataArray } from "../../data/projectData";

import styles from "../styles/modules/ProjectsPage.module.css";

import ProjectOverlay from "../components/ProjectOverlay";
import ResizableDiv from "../components/ResizableDiv";

const ProjectsPage = () => {
    const filteredRef = useRef()
    const [view, setView] = useState("tile")
    const [overlay, setOverlay] = useState()
    const [activeFilter, setActiveFilter] = useState();
    const [subCategory, setSubCategory] = useState()
    const [filteredData, setFilteredData] = useState([])
    const [autoScrollOnOpen, setAutoScrollOnOpen] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();


    const handleNavMouseOver = (dataRole) => handleNavMouse(dataRole, true);
    const handleNavMouseLeave = (dataRole) => handleNavMouse(dataRole, false);

    const handleNavMouse = (dataRole, isOver) => {
        const elements = document.querySelectorAll(`[data-role="${dataRole}"]`);
        elements.length > 0 && elements.forEach((element) =>
            isOver ? element.classList.add(styles.hovered) : element.classList.remove(styles.hovered)
        );
    };

    const Search = () => {
        const [searchValue, setSearchValue] = useState("");
        const [searchResults, setSearchResults] = useState([]);

        const searchByField = (fieldName) => {
            const lowercaseSearchValue = searchValue;
            return filteredData.filter(item => {
                const lowercaseFieldValue = item[fieldName].toLowerCase();
                return lowercaseFieldValue.includes(lowercaseSearchValue.toLowerCase());
            });
        };

        const handleInput = (e) => {
            if (e.target.value.length > 3) {
                setSearchValue(e.target.value);
            } else {
                setSearchResults([])
            }
        };

        useEffect(() => {
            if (searchValue && searchValue.length > 3) {
                const nameSearch = searchByField("name")
                const categorySearch = searchByField("category")
                const subCategorySearch = searchByField("subCategory")

                // Combine the three arrays
                const combinedArray = [...nameSearch, ...categorySearch, ...subCategorySearch];

                // Use a Set to eliminate duplicates
                const uniqueValues = new Set(combinedArray);

                // Convert the Set back to an array
                const resultArray = Array.from(uniqueValues);

                setSearchResults(resultArray);
            } else {
                setSearchResults([]);
            }
        }, [searchValue]);

        return (
            <div className={styles.searchContainer}>
                <input type="search" placeholder="Search..." onInput={handleInput} style={{ borderRadius: searchResults.length > 0 ? `0.2rem .2rem 0 0` : `0.2rem` }} />
                {searchResults.length > 0 && (
                    <div className={styles.searchResults}>
                        <ul>
                            {searchResults && searchResults.length > 0 && searchResults.map((result, index) => (
                                <li>
                                    <Link key={index} to={`/projects/${result.name}`}>
                                        {result.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>
                )}
            </div>
        );
    };

    useEffect(() => {
        const pathSegments = location.pathname.slice(1).split('/');
        setActiveFilter(pathSegments[0]);

        const subCategory = pathSegments.length > 1 ? pathSegments[1] : undefined;
        setSubCategory(subCategory);

        if (subCategory) {
            const filteredData = projectDataArray.filter(project => project.subCategory == subCategory)
            setFilteredData(filteredData)
        } else {
            setFilteredData(projectDataArray.reverse())
        }
    }, [location.pathname]);

    useEffect(() => {
        document.title = "Projects"
        return () => document.title = "Benjamin John Chick"
    }, [location.pathname])

    useEffect(() => {
        document.querySelector("html").style.overflow = 'hidden';
        window.scrollTo(0, 0)
        return () => {
            document.querySelector("html").style.overflow = 'visible';
            window.scrollTo(0, 0)
        };
    }, []);

    return (
        <div className={styles.container}>
            <section>
                <ResizableDiv view={view} setView={setView}>
                    <nav>
                        <ul>
                            <li>
                                <Search />
                            </li>
                            <li>
                                <Link
                                    className={`${activeFilter == "all" ? styles.activeTab : styles.inactiveTab}`}
                                    to="/all"  >
                                    all
                                </Link>
                            </li>
                            <li
                                className={`${activeFilter == "live" ? styles.activeTab : styles.inactiveTab}`}
                                onMouseOver={(e) => handleNavMouseOver("live")}
                                onMouseLeave={(e) => handleNavMouseLeave("live")}>
                                <Link
                                    className={`${activeFilter == "live" ? styles.activeTab : styles.inactiveTab}`}
                                    to="/live" >
                                    live
                                </Link>
                                {activeFilter == "live" && <Link
                                    className={`${(subCategory == "webDev") ? styles.activeTab : styles.inactiveTab}`}
                                    to="/live/webDev" >
                                    webDevelopment
                                </Link>}
                            </li>
                            <li
                                className={`${activeFilter == "sideProjects" ? styles.activeTab : styles.inactiveTab}`}
                                onMouseOver={(e) => handleNavMouseOver("sideProjects")}
                                onMouseLeave={(e) => handleNavMouseLeave("sideProjects")}>
                                <Link
                                    className={`${activeFilter == "sideProjects" ? styles.activeTab : styles.inactiveTab}`}
                                    to="/sideProjects" >
                                    projects
                                </Link>
                                {activeFilter == "sideProjects" && (
                                    <Link
                                        className={`${subCategory == "webDev" ? styles.activeTab : styles.inactiveTab}`}
                                        to="/sideProjects/webDev" >
                                        webDevelopment
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
                                    design
                                </Link>
                                {activeFilter == "design" && <Link className={`${subCategory == "logos" ? styles.activeTab : styles.inactiveTab}`} to="/design/logos" >logos</Link>}
                                {activeFilter == "design" && <Link className={`${subCategory == "typography" ? styles.activeTab : styles.inactiveTab}`} to="/design/typography" >typography</Link>}
                                {activeFilter == "design" && <Link className={`${subCategory == "icons" ? styles.activeTab : styles.inactiveTab}`} to="/design/icons" >icons</Link>}
                            </li>
                        </ul>
                    </nav>
                </ResizableDiv>
                <div ref={filteredRef} className={`${styles.filteredContent} ${activeFilter ? styles.expanded : styles.collapsed} ${view == "list" ? styles.listView : ""}`}
                    onContextMenu={(e) => {
                        e.preventDefault()
                    }}>
                    {view == "list" && (
                        <div className={styles.listCols}>
                            <p>Project name</p>
                            <p>Category</p>
                            <p>Subcategory</p>
                        </div>
                    )}
                    {filteredData && filteredData.length > 0 && filteredData.map((project, i) => {

                        if (project.preview.type == "video" && (activeFilter == "all" || project.category == activeFilter)) {
                            return (<>
                                <div key={project.name + i}>
                                    <ProjectOverlay autoScrollOnOpen={autoScrollOnOpen} setAutoScrollOnOpen={setAutoScrollOnOpen} linkInternal={project.name} linkExternal={project.hostedAt} active={overlay == project.name} setActive={setOverlay}>
                                        {overlay == project.name && <div data-role={project.category} data-role2={project.subCategory}>
                                            <video controlsList="nodownload" loading="lazy" key={i} onClick={() => navigate(`/projects/${project.name}`)} muted autoPlay={true} playsinline loop id="myVideo">
                                                <source src={project.preview.url} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                            {project.assets && project.assets.length > 0 && project.assets.map((asset, i) => {
                                                if (asset.type == "video") {
                                                    return (
                                                        <video controlsList="nodownload" loading="lazy" key={i + "asset"} onClick={() => navigate(`/projects/${project.name}`)} playsinline autoPlay={true} muted loop id="myVideo">
                                                            <source src={asset.url} type="video/mp4" />
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    )
                                                } else if (asset.type == "image") {
                                                    return <img key={i + "asset"} src={asset.url} onClick={() => navigate(`/projects/${project.name}`)} />
                                                }
                                            })}
                                        </div>}
                                    </ProjectOverlay>
                                    <div key={i} id={"tile" + i} className={`${view == "tile" ? styles.card : ""} ${view == "list" ? styles.listItem : ""}`} data-role={project.category} data-role2={project.subCategory} onClick={() => setOverlay(project.name)}>
                                        {view == "tile" && <video controlsList="nodownload" loading="lazy" muted autoPlay={true} playsinline loop id="myVideo">
                                            <source src={project.preview.url} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>}
                                        <p>
                                            {project.name}
                                            {view == "list" && project.preview.url.slice(-4)}
                                        </p>
                                        {view == "list" && (<>
                                            <p>{project.category}</p>
                                            <p>{project.subCategory}</p>
                                        </>)}
                                    </div>
                                </div>
                            </>)
                        } else if (project.preview.type == "image" && (activeFilter || project.category == activeFilter)) {
                            return (
                                <div key={i}>
                                    <ProjectOverlay autoScrollOnOpen={autoScrollOnOpen} setAutoScrollOnOpen={setAutoScrollOnOpen} linkInternal={project.name} linkExternal={project.hostedAt} active={overlay == project.name} setActive={setOverlay}>
                                        {overlay == project.name && <div data-role={project.category} data-role2={project.subCategory}>
                                            <img key={i} onClick={() => navigate(`/projects/${project.name}`)} src={project.preview.url} />
                                            {project.assets && project.assets.length > 0 && project.assets.map((asset, i) => {
                                                if (asset.type == "video") {
                                                    return (
                                                        <video controlsList="nodownload" loading="lazy" key={i + "asset"} onClick={() => navigate(`/projects/${project.name}`)} autoPlay={true} muted loop id="myVideo">
                                                            <source src={asset.url} type="video/mp4" />
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    )
                                                } else if (asset.type == "image") {
                                                    return <img loading="lazy" key={i + "asset"} src={asset.url} onClick={() => navigate(`/projects/${project.name}`)} />
                                                }
                                            })}
                                        </div>}
                                    </ProjectOverlay>
                                    <div key={i} id={"tile" + i} className={`${view == "tile" ? styles.card : ""} ${view == "list" ? styles.listItem : ""}`} data-role={project.category} data-role2={project.subCategory} onClick={() => setOverlay(project.name)}>
                                        {view == "tile" && <img loading="lazy" src={project.preview.url} />}
                                        <p>
                                            {project.name}
                                            {view == "list" && project.preview.url.slice(-4)}
                                        </p>
                                        {view == "list" && (<>
                                            <p>{project.category}</p>
                                            <p>{project.subCategory}</p>
                                        </>)}
                                    </div>
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