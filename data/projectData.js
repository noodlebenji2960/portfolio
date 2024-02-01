import { designProjects } from "./design.js"
import { sideProjects } from "./projects.js"
import { liveProjects } from "./live.js"

export const projectDataArray = designProjects.concat(sideProjects, liveProjects);