import React, { useState, useEffect, useRef } from "react"
import styles from "../styles/modules/Liquid.module.css"
import getRandomNumber from "../utils/getRandomNumber.js"
import ToggleSwitch from "./ToggleSwich.js"

import { FaDroplet, FaDropletSlash } from "react-icons/fa6";
import { PiCursorClickFill, PiCursorFill } from "react-icons/pi";
import { GiBurstBlob } from "react-icons/gi";

import RangeSlider from "./RangeSlider.js";

const LiquidParticle = ({ blobTransitionClass, follows }) => {
    const cursorPos = useRef({ x: 0, y: 0 })
    const blobRef = useRef()
    const [maxSize, setMaxSize] = useState(0)
    const [variance, setVariance] = useState(100)
    const [blobSize, setBlobSize] = useState(0);
    const [blobPosition, setBlobPosition] = useState({
        top: 50, left: 50
    })
    const [blobBorderRadius, setBlobBoarderRadius] = useState({
        val1: 50, val2: 50, val3: 50, val4: 50, val5: 50, val6: 50, val7: 50, val8: 50,
    })

    let intervalId;
    useEffect(() => {
        intervalId = setInterval(() => {
            const size = getRandomNumber(10, maxSize)
            setBlobSize(size);
            setBlobPosition({
                top: getRandomNumber((variance * -1), variance) - ((size - 100) / 2),
                left: getRandomNumber((variance * -1), variance) - ((size - 100) / 2)
            })
            setBlobBoarderRadius({
                val1: getRandomNumber(30, 70),
                val2: getRandomNumber(30, 70),
                val3: getRandomNumber(30, 70),
                val4: getRandomNumber(30, 70),
                val5: getRandomNumber(30, 70),
                val6: getRandomNumber(30, 70),
                val7: getRandomNumber(30, 70),
                val8: getRandomNumber(30, 70),
            })
        }, getRandomNumber(1000, 1200));

        return () => clearInterval(intervalId);
    });

    useEffect(() => {

        const handleMouseMove = (e) => {
            const bounds = 20
            const xMin = e.clientX <= bounds
            const ymin = e.clientY <= bounds
            const xMax = e.clientX >= window.innerWidth - bounds
            const yMax = e.clientY >= window.innerHeight - bounds
            cursorPos.current = {
                x: e.clientX,
                y: e.clientY
            }
            if (xMin || ymin || xMax || yMax) {
                setMaxSize(0)
                setVariance(500)
            } else {
                if (follows) {
                    setMaxSize(50)
                    setVariance(20)
                } else {
                    setMaxSize(0)
                    setVariance(0)
                }
                blobRef.current.style.transform = `translateY(${cursorPos.current.y - 50}px) translateX(${cursorPos.current.x - 50}px)`
            }
        };

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [follows])

    let lastScrollY = 0
    useEffect(() => {
        const handleScroll = () => {
            const diff = window.scrollY - lastScrollY
            if (lastScrollY > window.scrollY) {
                blobRef.current.style.transform = `translateY(${cursorPos.current.y - diff}px) translateX(${cursorPos.current.x - 50}px)`
            } else if (lastScrollY < window.scrollY) {
                blobRef.current.style.transform = `translateY(${cursorPos.current.y - 150}px) translateX(${cursorPos.current.x - 50}px)`
            }
            lastScrollY = window.scrollY;
        };

        const handleScrollEnd = () => {
            blobRef.current.style.transform = `translateY(${cursorPos.current.y - 50}px) translateX(${cursorPos.current.x - 50}px)`
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scrollend', handleScrollEnd);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.addEventListener('scrollend', handleScrollEnd);
        };
    }, []);

    useEffect(() => {
        //start in middle
        blobRef.current.style.transform = `translateY(${(window.innerHeight / 2) - 50}px) translateX(${(window.innerWidth / 2) - 50}px)`
    }, [])

    return (
        <div ref={blobRef} className={`${styles[blobTransitionClass]} ${styles.blob}`} style={{
            top: `${blobPosition.top}px`,
            left: `${blobPosition.left}px`,
            width: blobSize,
            height: blobSize,
            borderRadius: `${blobBorderRadius.val1}% ${blobBorderRadius.val2}% ${blobBorderRadius.val3}% ${blobBorderRadius.val4}% / ${blobBorderRadius.val5}% ${blobBorderRadius.val6}% ${blobBorderRadius.val7}% ${blobBorderRadius.val8}%`,
        }} />
    )
}

const BgLiquidParticle = ({ direction, bgOn }) => {
    const blobRef = useRef()
    const [blobSize, setBlobSize] = useState({ size: direction == "up" ? getRandomNumber(80, 110) : getRandomNumber(40, 60), variance: getRandomNumber(-10, 50) });
    const [blobPosition, setBlobPosition] = useState({
        top: 50, left: 50
    })
    const [blobBorderRadius, setBlobBoarderRadius] = useState({
        val1: 50, val2: 50, val3: 50, val4: 50, val5: 50, val6: 50, val7: 50, val8: 50,
    })

    let intervalId;
    useEffect(() => {
        intervalId = setInterval(() => {
            if (bgOn) {
                setBlobSize({ size: direction == "up" ? getRandomNumber(100, 150) : getRandomNumber(60, 90), variance: getRandomNumber(-10, 50) })
                setBlobPosition({
                    top: getRandomNumber(0, 100), left: getRandomNumber(0, 100)
                })
                setBlobBoarderRadius({
                    val1: getRandomNumber(25, 90),
                    val2: getRandomNumber(25, 90),
                    val3: getRandomNumber(25, 90),
                    val4: getRandomNumber(25, 90),
                    val5: getRandomNumber(25, 90),
                    val6: getRandomNumber(25, 90),
                    val7: getRandomNumber(25, 90),
                    val8: getRandomNumber(25, 90),
                })
            } else {
                setBlobSize({ size: 0, variance: 0 })
                setBlobPosition({
                    top: 0, left: 0
                })
            }
        }, (direction == "up" ? getRandomNumber(5000, 6000) : getRandomNumber(1000, 2000)));

        return () => clearInterval(intervalId);
    }, [bgOn]);

    useEffect(() => {
        blobRef.current.style.animationDuration = `${getRandomNumber(20, 35)}s`
        blobRef.current.style.animationDelay = `${getRandomNumber(0, 12)}s`
    }, [])

    return (<>
        <div
            ref={blobRef}
            className={`${styles.bgBlob} ${direction == "up" ? styles.bgBlobUp : styles.bgBlobDown}`}
            style={
                {
                    transform: `translateY(${blobPosition.top}px), translateX(${blobPosition.left}px)`,
                    left: `${direction == "up" ? getRandomNumber(80, 100) : getRandomNumber(-15, 15)}%`,
                    width: blobSize.size,
                    height: blobSize.size + blobSize.variance,
                    borderRadius: `${blobBorderRadius.val1}% ${blobBorderRadius.val2}% ${blobBorderRadius.val3}% ${blobBorderRadius.val4}% / ${blobBorderRadius.val5}% ${blobBorderRadius.val6}% ${blobBorderRadius.val7}% ${blobBorderRadius.val8}%`,
                }}
        />
        <div
            ref={blobRef}
            className={`${styles.bgBlob} ${direction == "up" ? styles.bgBlobUp : styles.bgBlobDown}`}
            style={
                {
                    transform: `translateY(${blobPosition.top - getRandomNumber(10, 20)}px), translateX(${blobPosition.left - getRandomNumber(10, 20)}px)`,
                    left: `${direction == "up" ? getRandomNumber(80, 100) : getRandomNumber(-15, 15)}%`,
                    width: blobSize.size,
                    height: blobSize.size + blobSize.variance,
                    borderRadius: `${blobBorderRadius.val1 - getRandomNumber(10, 20)}% ${blobBorderRadius.val2 - getRandomNumber(10, 20)}% ${blobBorderRadius.val3 - getRandomNumber(10, 20)}% ${blobBorderRadius.val4 - getRandomNumber(10, 20)}% / ${blobBorderRadius.val5 - getRandomNumber(10, 20)}% ${blobBorderRadius.val6 - getRandomNumber(10, 20)}% ${blobBorderRadius.val7 - getRandomNumber(10, 20)}% ${blobBorderRadius.val8 - getRandomNumber(10, 20)}%`,
                }}
        />
    </>)
}

export const LiquidControl = ({ follows, setFollows, bgOn, setBgOn, liquidAmount, setLiquidAmount }) => {
    return (
        <div className={styles.liquidControl}>
            <ToggleSwitch
                id={"followsCursor"}
                isChecked={follows}
                onChange={() => setFollows(prev => !prev)}
                checkedIcon={<PiCursorClickFill />}
                unCheckedIcon={<PiCursorFill/>}
                aria-label={`Follows: ${follows ? "active" : "inactive"}`}
                label-position={"left"} 
            />
            <ToggleSwitch
                id={"bgLiquid"}
                isChecked={bgOn}
                onChange={() => setBgOn(prev => !prev)}
                checkedIcon={<FaDroplet />}
                unCheckedIcon={<FaDropletSlash/>}
                aria-label={`Background: ${bgOn ? "active" : "inactive"}`}
                label-position={"left"}
            />
            <RangeSlider value={liquidAmount} setValue={setLiquidAmount} min={0} max={10} />
        </div>
    )
}

const LiquidBackGround = ({ bgOn, liquidAmount }) => {
    const upParticles = []
    const downParticles = []

    for (let i = 0; i < liquidAmount; i++) {
        upParticles.push(<BgLiquidParticle bgOn={bgOn} direction="up" />)
        downParticles.push(<BgLiquidParticle bgOn={bgOn} direction="down" />)
    }

    return <div className={styles.blobContainer}>
        {upParticles}
        {downParticles}
    </div>
};


const Liquid = ({ follows, bgOn, setBgOn, liquidAmount, blur, contrast }) => {

    return (<>
        <div className={styles.blobContainer} style={{transform: `blur(${blur}px) contrast(${contrast})`}}>
            <LiquidBackGround contrast={contrast} blur={blur} liquidAmount={liquidAmount} bgOn={bgOn} />
            <LiquidParticle contrast={contrast} blur={blur}follows={follows} blobTransitionClass={"blobTransition1"} />
            <LiquidParticle contrast={contrast} blur={blur}follows={follows} blobTransitionClass={"blobTransition2"} />
            <LiquidParticle contrast={contrast} blur={blur}follows={follows} blobTransitionClass={"blobTransition3"} />
            <LiquidParticle contrast={contrast} blur={blur}follows={follows} blobTransitionClass={"blobTransition4"} />
            <LiquidParticle contrast={contrast} blur={blur}follows={follows} blobTransitionClass={"blobTransition5"} />
            <LiquidParticle contrast={contrast} blur={blur}follows={follows} blobTransitionClass={"blobTransition6"} />
            <LiquidParticle contrast={contrast} blur={blur}follows={follows} blobTransitionClass={"blobTransition7"} />
            <LiquidParticle contrast={contrast} blur={blur}follows={follows} blobTransitionClass={"blobTransition8"} />
            <LiquidParticle contrast={contrast} blur={blur}follows={follows} blobTransitionClass={"blobTransition9"} />
            <LiquidParticle contrast={contrast} blur={blur}follows={follows} blobTransitionClass={"blobTransition10"} />
        </div>
    </>)
}

export default Liquid