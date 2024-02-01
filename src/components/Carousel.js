import React, { useState, useEffect, useRef } from "react";

import styles from "../styles/modules/Carousel.module.css"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const Carousel = ({ children, collapsed }) => {
    const [childEles, setChildEles] = useState([...children])
    const [isOverflowing, setIsOverFlowing] = useState(true)
    const contentRef = useRef();
    let isMouseDown = useRef(false);

    const handleMouseDown = (direction) => {
        isMouseDown.current = true;
        requestAnimationFrame(scroll);

        function scroll() {
            if (isMouseDown.current && contentRef.current) {
                if (contentRef.current.scrollLeft <= 49) {
                    setChildEles((prevArray) => {
                        const lastElement = prevArray.pop()
                        const newArray = [lastElement, ...prevArray];
                        contentRef.current.scrollTo({
                            left: contentRef.current.scrollLeft + contentRef.current.children[0].offsetWidth + 10,
                        });
                        return newArray;
                    });
                }
                if (direction == "left") {
                    contentRef.current.scrollTo({
                        left: contentRef.current.scrollLeft - 5,
                    });
                } else if (direction == "right") {
                    contentRef.current.scrollTo({
                        left: contentRef.current.scrollLeft + 5,
                        behavior: 'auto',
                    });
                }
                requestAnimationFrame(scroll);
            }
        }
    };

    const handleMouseUp = () => {
        isMouseDown.current = false;
    };

    const setAnimation = () => {
        const direction = 'right';
        const container = contentRef.current;
        if (container) {
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 50) {
                container.scrollTo({
                    left: container.scrollLeft - 50
                })
                const [firstItem, ...restItems] = childEles;
                setChildEles([...restItems, firstItem]);
            } else {
                container.scrollTo({
                    left: container.scrollLeft + (direction === 'left' ? -1 : 1)
                });
            }
        }
    }

    const checkOverflowing = () => {
        if (contentRef.current.offsetWidth >= 850) {
            setIsOverFlowing(false)
        } else {
            setIsOverFlowing(true)
        }
    }

    useEffect(() => {
        checkOverflowing()
        window.addEventListener("resize", checkOverflowing)
        return () => {
            window.removeEventListener("resize", checkOverflowing)
            clearInterval(intervalId);
        }
    }, [])


    let intervalId;
    useEffect(() => {
        if (isOverflowing) {
            intervalId = setInterval(setAnimation, 40);
        }
        return () => clearInterval(intervalId);
    }, [childEles, isOverflowing]);

    return (
        <div className={styles.Carousel}>
            {isOverflowing && <button
                onMouseDown={() => handleMouseDown('left')}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <FaChevronLeft />
            </button>}
            <div className={styles.carouselContent} ref={contentRef}>
                {childEles}
            </div>
            {isOverflowing && <button
                onMouseDown={() => handleMouseDown('right')}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <FaChevronRight />
            </button>}
        </div>
    );
};

export default Carousel