import React, { useEffect, useRef, useState } from "react";
import { MdClose, MdSettings, MdOutlineCheck } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";
import { CgDetailsMore } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

import styles from "../styles/modules/Overlay.module.css";
import DropdownMenu from "./DropdownMenu";
import ToggleSwitch from "./ToggleSwitch"

const ProjectOverlay = ({ children, autoScrollOnOpen, setAutoScrollOnOpen, active, setActive, linkInternal, linkExternal }) => {
    const [loading, setLoading] = useState(true)
    const [isAutoScrolling, setIsAutoScrolling] = useState(autoScrollOnOpen || false);
    const [settingsDropdown, setSettingsDropdown] = useState(false)
    const [end, setEnd] = useState(false)
    const [autoScrollSpeed, setAutoScrollSpeed] = useState(10)
    const containerRef = useRef()
    const scrollIntervalId = useRef();
    const controlsRef = useRef()
    const navigate = useNavigate();

    let lastPosition;

    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    const handleRangeChange = debounce((e) => {
        setAutoScrollSpeed(70 - e.target.value)
        stopTimer()
    }, 300);

    const handleNavigateAndOpenWindow = (link) => {
        window.open(link, '_blank');
    };

    const setTimer = () => {
        const scrollStep = 1;
        if (containerRef.current) {
            scrollIntervalId.current = setInterval(() => {
                const currentPosition = containerRef.current.scrollY || containerRef.current.scrollTop;

                if (containerRef.current.scrollHeight <= containerRef.current.clientHeight) {
                    clearInterval(scrollIntervalId.current);
                    setIsAutoScrolling(false);
                    return;
                }

                if (currentPosition === lastPosition) {
                    clearInterval(scrollIntervalId.current);
                    setIsAutoScrolling(false);
                    setEnd(true)
                    return;
                } else {
                    setIsAutoScrolling(true);
                    setEnd(false)
                }

                lastPosition = currentPosition;
                containerRef.current.scroll(0, currentPosition + scrollStep);
            }, autoScrollSpeed);
        }
    }

    const stopTimer = () => {
        if (isAutoScrolling) {
            clearInterval(scrollIntervalId.current);
            setIsAutoScrolling(false);
            setTimer()
            setEnd(false)
        }
    }

    const toggleAutoScroll = () => {
        if (!isAutoScrolling) {
            setTimer()
            setEnd(false)
        } else {
            clearInterval(scrollIntervalId.current);
            setIsAutoScrolling(false);
            setEnd(false)
        }
    };

    useEffect(() => {
        const handleInterupt = (e) => {
            if (isAutoScrolling) {
                if ((e.type == "keydown" || e.type == "mousedown") && (controlsRef.current && !controlsRef.current.contains(e.target))) {
                    clearInterval(scrollIntervalId.current);
                    setIsAutoScrolling(false);
                }
                if (e.type == "wheel" || e.type == "scroll") {
                    clearInterval(scrollIntervalId.current);
                    setIsAutoScrolling(false);
                }
            }
            setEnd(false)
        };

        window.addEventListener("mousedown", handleInterupt);
        window.addEventListener("keydown", handleInterupt);
        window.addEventListener("wheel", handleInterupt);
        window.addEventListener("scroll", handleInterupt);

        return () => {
            window.removeEventListener("mousedown", handleInterupt);
            window.removeEventListener("keydown", handleInterupt);
            window.removeEventListener("wheel", handleInterupt);
            window.removeEventListener("scroll", handleInterupt);
        };
    }, [isAutoScrolling]);

    useEffect(() => {
        return () => {
            clearInterval(scrollIntervalId.current);
        };
    }, [active]);

    useEffect(() => {
        autoScrollOnOpen && !isAutoScrolling && toggleAutoScroll()
    }, [active, loading])

    return (active && children) ? (
        <div className={styles.overlay} ref={containerRef}>
            {children && (
                <div className={styles.container} onClick={toggleAutoScroll}>
                    <div className={styles.field}>
                        <div className={styles.scroll} style={{ opacity: !isAutoScrolling && !end ? 1 : 0 }} />
                    </div>
                </div>
            )}
            <div className={styles.controls} ref={controlsRef}>
                <button aria-label="Project details" onClick={() => navigate(`/projects/${linkInternal}`)}>
                    <CgDetailsMore />
                </button>
                <button aria-label="Open hosted" onClick={() => handleNavigateAndOpenWindow(linkExternal)}>
                    <BiLinkExternal />
                </button>
                <button aria-label="Settings" onClick={() => setSettingsDropdown(prev => !prev)}>
                    <MdSettings />
                    <DropdownMenu active={settingsDropdown} setActive={setSettingsDropdown}>
                        <label>
                            Toggle autoscroll
                            <ToggleSwitch
                                id={"toggleAutoScroll"}
                                isChecked={isAutoScrolling}
                                onChange={() => {
                                    setSettingsDropdown(false)
                                    toggleAutoScroll()
                                }}
                                checkedIcon={<MdOutlineCheck />}
                                unCheckedIcon={<MdClose />} />
                        </label>
                        <label>
                            Scroll on open
                            <ToggleSwitch
                                id={"autoScrollOnOpenSwitch"}
                                isChecked={autoScrollOnOpen}
                                onChange={() => setAutoScrollOnOpen(prev => !prev)}
                                checkedIcon={<MdOutlineCheck />}
                                unCheckedIcon={<MdClose />} />
                        </label>
                        <label>
                            Scroll speed
                            <input type="range" min={1} max={70} defaultValue={70 - autoScrollSpeed} onChange={handleRangeChange} />
                        </label>
                    </DropdownMenu>
                </button>
                <button aria-label="Close" onClick={() => setActive("")}>
                    <MdClose />
                </button>
            </div>
            <div className={styles.overlayContent} onLoad={() => setLoading(false)}>
                {children}
            </div>
        </div>
    ) : null;
};

export default ProjectOverlay;