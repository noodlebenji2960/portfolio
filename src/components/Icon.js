import React from "react";

import { FaGithub, FaCode } from "react-icons/fa";
import { MdEmail, MdHomeFilled } from "react-icons/md";

//this is to keep all react-icons imports in one place as to always use the same icons throughout project.
const Icon = ({ name }) => {
    let iconComponent = null;

    switch (name) {
        case "MdHomeFilled":
            iconComponent = <MdHomeFilled />;
            break;
        case "FaGithub":
            iconComponent = <FaGithub />;
            break;
        case "FaCode":
            iconComponent = <FaCode />;
            break;
        case "MdEmail":
            iconComponent = <MdEmail />;
            break;
        default:
            throw new Error(`Invalid iconName: ${name}`);
    }

    return iconComponent;
};

export default Icon;
