import React, {useState, useEffect} from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md"
import styles from "../styles/modules/ToggleSwitch.module.css"

const ToggleSwitch = ({id, isChecked, onChange, checkedIcon, unCheckedIcon, ...props}) => {
    const [checked, setChecked]=useState(isChecked)
    useEffect(()=>{
        setChecked(isChecked)
    },[isChecked])
    return (
        <label>
        <div className={styles.toggleSwitch} {...props}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>
                <div>
                    {isChecked ? checkedIcon : unCheckedIcon}
                </div>
            </label>
        </div>
    </label>
    )
}

export default ToggleSwitch