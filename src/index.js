import React, { useEffect, useState, createContext, useContext, useRef } from "react";
import ReactDOM from "react-dom/client";
import {
    createHashRouter,
    createRoutesFromElements,
    RouterProvider,
    Outlet,
    Route,
    useLocation,
} from "react-router-dom";

import "./styles/reset.css"
import "./styles/vars.css"
import "./styles/global.css"

import ErrorPage from "./routes/ErrorPage";
import Sidebar from "./components/Sidebar";
import IndexPage from "./routes/IndexPage";
import ProjectPage from "./routes/ProjectPage";
import Header from "./components/Header";
import ProjectsPage from "./routes/ProjectsPage";
import ContactPage from "./routes/ContactPage";
import NotFoundPage from "./routes/NotFoundPage";
import { hexToRgb } from "./components/ColorWheel";

const getCSSValues = () => {
    // Get the root element of the document (usually <html>)
    const root = document.documentElement;

    // Get the computed style of the root element
    const computedStyle = window.getComputedStyle(root);

    // Retrieve the value of the specified CSS variable
    const primaryR = computedStyle.getPropertyValue(`--primary-hue-theme-r`).trim();
    const primaryG = computedStyle.getPropertyValue(`--primary-hue-theme-g`).trim();
    const primaryB = computedStyle.getPropertyValue(`--primary-hue-theme-b`).trim();
    const primaryA = computedStyle.getPropertyValue(`--primary-hue-theme-a`).trim();

    const secondaryR = computedStyle.getPropertyValue(`--secondary-hue-theme-r`).trim();
    const secondaryG = computedStyle.getPropertyValue(`--secondary-hue-theme-g`).trim();
    const secondaryB = computedStyle.getPropertyValue(`--secondary-hue-theme-b`).trim();
    const secondaryA = computedStyle.getPropertyValue(`--secondary-hue-theme-a`).trim();

    const primary = { r: primaryR, g: primaryG, b: primaryB, a: primaryA }
    const secondary = { r: secondaryR, g: secondaryG, b: secondaryB, a: secondaryA }


    return { primary, secondary }
}

// Define a context for your theme
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const cssVals = getCSSValues()
    const [primaryColor, setPrimaryColor] = useState(cssVals.primary);
    const [secondaryColor, setSecondaryColor] = useState(cssVals.secondary);

    const handleSetPrimary = (value) => {
        console.log(hexToRgb(value))
        setPrimaryColor(hexToRgb(value))
    }

    const handleSetSecondary = (value) => {
        console.log(hexToRgb(value))
        setSecondaryColor(hexToRgb(value))
    }

    useEffect(() => {
        const root = document.documentElement;

        // Set CSS variables for the color theme
        root.style.setProperty('--primary-hue-theme-r', primaryColor.r);
        root.style.setProperty('--primary-hue-theme-g', primaryColor.g);
        root.style.setProperty('--primary-hue-theme-b', primaryColor.b);

    }, [primaryColor]);

    useEffect(() => {
        const root = document.documentElement;

        // Set CSS variables for the color theme
        root.style.setProperty('--secondary-hue-theme-r', secondaryColor.r);
        root.style.setProperty('--secondary-hue-theme-g', secondaryColor.g);
        root.style.setProperty('--secondary-hue-theme-b', secondaryColor.b);
    }, [secondaryColor]);

    useEffect(() => {
        console.log(cssVals)
    })

    return (
        <ThemeContext.Provider value={{ primaryColor, setPrimaryColor: handleSetPrimary, secondaryColor, setSecondaryColor: handleSetSecondary }}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useThemeColor = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};

// Create a context with a default value (false for light mode)
const DarkModeContext = createContext(false);

export const DarkModeProvider = ({ children }) => {

    const prefersDarkMode = () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    const [isDarkMode, setIsDarkMode] = useState(() => prefersDarkMode());

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const rootElement = document.documentElement;
        if (isDarkMode) {
            rootElement.className = 'lightMode';
        } else {
            rootElement.className = 'darkMode';
        }
    })

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};

export const Layout = () => {
    const headerRef = useRef()
    const mainRef = useRef()
    const [collapsedHeader, setCollapsedHeader] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname !== "/") {
            setCollapsedHeader(true)
        } else {
            setCollapsedHeader(false)
        }
    }, [location, headerRef, mainRef])

    const collapse = () => {
        setCollapsedHeader(true)
    }

    return (
        <>
            <Sidebar collapse={collapse} />
            <Header ref={headerRef} collapsedHeader={collapsedHeader} />
            <main>
                <Outlet />
            </main>
        </>
    );
}

const routes = createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<IndexPage />} />

        <Route path="all" element={<ProjectsPage activeTab={"all"} />} />

        <Route path="sideProjects" element={<ProjectsPage activeTab={"sideProjects"} />} >
            <Route path="webDev" element={<ProjectsPage activeTab={"sideProjects"} />} />
        </Route>

        <Route path="live" element={<ProjectsPage activeTab={"live"} />} >
            <Route path="webDev" element={<ProjectsPage activeTab={"live"} />} />
        </Route>

        <Route path="design" element={<ProjectsPage activeTab={"design"} />} >
            <Route path="typography" element={<ProjectsPage activeTab={"design"} />} />
            <Route path="logos" element={<ProjectsPage activeTab={"design"} />} />
            <Route path="icons" element={<ProjectsPage activeTab={"design"} />} />
        </Route>

        <Route path="projects">
            <Route path=":projectId" element={<ProjectPage />} />
            <Route path="webDev" element={<ProjectsPage activeTab={"projects"} />} />
        </Route>

        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
    </Route>
);


const router = createHashRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
    <DarkModeProvider>
        <ThemeContextProvider>
            <RouterProvider router={router} />
        </ThemeContextProvider>
    </DarkModeProvider>
);