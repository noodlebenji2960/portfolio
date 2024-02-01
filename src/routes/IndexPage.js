import React, { useEffect, useState } from "react";
import styles from "../styles/modules/IndexPage.module.css";
import meme1 from "../../public/assets/fire.gif"
import { GiCoffeeMug } from "react-icons/gi";
import { FaAddressCard, FaBug } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6"
import ScrollToTopButton from "../components/ScrollToTopButton"
import Resume from "../components/Resume";
import { resumeData } from "../../data/resume";


const IndexPage = () => {
	const [toggleDebug, setToggleDebug] = useState(false)
	const [toggleResume, setToggleResume] = useState(false)
	const [togglePlugins, setTogglePlugins] = useState(false)

	return (
		<div className={styles.pageContainer}>
			<ScrollToTopButton />
			<section className={styles.section}>
				<div>
					<h3 className={styles.title}>
						<i>function</i> <GiCoffeeMug /> intoCode &#123;
					</h3>
					<div className={styles.codeContainer}>
						<code className={styles.code}>{`return "${resumeData.about}"`}</code>
					</div>
					<h3 className={styles.title}>
						&#125;
					</h3>
				</div>
			</section>
			<section className={styles.section}>
				<div>
					<h3 className={styles.title} onClick={()=>setTogglePlugins(prev=>!prev)}>
						<i>const</i> plugins = &#123;{!togglePlugins && <><FaBoltLightning />&#125;</>}
					</h3>
					{togglePlugins && (<>
						<div className={styles.codeContainer}>
							<iframe
								src="https://open.spotify.com/embed/playlist/66hvpHZFRigTrXUSLIi8LY?utm_source=generator&theme=0"
								width="100%"
								height="155px"
								style={{ background: "none" }}
								frameBorder="0"
								allowfullscreen=""
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							/>
						</div>
						<h3 className={styles.title}>
							&#125;
						</h3>
					</>)}
				</div>
			</section>
			<section className={styles.section}>
				<div>
					<h3 className={styles.title} onClick={()=>setToggleDebug(prev=>!prev)}>
						<i>function</i> debug &#123;{!toggleDebug && <><FaBug />&#125;</>}
					</h3>
					{toggleDebug && (<>
						<div className={styles.codeContainer}>
							<code className={styles.code}>
								<img src={meme1} />
							</code>
						</div>
						<h3 className={styles.title}>
							&#125;
						</h3>
					</>)}
				</div>
			</section>
			<Resume toggleResume={toggleResume} setToggleResume={setToggleResume} />
		</div>
	);
};

export default IndexPage;