import React, { useEffect, useState } from 'react';
import Icon from './Icon';
import styles from "../styles/modules/sidebar.module.css";
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode, useThemeColor } from '..';
import { IoMdSettings } from "react-icons/io";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaCodepen } from "react-icons/fa";

import ToggleSwitch from './ToggleSwitch';
import DropdownMenu from './DropdownMenu';
import ColorWheel from './ColorWheel';


const Sidebar = ({ collapse }) => {
    const { primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor } = useThemeColor();
    const location = useLocation()
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [settingsDropdown, setSettingsDropdown] = useState(false)
    const [activeTab, setActiveTab] = useState(location.pathname.slice(1))

    useEffect(() => {
        const wordsArray = location.pathname.slice(1).split('/');
        const firstWord = wordsArray[0];
        setActiveTab(firstWord)
    }, [location])

    return (
        <nav className={styles.sidebar} onClick={collapse}>
            <ul>
                <span>
                    <li aria-label='Home' label-position="left" className={!activeTab ? styles.activeTab : ""}>
                        <Link to="/" >
                            <Icon name={"MdHomeFilled"} />
                        </Link>
                    </li>
                    <li aria-label='Contact' label-position="left" className={activeTab == "contact" ? styles.activeTab : ""}>
                        <Link to="/contact">
                            <Icon name={"MdEmail"} />
                        </Link>
                    </li>
                    <li aria-label='Projects' label-position="left" className={(activeTab == "all" || activeTab == "projects" || activeTab == "live" || activeTab == "sideProjects") ? styles.activeTab : ""}>
                        <Link to="/all" >
                            <Icon name={"FaCode"} />
                        </Link>
                    </li>
                </span>
                <span>
                    <li aria-label='Github' label-position="left">
                        <Link to="https://github.com/noodlebenji2960" target="_blank" rel="noopener noreferrer">
                            <Icon name={"FaGithub"} />
                        </Link>
                    </li>
                    <li aria-label='Codepen' label-position="left">
                        <Link to="https://codepen.io/noodlebenji2960" target="_blank" rel="noopener noreferrer">
                            <FaCodepen />
                        </Link>
                    </li>
                    <li>
                        <Link onClick={(e) => {
                            e.preventDefault()
                            setSettingsDropdown(prev => !prev)
                        }}>
                            <IoMdSettings />
                        </Link>
                        <DropdownMenu active={settingsDropdown} setActive={setSettingsDropdown}>
                            <span>
                                <ToggleSwitch id={"darkMode"} isChecked={isDarkMode} onChange={toggleDarkMode} checkedIcon={<MdLightMode />} unCheckedIcon={<MdDarkMode />} />
                            </span>
                            <span>
                                <ColorWheel color={primaryColor} setColor={setPrimaryColor} />
                                <ColorWheel color={secondaryColor} setColor={setSecondaryColor} />
                            </span>
                        </DropdownMenu>
                    </li>
                </span>
            </ul>
        </nav >
    );
}

export default Sidebar;
