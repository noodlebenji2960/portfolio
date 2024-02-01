import React, { useState, useEffect } from 'react';
import styles from '../styles/modules/ScrollToTopButton.module.css';

import { IoChevronUp } from "react-icons/io5";


const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		const scrollTop = document.documentElement.scrollTop;

		setIsVisible(scrollTop > 100);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<button
			className={`${styles.scrollToTopButton} ${isVisible ? styles.visible : ''}`}
			onClick={scrollToTop}
			title="Scroll to Top"
		>
			<IoChevronUp />
		</button>
	);
};

export default ScrollToTopButton;