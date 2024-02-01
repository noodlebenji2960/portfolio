import battleshipImage1 from "../public/assets/works/projects/battleships.png"

import papyrusBlogVideo1 from "../public/assets/works/projects/papyrusBlog.mp4"
import papyrusBlogVideo2 from "../public/assets/works/projects/papyrusBlog2.mp4"

import wimmelbildVideo from "../public/assets/works/projects/wimmelbild.mp4"
import wimmelbildImage1 from "../public/assets/works/projects/wimmelbild2.jpg"
import wimmelbildImage2 from "../public/assets/works/projects/wimmelbild3.jpg"
import wimmelbildImage3 from "../public/assets/works/projects/wimmelbild4.jpg"

import ticTacToeVideo from "../public/assets/works/projects/tic-tac-toe.mp4"


import knightsVideo from "../public/assets/works/projects/knight.mp4"
import knightsImage1 from "../public/assets/works/projects/knight1.avif"

import cardsVideo from "../public/assets/works/projects/3dCards.mp4"
import cardsImage1 from "../public/assets/works/projects/3dCards.png"

import chessVideo from "../public/assets/works/projects/chess.mp4"
import chessImage1 from "../public/assets/works/projects/chess.png"

import etchASketchVideo from "../public/assets/works/projects/etchASketch.mp4"
import etchASketchImage1 from "../public/assets/works/projects/etchASketch1.png"

import facebookClone from "../public/assets/works/projects/facebookclone.png"

import imageSlider from "../public/assets/works/projects/imageSlider.mp4"

import messageBoardVideo from "../public/assets/works/projects/messageBoard.mp4"
import messageBoardImage1 from "../public/assets/works/projects/miniMessageBoard1.png"
import messageBoardImage2 from "../public/assets/works/projects/miniMessageBoard2.png"
import messageBoardImage3 from "../public/assets/works/projects/miniMessageBoard3.png"

import rambleLogVideo1 from "../public/assets/works/projects/roadTripApp.mp4"
import rambleLogImage1 from "../public/assets/works/projects/rambleLog1.png"
import rambleLogImage2 from "../public/assets/works/projects/rambleLog2.png"

import redditClone from "../public/assets/works/projects/redditclone.mp4"

import spaceInvadersVideo from "../public/assets/works/projects/spaceInvaders.mp4"
import spaceInvadersImage1 from "../public/assets/works/projects/spaceInvaders1.svg"

export const sideProjects = [
    {
        name: "reddit clone",
        frameworks:[
            "HTML", "CSS", "JS", "React", "Express", "Node", "MongoDB"
        ],
        category: "sideProjects",
        subCategory: "game",
        tagline: "",
        description: "A side project nestled within the realm of innovative gaming experiences. This project, coded with passion and creativity, reimagines the essence of Reddit in the form of an engaging game. As a part of the broader category of side projects, this endeavor combines the dynamic elements of social interaction and gaming to offer users a unique and immersive experience.",
        preview: {
            type: "video",
            url: redditClone
        },
        github: "https://github.com/noodlebenji2960/gballotments",
        hostedAt: "https://github.com/noodlebenji2960/reddit-clone",
    },
    {
        name: "👾space invaders",
        frameworks:[
            "HTML", "CSS", "JS"
        ],
        category: "sideProjects",
        subCategory: "game",
        tagline: "",
        description: "Space Invaders is a classic arcade-style game where players take on the role of a lone defender tasked with protecting Earth from an alien invasion. Inspired by the iconic retro game, this project aims to bring the nostalgia of the original Space Invaders while incorporating modern elements to enhance the gaming experience. Dodge incoming alien attacks, shoot down enemy spaceships, and strive to achieve the highest score possible.\n\nKey Features:\n- Classic Gameplay: Experience the timeless joy of the original Space Invaders with familiar mechanics and controls.\n- Modern Twist: Enjoy updated graphics and smooth gameplay, combining the best of both worlds.\n- Alien Variety: Encounter different types of alien invaders, each with its own unique behavior and challenges.\n- Power-ups: Collect power-ups to enhance your firepower and increase your chances of survival.\n- Endless Fun: Test your skills in an endless wave of alien invaders, with increasing difficulty as you progress.\n\nThis project is open-source, and the code is available on GitHub for anyone interested in exploring or contributing to the development. Feel free to check out the source code and contribute to the evolution of this classic game.\n",
        preview: {
            type: "image",
            url: spaceInvadersImage1
        },
        github: "https://github.com/noodlebenji2960/gballotments",
        hostedAt: "https://www.gballotments.org/",
        assets: [
            {
                type:"video",
                url: spaceInvadersVideo,
                description: "Watch a preview of the gameplay and get ready for an intergalactic adventure!"
            },
        ]
    },
    {
        name: "rambleLog",
        frameworks:[
            "HTML", "CSS", "JS", "React", "Express", "Node", "MongoDB"
        ],
        category: "sideProjects",
        subCategory: "webDev",
        tagline: "",
        description: "Capture and Share Your Thoughts with RambleLog!",
        description: "RambleLog is a web-based platform that allows users to capture and share their thoughts, ideas, and experiences in a simple and elegant way. Whether you want to maintain a personal journal, share travel experiences, or document your learning journey, RambleLog provides a user-friendly interface to help you express yourself.\n\nKey Features:\n- Intuitive Interface: Enjoy a clean and intuitive user interface that makes it easy to create and manage your log entries.\n- Multimedia Support: Enhance your entries by attaching images, providing a visual context to your written content.\n- Video Entries: Record and embed videos directly into your log, bringing your experiences to life.\n- Social Sharing: Share your log entries on social media or with friends, allowing you to connect and engage with your audience.\n- Privacy Controls: Customize the visibility of your entries, keeping them private or sharing them with the world.\n\nFeel free to explore the project on GitHub, where the source code is available for review and contribution. Start documenting your journey with RambleLog today!",
        preview: {
            type: "video",
            url: rambleLogVideo1
        },
        github: "https://github.com/noodlebenji2960/gballotments",
        hostedAt: "https://www.gballotments.org/",
        assets: [
            {
                type:"image",
                url: rambleLogImage1,
                description: "Capture your moments with images in RambleLog."
            },
            {
                type:"image",
                url: rambleLogImage2,
                description: "Express yourself with a variety of multimedia content in your log entries."
            },
        ]
    },
    {
        name: "message board",
        frameworks:[
            "HTML", "CSS", "JS", "React", "Express", "Node", "MongoDB"
        ],
        category: "sideProjects",
        subCategory: "webDev",
        tagline: "",
        description: "The Message Board project is a versatile web application that facilitates communication and collaboration within a community. Whether you want to discuss various topics, share information, or seek assistance, the Message Board provides an interactive platform for users to engage with one another.\n\nKey Features:\n- Threaded Discussions: Organize conversations into threads to keep discussions on specific topics focused and accessible.\n- Multimedia Support: Enrich your messages by including images and videos, enhancing the overall communication experience.\n- User Profiles: Create personalized profiles, allowing users to get to know each other within the community.\n- Moderation Tools: Implement moderation features to ensure a positive and respectful community environment.\n- Responsive Design: Enjoy a seamless experience across devices with a responsive and user-friendly interface.\n\nExplore the project on GitHub to review the source code and contribute to the development. Start building a vibrant community with the Message Board!",
        preview: {
            type: "image",
            url: messageBoardImage3
        },
        github: "https://github.com/noodlebenji2960/gballotments",
        hostedAt: "https://www.gballotments.org/",
        assets: [
            {
                type:"video",
                url: messageBoardVideo,
                description: "Watch a preview of the Message Board in action and discover its communication capabilities."
            },
            {
                type:"image",
                url: messageBoardImage1,
                description: "Engage in discussions and share your thoughts with the community."
            },
            {
                type:"image",
                url: messageBoardImage2,
                description: "Connect with like-minded individuals and foster meaningful conversations."
            }
        ]
    },
    {
        name: "📸 image carousel",
        frameworks:[
            "HTML", "CSS", "JS", "React"
        ],
        category: "sideProjects",
        subCategory: "webDev",
        tagline: "",
        description: "The Image Carousel project is a dynamic web component designed to showcase a collection of images in an interactive and visually appealing way. Whether you want to highlight a portfolio, display product images, or create an engaging photo gallery, the Image Carousel provides a seamless and elegant solution.\n\nKey Features:\n- Responsive Design: Ensure an optimal viewing experience across various devices, from desktops to smartphones.\n- Smooth Transitions: Enjoy smooth and eye-catching transitions between images, creating a captivating user experience.\n- Customizable Settings: Tailor the carousel to your needs with adjustable settings for navigation, autoplay, and more.\n- Thumbnail Navigation: Include thumbnail previews to allow users to navigate easily and choose specific images.\n- Accessibility: Implement accessibility features to ensure that the carousel is usable by a wide audience.\n\nExplore the project on GitHub, where the source code is available for review and contribution. Elevate your web projects with the immersive Image Carousel!",
        preview: {
            type: "video",
            url: imageSlider
        },
        github: "https://github.com/noodlebenji2960/gballotments",
        hostedAt: "https://www.gballotments.org/",
    },
    {
        name: "facebook clone",
        frameworks:[
            "HTML", "CSS", "JS", "React", "Express", "Node", "MongoDB"
        ],
        category: "sideProjects",
        subCategory: "webDev",
        tagline: "",
        description: "The Facebook Clone project is a web application that replicates the essential features of the popular social media platform, allowing users to connect, share, and interact in a familiar environment. Dive into the world of social media development and explore the functionality of a Facebook-inspired platform.\n\nKey Features:\n- User Profiles: Create and customize user profiles to showcase personal information, interests, and connections.\n- News Feed: Experience a dynamic news feed that displays posts, updates, and activities from friends and connections.\n- Post Creation: Share text updates, photos, and videos with your network, fostering communication and engagement.\n- Friend Requests: Connect with other users through friend requests, building a social network.\n- Notifications: Stay informed about interactions, comments, and likes with real-time notifications.\n\nFeel free to explore the project on GitHub, where the source code is available for review and contribution. Create your social media experience with the Facebook Clone!",
        preview: {
            type: "image",
            url: facebookClone
        },
        github: "https://github.com/noodlebenji2960/gballotments",
        hostedAt: "https://www.gballotments.org/",
    },
    {
        name: "etch-a-sketch",
        frameworks:[
            "HTML", "CSS", "JS"
        ],
        category: "sideProjects",
        subCategory: "game",
        tagline: "",
        description: "Etch-a-Sketch brings the classic drawing toy into the digital realm, offering users a fun and interactive platform to create digital artwork. Use the arrow keys or on-screen controls to draw lines, shapes, and patterns, and watch your creations come to life in this nostalgic and innovative project.\n\nKey Features:\n- Intuitive Controls: Use familiar arrow keys or on-screen controls to navigate and draw on the digital canvas.\n- Shake to Clear: Emulate the classic Etch-a-Sketch experience by shaking the screen to erase your masterpiece and start anew.\n- Save and Share: Save your digital drawings and share your artistic creations with friends and the online community.\n- Color Palette: Choose from a variety of colors to add vibrancy and expressiveness to your digital sketches.\n\nExplore the project on GitHub, where the source code is available for review and contribution. Join the fun and let your creativity flow with the Digital Etch-a-Sketch!",
        preview: {
            type: "image",
            url: etchASketchImage1
        },
        github: "https://github.com/noodlebenji2960/gballotments",
        hostedAt: "https://www.gballotments.org/",
        assets: [
            {
                type: "video",
                url: etchASketchVideo,
                description: "Watch a preview of the Etch-a-Sketch in action and see how it brings the classic drawing experience to the digital world."
            }
        ]
    },
    {
        name: "♛ chess",
        frameworks : [
            "HTML", "CSS", "JS"
        ],
        category: "sideProjects",
        subCategory: "game",
        tagline: "",
        description: "Experience the timeless game of chess in a digital format that combines classic gameplay with modern features. This project brings the age-old game of strategy to the digital realm, allowing players to engage in challenging matches, learn new tactics, and enjoy the art of chess.\n\nKey Features:\n- Classic Gameplay: Enjoy the traditional rules and movements of chess, providing an authentic chess-playing experience.\n- Single and Multiplayer Modes: Play against a computer opponent for solo challenges or engage in online multiplayer matches against friends or other chess enthusiasts.\n- Tutorial and Analysis: Improve your skills with a built-in tutorial and analysis features that help players understand strategic moves and tactics.\n- Responsive Design: Experience a responsive and user-friendly interface across various devices.\n\nFeel free to explore the project on GitHub, where the source code is available for review and contribution. Challenge yourself or play against friends in the digital realm of strategic warfare with Chess!",
        preview: {
            type: "image",
            url: chessImage1
        },
        github: "https://github.com/noodlebenji2960/gballotments",
        hostedAt: "https://www.gballotments.org/",
        assets: [
            {
                type: "video",
                url: chessVideo,
                description: "Watch a preview of the Chess project and see the digital chessboard come to life in strategic battles."
            }
        ]
    },
    {
        name: "papyrusBlog",
        frameworks:[
            "HTML", "CSS", "JS", "React", "Express", "Node", "MongoDB"
        ],
        category: "sideProjects",
        subCategory: "webDev",
        tagline: "React blogging CMS API",
        description: "The backend powerhouse behind a personal writing blog dedicated to creativity and self-expression. As the architect of this writing sanctuary, my primary goal was to provide a robust API that seamlessly integrates with the personal blog. The API facilitates smooth content management, enabling the author to effortlessly publish, edit, and organize their literary creations. Designed with simplicity and efficiency in mind, the API supports various content formats and ensures a frictionless writing experience. It also incorporates authentication and authorization mechanisms, safeguarding the author's creative endeavors. [Writer's Haven API] embodies the commitment to empowering writers with a reliable and intuitive backend system for their personal writing journey.",
        preview: {
            type: "video",
            url: papyrusBlogVideo1
        },
        github: "https://github.com/noodlebenji2960/gballotments",
        hostedAt: "https://www.gballotments.org/",
        assets: [
            {
                type: "video",
                url: papyrusBlogVideo2,
                description: "Discover the features and functionality of the PapyrusBlog API in action."
            }
        ]
    },
    {
        name: "wimmelbild",
        frameworks:[
            "HTML", "CSS", "JS", "React", "Express", "Node", "Firebase"
        ],
        category: "sideProjects",
        subCategory: "webDev",
        tagline: "Marvel themed wimmelbild powered by Google Firebase",
        description: `A captivating online experience where the enchanting world of "Wimmelbild" (hidden object) games meets the power of Google Firebase. As the developer behind this interactive masterpiece, I've harnessed Firebase's dynamic features to create a seamless gaming environment. The website effortlessly synchronizes game progress across devices, allowing players to embark on their hidden object quests from anywhere. Leveraging real-time databases, the game world evolves dynamically, providing a unique adventure for each player. Firebase's authentication ensures a secure and personalized gaming experience. Join us on [Firebase Wimmelbild Adventure] for an immersive journey where the magic of Wimmelbild games meets the versatility of Google Firebase technology.`,
        preview: {
            type: "video",
            url: wimmelbildVideo
        },
        github: "https://github.com/noodlebenji2960/wimmelbild",
        hostedAt: "https://noodlebenji2960.github.io/wimmelbild/",
        assets: [
            {
                type: "image",
                url: wimmelbildImage1,
                description: "Embark on a hidden object quest in the Marvel-themed Wimmelbild game."
            },
            {
                type: "image",
                url: wimmelbildImage2,
                description: "Discover hidden objects and unravel the magic of the Wimmelbild adventure."
            },
            {
                type: "image",
                url: wimmelbildImage3,
                description: "Experience a visually stunning and captivating gaming environment."
            }
        ]
    },
    {
        name: "ticTacToe",
        frameworks: [
            "HTML", "CSS", "JS"
        ],
        category: "sideProjects",
        subCategory: "webDev",
        tagline: "Tic-tac-toe ai game using a min max algo",
        description: `A game that combines the classic Tic-Tac-Toe with the MinMax algorithm. I've implemented a MinMax algorithm. The game not only tests strategic thinking but also delights with visually appealing animations that breathe life into a classic game. What is the minMax algo? The Minimax algorithm is a decision-making algorithm commonly used in two-player, zero-sum games, such as chess or tic-tac-toe. The primary objective of Minimax is to find the optimal strategy for a player, considering all possible moves and their potential outcomes. The algorithm operates on a recursive tree-like structure, where nodes represent different game states, and edges represent possible moves. Minimax alternates between maximizing and minimizing players, evaluating each potential move based on a scoring system. The algorithm assumes that both players make optimal decisions, aiming to minimize the possible loss for the worst-case scenario and maximize potential gain for the best-case scenario. Despite its simplicity, Minimax provides a robust framework for decision-making in adversarial games, ensuring strategic depth and competitive gameplay.`,
        preview: {
            type: "video",
            url: ticTacToeVideo
        },
        github: "https://github.com/noodlebenji2960/gballotments",
        hostedAt: "https://www.gballotments.org/"
    },
    {
        name: "knights",
        frameworks: [
            "HTML", "CSS", "JS"
        ],
        category: "sideProjects",
        subCategory: "webDev",
        tagline: "Solving the knight travails problem with algorithm",
        description: `Insights into the algorithmic magic behind solving the Knight's Travails problem.`,
        preview: {
            type: "image",
            url: knightsImage1
        },
        github: "https://github.com/noodlebenji2960/gballotments",
        hostedAt: "https://www.gballotments.org/",
        assets:
            [
                {
                    type: "video",
                    url: knightsVideo,
                    description: "Watch a video demonstration of the algorithm in action and witness the knight's strategic traversal on the chessboard."
                },
            ]
    },
    {
        name: "cards",
        frameworks: [
            "HTML", "CSS", "JS"
        ],
        category: "sideProjects",
        subCategory: "webDev",
        tagline: "3D card interaction using vanilla CSS/Javascript",
        description: `This interactive animation illustrates the relative beauty of 3D graphics in css and so, provides users with an engaging and tactile exploration. `,
        preview: {
            type: "video",
            url: cardsVideo
        },
        github: "https://github.com/noodlebenji2960/gballotments",
        hostedAt: "https://www.gballotments.org/",
        assets: [
            {
                type: "image",
                url: cardsImage1,
                description: "Engage with visually stunning 3D card animations in this interactive exploration."
            },
            {
                type: "codepen",
                url: "https://codepen.io/noodlebenji2960/embed/BaqGjoq?default-tab=html&theme-id=light",
                description: ""
            }
        ]
    },
    {
        name: "Battleship",
        frameworks: [
            "HTML", "CSS", "JS"
        ],
        category: "sideProjects",
        subCategory: "game",
        tagline: "",
        description: `  Battleship is a timeless board game that has been enjoyed for generations. In this digital adaptation, players can engage in thrilling naval battles against a computer opponent. The game features an intuitive user interface and responsive design, ensuring an immersive experience across various devices.
        
                        Key Features:

                        Interactive Gameplay: Experience the thrill of taking turns to strategically deploy your fleet and target the enemy's ships.
                        Responsive Design: Play seamlessly on desktops, tablets, and mobile devices, thanks to a responsive and visually appealing layout.
                        GitHub Repository: Explore the codebase, contribute, or fork the project on GitHub to enhance the game or customize it to your liking.
                        Live Demo: Test your strategic skills by playing the game live on the hosted platform.
                        How to Play:

                        Head to the Live Demo.
                        Strategically place your fleet on the board.
                        Take turns with the computer opponent to guess the coordinates and sink their ships.
                        The first to sink the entire enemy fleet emerges victorious!
                        Conclusion:
                        Battleship is not just a game; it's a testament to my commitment to creating engaging and interactive web experiences. Whether you're a fan of classic board games or looking for a fun online diversion, my Battleship game is sure to provide hours of strategic entertainment. Check out the GitHub repository to explore the code and contribute to the project.`,
        preview: {
            type: "image",
            url: battleshipImage1
        },
        github: "https://github.com/noodlebenji2960/battleships-TOP/",
        hostedAt: "https://noodlebenji2960.github.io/battleships-TOP/",
    },
]

