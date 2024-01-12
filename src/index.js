import React, { useEffect, useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Outlet,
    Route,
    useParams,
    useLocation
} from "react-router-dom";

import "./styles/reset.css"
import "./styles/vars.css"
import "./styles/global.css"

import ErrorPage from "./routes/ErrorPage";
import Sidebar from "./components/Sidebar";
import IndexPage from "./routes/IndexPage";
import Liquid from "./components/Liquid";
import ProjectPage from "./routes/ProjectPage";
import IntroHeader from "./components/IntroHeader";
import ProjectsPage from "./routes/ProjectsPage";

// Create a context with a default value (false for light mode)
const DarkModeContext = createContext(false);

// Create a provider component to wrap your application
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
    const [collapsedHeader, setCollapsedHeader] = useState(false)
    const location = useLocation()
    const [follows, setFollows] = useState(false)
    const [bgOn, setBgOn] = useState(true)
    const [liquidAmount, setLiquidAmount] = useState(3)
    const [contrast, setContrast]=useState(15)
    const [blur, setBlur]=useState(10)

    useEffect(() => {
        if (location.pathname !== "/") {
            setCollapsedHeader(true)
            setFollows(false)
            setBgOn(true)
            setContrast(0)
        } else {
            setCollapsedHeader(false)
            setFollows(true)
            setBgOn(true)
            setContrast(15)
        }
    }, [location, blur, contrast])

    useEffect(()=>{
        console.log(blur)
        console.log(contrast)
    })

    return (
        <>
            <Liquid follows={follows} bgOn={bgOn} liquidAmount={liquidAmount} setLiquidAmount={setLiquidAmount} contrast={contrast} setContrast={setContrast} blur={blur} setBlur={setBlur}/>
            <Sidebar follows={follows} setFollows={setFollows} bgOn={bgOn} setBgOn={setBgOn} liquidAmount={liquidAmount} setLiquidAmount={setLiquidAmount} contrast={contrast} setContrast={setContrast} blur={blur} setBlur={setBlur}/>
            <IntroHeader collapsedHeader={collapsedHeader} />
            <main>
                <Outlet />
            </main>
        </>
    );
}

const routes = createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<IndexPage />} />
        <Route path="projects" element={<ProjectsPage />} />

        <Route path="all" element={<ProjectsPage activeTab={"all"} />} />

        <Route path="sideProjects" element={<ProjectsPage activeTab={"sideProjects"} />} />
        <Route path="sideProjects/:projectId" element={<ProjectPage />} />

        <Route path="projects" element={<ProjectsPage activeTab={"projects"} />} />
        <Route path="projects/:projectId" element={<ProjectPage />} />

        <Route path="live" element={<ProjectsPage activeTab={"live"} />} />
        <Route path="live/:projectId" element={<ProjectPage />} />

        <Route path="design" element={<ProjectsPage activeTab={"design"} />} />
        <Route path="design/:projectId" element={<ProjectPage />} />
    </Route>
);


const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
    <DarkModeProvider>
        <RouterProvider router={router} />
    </DarkModeProvider>
);