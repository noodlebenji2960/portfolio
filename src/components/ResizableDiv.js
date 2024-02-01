import React, { useState, useRef } from 'react';
import styles from '../styles/modules/ResizableDiv.module.css';
import { FaGripLinesVertical, FaFilter } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { MdViewQuilt, MdViewHeadline } from "react-icons/md";


const ResizableDiv = ({ children, view, setView }) => {
	const [filterActive, setFilterActive] = useState(true)
	const [width, setWidth] = useState(200);
	const navigate = useNavigate()

	const divRef = useRef(null);

	const handleResize = (e) => {
		if (divRef.current) {
			const newWidth = e.clientX
			setWidth(newWidth);
		}
	};

	const handleMouseUp = () => {
		document.removeEventListener('mousemove', handleResize);
		document.removeEventListener('mouseup', handleMouseUp);
	};

	const handleMouseDown = (e) => {
		e.preventDefault()
		document.addEventListener('mousemove', handleResize);
		document.addEventListener('mouseup', handleMouseUp);
	};

	const handleMenuView = () => {
		setView(prev => {
			if (prev == "tile") {
				return "list"
			} else if (prev == "list") {
				return "tile"
			}
		})
	}

	return (<>
		<button aria-label="Filter projects" label-position="left" className={`${styles.filterButton} ${styles.filterButton1}`} onClick={(e) => setFilterActive(prev => !prev)}>
			<FaFilter />
		</button>
		<button aria-label={view.slice(0, 1).toUpperCase() + view.slice(1)} label-position="left" className={`${styles.filterButton} ${styles.filterButton2}`}
			onClick={handleMenuView}>
			{view == "tile" && <MdViewQuilt />}
			{view == "list" && <MdViewHeadline />}
		</button>
		<button aria-label="Go to web dev projects" label-position="left" className={`${styles.filterButton} ${styles.filterButton3}`} onClick={() => navigate(`/sideProjects/webDev`)}>
			<TbWorldWww />
		</button>
		<div
			ref={divRef}
			className={`${styles.resizableDiv} ${filterActive ? styles.expanded : ""}`}
			style={{ width: `${width}px` }}
		>
			{!filterActive && <div className={styles.resizeHandle} onMouseDown={handleMouseDown}>
				<FaGripLinesVertical />
			</div>}
			<div className={styles.resizableContent}>
				{children}
			</div>
		</div>
	</>);
};

export default ResizableDiv;
