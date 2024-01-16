import React from "react";

import { FaGithub, FaCode, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdHomeFilled } from "react-icons/md";
import { GrSend } from "react-icons/gr";

//this is to keep all react-icons imports in one place as to always use the same icons throughout project.
const Icon = ({ name }) => {
    let iconComponent = null;

    switch (name) {
        case "MdHomeFilled":
            iconComponent = <MdHomeFilled />;
            break;
        case "FaLinkedin":
            iconComponent = <FaLinkedin />;
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
        case "GrSend":
            iconComponent = <GrSend />;
            break;
        default:
            throw new Error(`Invalid icon name: ${name}`);
    }

    return iconComponent;
};

export default Icon;
