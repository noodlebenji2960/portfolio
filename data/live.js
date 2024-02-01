import gbAllotmentsVideo from "../public/assets/works/live/gbAllotments.mp4"
import gbAllotmentsImage1 from "../public/assets/works/live/gbAllotments1.png"
import gbAllotmentsImage2 from "../public/assets/works/live/gbAllotments2.png"
import gbAllotmentsImage3 from "../public/assets/works/live/gbAllotments3.png"
import gbAllotmentsImage4 from "../public/assets/works/live/gbAllotments4.png"
import gbAllotmentsImage5 from "../public/assets/works/live/gbAllotments5.png"

import DNShopVideo from "../public/assets/works/live/DNshop.mp4"
import DNShopImage1 from "../public/assets/works/live/DNShop1.jpg"
import DNShopImage2 from "../public/assets/works/live/DNshop2.png"
import DNShopImage3 from "../public/assets/works/live/DNshop3.png"
import DNShopImage5 from "../public/assets/works/live/DNshop5.png"
import DNShopImage6 from "../public/assets/works/live/DNShop6.png"
import DNShopImage8 from "../public/assets/works/live/DNshop8.png"
import DNShopImage9 from "../public/assets/works/live/DNshop9.png"
import DNShopImage10 from "../public/assets/works/live/DNshop10.png"
import DNShopImage11 from "../public/assets/works/live/DNshop11.png"
import DNShopImage12 from "../public/assets/works/live/DNShop12.jpg"
import DNShopImage13 from "../public/assets/works/live/DNShop13.png"


export const liveProjects = [
    {
        name: "gbAllotments",
        frameworks:[
            "HTML", "CSS", "JS", "React",
        ],
        category: "live",
        subCategory: "webDev",
        tagline: "React SPA Community Allotment website for Great Barton Allotments",
        description: "Your online gateway to the world of sustainable gardening and community cultivation. As the web developer behind this verdant digital space, my focus was on cultivating a user experience that mirrors the essence of allotment living. The website features a responsive design, ensuring accessibility across devices for gardening enthusiasts. Navigating through the site's earthy aesthetic and intuitive layout, users can effortlessly explore resources, share gardening tips, and connect with like-minded individuals. Behind the scenes, the site's performance is cultivated for swift loading, with optimized assets and a structured layout. Security measures are rooted deeply to protect user data. [Allotments Website] embodies a commitment to fostering a green and thriving online community dedicated to the art of sustainable gardening.",
        preview: {
            type: "video",
            url: gbAllotmentsVideo
        },
        github: "https://github.com/noodlebenji2960/gballotments",
        hostedAt: "http://www.gballotments.org/",
        assets: [
                {
                    type: "image",
                    url: gbAllotmentsImage1,
                    description: "Dive into the community's constitution page, understanding the principles and guidelines that govern this green space."
                },
                {
                    type: "image",
                    url: gbAllotmentsImage2,
                    description: "Explore an interactive photo gallery, capturing the beauty of allotment life through captivating images shared by community members."
                },
                {
                    type: "image",
                    url: gbAllotmentsImage3,
                    description: "Delve into an interactive growing guide, providing valuable information on various vegetables and plants to aid gardeners in their cultivation journey."
                },
                {
                    type: "image",
                    url: gbAllotmentsImage4,
                    description: "Learn about planting and harvesting seasons, enriching your gardening knowledge with a detailed guide tailored to specific species."
                },
                {
                    type: "image",
                    url: gbAllotmentsImage5,
                    description: 
                        `Leveraging Wikipedia API, this section provides in-depth descriptions of chosen plant species, enhancing the user's understanding of the green companions in their allotment.`
                },
            ]
    },
    {
        name: "DN Shop - Moda y Estilisimo",
        frameworks:[
            "HTML", "CSS", "JS", "React", "Stripe"
        ],
        category: "live",
        subCategory: "webDev",
        tagline: "",
        description: "Explore the world of fashion and style with DN Shop - Moda y Estilisimo, a vibrant and dynamic online shopping platform. This live project brings the latest trends and fashion-forward styles directly to your fingertips. From clothing and accessories to beauty products, DN Shop caters to your fashion needs with a seamless and visually appealing online shopping experience.\n\nKey Features:\n- Trendy Fashion Collections: Browse through curated collections of the latest fashion trends and styles.\n- Responsive Design: Enjoy a user-friendly and responsive design that adapts to various devices for a seamless shopping experience.\n- Visual Appeal: Immerse yourself in the visually stunning layout and presentation of fashion products.\n- Easy Navigation: Effortlessly explore different categories and find your perfect fashion items with intuitive navigation.\n\nVisit DN Shop - Moda y Estilisimo to elevate your fashion sense and discover the perfect additions to your wardrobe.",
        preview: {
            type: "video",
            url: DNShopVideo
        },
        github: "https://github.com/noodlebenji2960/gballotments",
        hostedAt: "https://www.gballotments.org/",
        assets: [
                {
                    type: "image",
                    url: DNShopImage1,
                    description: "Immerse yourself in the world of fashion with high-quality images that showcase the products in their full glory."
                },
                {
                    type: "image",
                    url: DNShopImage2,
                    description: "Experience an interactive and animated menu design that enhances the user experience without being distracting."
                },
                {
                    type: "image",
                    url: DNShopImage3,
                    description: "Explore the catalogue with a design that exemplifies good use of space and maintains order for a pleasant browsing experience."
                },
                {
                    type: "image",
                    url: DNShopImage12,
                    description: "Delight in the use of photography with appropriate salmon pink and bohemian colors, creating a visually appealing aesthetic."
                },
                {
                    type: "image",
                    url: DNShopImage13,
                    description: "The shopping cart comes to life with a scroll animation, adding a touch of dynamism to the shopping process."
                },
                {
                    type: "image",
                    url: DNShopImage5,
                    description: "The contact page is organized with a map, opening times, and a convenient textarea for quick access, ensuring seamless communication."
                },
                {
                    type: "image",
                    url: DNShopImage6,
                    description: "Spring filter header"
                },
                {
                    type: "image",
                    url: DNShopImage8,
                    description: "Summer filter header"
                },
                {
                    type: "image",
                    url: DNShopImage9,
                    description: "Autumn filter header"
                },
                {
                    type: "image",
                    url: DNShopImage10,
                    description: "Winter filter header"
                },
                {
                    type: "image",
                    url: DNShopImage11,
                    description: "Casual filter header"
                }
            ]
    },
]