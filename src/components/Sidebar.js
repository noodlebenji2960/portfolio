import React, { useEffect, useState } from 'react';
import Icon from './Icon';
import styles from "../styles/modules/sidebar.module.css";
import { Link } from 'react-router-dom';
import { useDarkMode } from '..';
import { IoMdSettings } from "react-icons/io";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import ToggleSwitch from './ToggleSwich';
import DropdownMenu from './DropdownMenu';
import { LiquidControl } from './Liquid';


function Sidebar({follows, setFollows, bgOn, setBgOn, liquidAmount, setLiquidAmount}) {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [settingsDropdown, setSettingsDropdown] = useState(false)

    return (
        <nav className={styles.sidebar}>
            <ul>
                <li aria-label='Home' label-position="left">
                    <Link to="/">
                        <Icon name={"MdHomeFilled"} />
                    </Link>
                </li>
                <li aria-label='Projects' label-position="left">
                    <Link to="/projects">
                        <Icon name={"FaCode"} />
                    </Link>
                </li>
                <li aria-label='Contact' label-position="left">
                    <Link to="/contact">
                        <Icon name={"MdEmail"} />
                    </Link>
                </li>
                <li aria-label='Github' label-position="left">
                    <Link to="/github">
                        <Icon name={"FaGithub"} />
                    </Link>
                </li>
            </ul>
            <button onClick={()=>setSettingsDropdown(true)}>
                <IoMdSettings/>
            </button>
            <DropdownMenu active={settingsDropdown} setActive={setSettingsDropdown}>
                <ToggleSwitch id={"darkMode"} isChecked={isDarkMode} onChange={toggleDarkMode} checkedIcon={<MdLightMode/>} unCheckedIcon={<MdDarkMode/>} aria-label={`Darkmode: ${isDarkMode ? "inactive" : "active"}`} label-position={"left"} />
                <LiquidControl follows={follows} setFollows={setFollows} bgOn={bgOn} setBgOn={setBgOn} liquidAmount={liquidAmount} setLiquidAmount={setLiquidAmount}/>
            </DropdownMenu>
        </nav>
    );
}

export default Sidebar;
