import React, {useState} from "react";
import styles from "../styles/modules/Resume.module.css"
import { FaAddressCard } from "react-icons/fa";
import { resumeData } from "../../data/resume";

const Resume = ({toggleResume, setToggleResume}) => {
    const [toggle, setToggle] = useState(true)
    const renderValue = (value, depth = 1) => {
        if (typeof value === 'object' && value !== null) {
            return renderObject(value, depth + 1);
        } else {
            return `${JSON.stringify(value, null, 2)}`;
        }
    };

    const renderObject = (obj, depth = 1) => {
        return (
            <div>
                <code className={styles.code}>
                    <span className={styles.return}>{`return `}</span>
                    <span className={styles.return}>{`{`}</span>
                    {Object.entries(obj).map(([key, value], index, array) => (
                        <div key={key} className={styles.objectEntry} style={{ marginLeft: `${8 * depth}px` }}>
                            <span className={`${styles.bold} ${styles.objectKey}`}>
                                {`${JSON.stringify(key)}:`}
                            </span>
                            <span className={styles.objectValue}>
                                {renderValue(value, depth)}
                                {index === array.length - 1 ? null : ','}
                            </span>
                        </div>
                    ))}
                    <span className={styles.return}>{`}`}</span>
                </code>
            </div>
        );
    };

    return (
        <section className={styles.section}>
            <div>
                <h3 className={styles.title} onClick={() => setToggleResume(prev => !prev)}>
                    <i>const</i> resume = &#123;{!toggleResume && <><FaAddressCard />&#125;</>}
                </h3>
                <div className={styles.codeContainer}>
                    {toggleResume && renderObject(resumeData)}
                </div>
                {toggleResume && <h3>
                    &#125;
                </h3>}
            </div>
        </section>
    );
};

export default Resume