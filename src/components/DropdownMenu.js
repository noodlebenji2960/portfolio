import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/modules/DropdownMenu.module.css";

const DropdownMenu = ({ children, active, setActive }) => {
    const dropdownRef = useRef();
    const cursorPos = useRef({ top: 0, left: 0, right: 0, bottom: 0 });
    const [flipped, setFlipped] = useState({ x: false, y: false })
    const [size, setSize] = useState({ x: 0, y: 0 })
    const hovering = useRef(false)

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!active) {
                cursorPos.current = {
                    top: e.clientY,
                    left: e.clientX,
                };
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active]);

    useEffect(() => {
        const handleWindowClick = (e) => {
            if (!hovering.current) {
                setActive(false)
            }
        };
        const handleMouseMove = (e) => {
            window.addEventListener("click", handleWindowClick);
            if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
                hovering.current = true

                // Add a click event listener to the window
            } else {
                hovering.current = false
            }
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("click", handleWindowClick);
        }
    }, [active, dropdownRef.current])


    useEffect(() => {
        if (dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect();
            setSize({
                x: rect.width,
                y: rect.height
            })
            const xMinOutOfBounds =
                cursorPos.current.left >= window.innerWidth - rect.width - 10;
            const yMinOutOfBounds =
                cursorPos.current.top >= window.innerHeight - rect.top - 10;

            if (xMinOutOfBounds) {
                setFlipped(prev => { return { x: true, y: prev.y } })
            } else {
                setFlipped(prev => { return { x: false, y: prev.y } })
            }

            if (yMinOutOfBounds) {
                setFlipped(prev => { return { x: prev.x, y: true } })
            } else {
                setFlipped(prev => { return { x: prev.x, y: false } })
            }
        }
    }, [dropdownRef.current, active]);

    return active === true ? (
        <div
            ref={dropdownRef}
            onClick={(e)=>e.stopPropagation()}
            className={styles.dropdown}
            style={{
                top: cursorPos.current.top,
                left: cursorPos.current.left,
                transform: `${flipped.y ? `translateY(${size.y * -1}px)` : ``} ${flipped.x ? `translateX(${size.x * -1}px)` : ``}`,
            }}
        >
            {children}
        </div>
    ) : null;


};

export default DropdownMenu;
