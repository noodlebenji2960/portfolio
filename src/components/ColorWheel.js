import React, { useState, useEffect, useRef } from 'react';
import { IoIosClose } from "react-icons/io";
import styles from '../styles/modules/ColorWheel.module.css';

export function hexToRgb(hex) {
    // Remove the hash (#) if present
    hex = hex.replace(/^#/, '');

    // Parse the hex value into individual RGB components
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    // Return the RGB values as an object
    return { r: r, g: g, b: b };
}

export function hexToHsl(hex) {

    hex = hex.replace(/^#/, '');

    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    const lightness = (max + min) / 2;

    let hue, saturation;

    if (max === min) {
        hue = 0;
        saturation = 0;
    } else {
        const delta = max - min;
        saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

        switch (max) {
            case r:
                hue = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
                break;
            case g:
                hue = ((b - r) / delta + 2) * 60;
                break;
            case b:
                hue = ((r - g) / delta + 4) * 60;
                break;
        }
    }
    
    return `hsl(${Math.round(hue)}, ${Math.round(saturation * 100)}%, ${Math.round(lightness * 100)}%)`
}

export function hslToHex(hsl) {
    // Parse the HSL string to extract the values
    const hslRegex = /hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/;
    const match = hsl.match(hslRegex);

    if (!match) {
        throw new Error('Invalid HSL color string format');
    }

    const hue = parseInt(match[1]);
    const saturation = parseInt(match[2]);
    const lightness = parseInt(match[3]);

    // Convert HSL to RGB
    const c = (1 - Math.abs((2 * lightness / 100) - 1)) * (saturation / 100);
    const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
    const m = lightness / 100 - c / 2;
    let r, g, b;

    if (0 <= hue && hue < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (60 <= hue && hue < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (120 <= hue && hue < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (180 <= hue && hue < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (240 <= hue && hue < 300) {
        r = x;
        g = 0;
        b = c;
    } else {
        r = c;
        g = 0;
        b = x;
    }

    // Convert RGB to hexadecimal
    const rgbHex = ((Math.round((r + m) * 255) << 16) | (Math.round((g + m) * 255) << 8) | Math.round((b + m) * 255)).toString(16);

    // Pad the result to ensure it has 6 digits
    return "#" + rgbHex.padStart(6, "0");
}

export const MagnifierWrapper = ({
	color,
	children,
	magnifierHeight = 20,
	magnifieWidth = 20,
}) => {
	const [[x, y], setXY] = useState([0, 0]);
	const [showMagnifier, setShowMagnifier] = useState(false);
	return (
		<div
			style={{
				position: "relative",
			}}
		>
			<div
				onMouseEnter={(e) => {
					setShowMagnifier(true);
				}}
				onMouseMove={(e) => {
					const elem = e.currentTarget;
					const { top, left } = elem.getBoundingClientRect();

					const x = e.pageX - left - window.pageXOffset;
					const y = e.pageY - top - window.pageYOffset;
					setXY([x, y]);
				}}
				onMouseLeave={() => {
					setShowMagnifier(false);
				}}
				style={{ borderRadius: "50%" }}
			>
				{children}
			</div>

			<div
				style={{
					display: showMagnifier ? "" : "none",
					position: "absolute",
					borderRadius: "50%",
					pointerEvents: "none",
					height: `${magnifierHeight}px`,
					width: `${magnifieWidth}px`,
					top: `${y - magnifierHeight / 2}px`,
					left: `${x - magnifieWidth / 2}px`,
					border: "1px solid lightgray",
					backgroundColor: color,
					zIndex: 999999999999
				}}
			></div>
		</div>
	);
}

function hslStringToNumbers(hslString) {
	// Use a regular expression to extract the HSL values
	const regex = /hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/;
	const match = hslString.match(regex);

	if (match) {
		// Extract and convert the matched values to numbers
		const hue = parseInt(match[1]);
		const saturation = parseInt(match[2]);
		const lightness = parseInt(match[3]);

		return { hue, saturation, lightness };
	} else {
		// Handle invalid input or non-matching strings
		return null;
	}
}

function rgbaToHslString(r, g, b, a) {
    // Ensure that the input values are in the valid range [0, 255]
    r = Math.min(255, Math.max(0, r)) / 255;
    g = Math.min(255, Math.max(0, g)) / 255;
    b = Math.min(255, Math.max(0, b)) / 255;

    // Find the maximum and minimum values among R, G, and B
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    // Calculate the lightness (L)
    const lightness = (max + min) / 2;

    // If max and min are equal, the color is grayscale and saturation is 0
    if (max === min) {
        const hslString = `hsl(0, 0%, ${lightness * 100}%)`;
        return a !== undefined ? `hsla(0, 0%, ${lightness * 100}%, ${a})` : hslString;
    }

    // Calculate the saturation (S)
    const delta = max - min;
    const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    // Calculate the hue (H)
    let hue;
    switch (max) {
        case r:
            hue = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
            break;
        case g:
            hue = ((b - r) / delta + 2) * 60;
            break;
        case b:
            hue = ((r - g) / delta + 4) * 60;
            break;
        default:
            hue = 0;
            break;
    }

    const hslString = `hsl(${Math.round(hue)}, ${Math.round(saturation * 100)}%, ${Math.round(lightness * 100)}%)`;

    return hslString;
}

const ColorWheel = ({ color, setColor }) => {
	const onChange = setColor
	const size = 100
	const [selectedColor, setSelectedColor]=useState(rgbaToHslString(color.r, color.g, color.b, color.a))
	const [hoverColor, setHoverColor] = useState(rgbaToHslString(color.r, color.g, color.b, color.a));
	const [isPopupOpen, setPopupOpen] = useState(false);
	const popupRef = useRef(null);
	const [elementRect, setElementRect] = useState();

	const calculateHSLFromMouse = (e) => {
		const { offsetX, offsetY } = e.nativeEvent;

		const centerX = e.target.offsetWidth / 2;
		const centerY = e.target.offsetHeight / 2;

		const distance = Math.sqrt((offsetX - centerX) ** 2 + (offsetY - centerY) ** 2);
		const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
		const saturation = (distance / maxDistance) * size;
		const lightness = 50;

		const radians = Math.atan2(offsetY - centerY, offsetX - centerX);
		let hue = (radians * 180) / Math.PI;
		hue = hue < 0 ? hue + 360 : hue;

		return { hue, saturation, lightness };
	};

	const handleSelect = (e) => {
		const { hue, saturation, lightness } = calculateHSLFromMouse(e);
		setHoverColor(`hsl(${hue.toFixed(0)}, ${saturation.toFixed(0)}%, ${lightness}%)`);
		onChange(hslToHex(`hsl(${hue.toFixed(0)}, ${saturation.toFixed(0)}%, ${lightness}%)`));
		togglePopup(e)
	}

	const handleColorChange = (e) => {
		const { hue, saturation, lightness } = calculateHSLFromMouse(e);
		setHoverColor(`hsl(${hue.toFixed(0)}, ${saturation.toFixed(0)}%, ${lightness}%)`);
		onChange(hslToHex(`hsl(${hue.toFixed(0)}, ${saturation.toFixed(0)}%, ${lightness}%)`));
	};

	const handleMouseMove = (e) => {
		const { hue, saturation, lightness } = calculateHSLFromMouse(e);
		setHoverColor(`hsl(${hue.toFixed(0)}, ${saturation.toFixed(0)}%, ${lightness}%)`);
		handleColorChange(e)
	};

	const togglePopup = (e) => {
		e.stopPropagation();
		setPopupOpen(!isPopupOpen);
	};

	const closePopupOnOutsideClick = (event) => {
		if (isPopupOpen && popupRef.current && !popupRef.current.contains(event.target)) {
			setPopupOpen(false);
		}
	};

	const popupStyles = {
		visibility: isPopupOpen ? 'visible' : 'hidden',
	};

	useEffect(() => {
		document.addEventListener('mousedown', closePopupOnOutsideClick);
		return () => {
			document.removeEventListener('mousedown', closePopupOnOutsideClick);
		};
	}, [isPopupOpen]);

	useEffect(() => {
		setElementRect(popupRef.current.getBoundingClientRect());
	}, [popupRef.current]);

	return (
		<div className={`${styles.container} ${styles.colorIndicator}`}>
			<button
				onClick={togglePopup}
				className={styles.toggleButton}
				style={{ background: hoverColor }} />
			<div
				className={styles.popup}
				ref={popupRef}
				style={popupStyles}
			>
				<div className={styles.colorWheelContainer} >
					{popupRef.current && (
						<MagnifierWrapper
							color={hoverColor}
							width={elementRect.width}
							height={elementRect.height}>
							<div
								className={styles.circleSaturationOverlay}
								style={{ width: size, height: size }} />
							<div
								className={`${styles.circle} ${styles.radial}`}
								style={{ width: size, height: size }}
								onMouseMove={handleMouseMove}
								onClick={handleSelect}>
							</div>
						</MagnifierWrapper>
					)}
				</div>
				<button onClick={()=>setPopupOpen(false)}>
					<IoIosClose/>
				</button>
			</div>
		</div>
	);
};

export default ColorWheel;