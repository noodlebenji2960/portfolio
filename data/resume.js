export const resumeData = {
    age: `${Math.floor((new Date() - new Date("03/05/1989")) / (365.25 * 24 * 60 * 60 * 1000))}`,
    location: {
        current: "Spain",
        birth: "UK."
    },
    about: "Self-taught web developer passionate about creating seamless and visually compelling online experiences. Well experienced working both independently or in a team.",
    skills: ["HTML", "CSS", "React", "Bootstrap", "Webpack", "Vite", "Babel", "Node.js", "express.js", "MongoDB", "Google Firebase", "Jest.js", "Git", "Github", "Figma", "GIMP", "Inkscape", "Adobe Phooshop", "Adobe Illustrator", "Visual Studio Code", "Microsoft Office"],
    experience: [
        {
            title: "Graphic Designer",
            company: "Basick design",
            year: "2016 - Present",
            description: "Design various branding images using modern imaging technologies",
        },
        {
            title: "Junior Web Developer",
            company: "Bastinet",
            year: "2023 - Present",
            description: "Develop, launch and maintain websites using modern web technologies.",
        },
    ],
    education: [
        {
            degree: "Bachelor of Science in Graphic Communication",
            location: "Norwich University of Arts, Norwich, UK",
        },
        {
            degree: "Interactive Media",
            location: "West Suffolk College, Suffolk, UK",
        },
    ],
    languages: [
        "English", "Español"
    ],
    courses: [
        {
            certificate: "Fullstack Web Development",
            location: "The Odin Project",
        },
        {
            certificate: "MongoDB Atlas",
            location: "MongoDb Online",
        },
    ],
};