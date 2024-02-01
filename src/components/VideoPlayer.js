import React, { useRef, useState, useEffect } from 'react';
import { BsPlayFill, BsPauseFill, BsVolumeUpFill, BsFullscreen } from 'react-icons/bs';
import styles from "../styles/modules/VideoPlayer.module.css";

const VideoPlayer = ({ src, controls, muted, loop, autoPlay }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(100);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const togglePlayIt = () => {
        setIsPlaying((prev) => !prev);
        isPlaying ? videoRef.current.pause() : videoRef.current.play();
    };

    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        videoRef.current.volume = newVolume;
    };

    const handleTimeUpdate = () => {
        if (!isDragging) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        setDuration(videoRef.current.duration);
    };

    const progress = (currentTime / duration) * 100;

    const handleProgressBarClick = (event) => {
        const boundingRect = event.currentTarget.getBoundingClientRect();
        const clickPosition = event.clientX - boundingRect.left;
        const percentage = (clickPosition / boundingRect.width) * 100;
        const newCurrentTime = (percentage / 100) * duration;

        setCurrentTime(newCurrentTime);
        videoRef.current.currentTime = newCurrentTime;
    };

    const handleProgressBarMouseDown = () => {
        setIsDragging(true);
    };

    const handleProgressBarMouseMove = (event) => {
        if (isDragging) {
            handleProgressBarClick(event);
        }
    };

    const handleProgressBarMouseUp = () => {
        setIsDragging(false);
    };

    const handleFullscreen = () => {
        const videoContainer = document.querySelector(`.${styles.videoPlayer}`);
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            videoContainer.requestFullscreen();
        }
    };

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video.addEventListener('timeupdate', handleTimeUpdate);
            video.addEventListener('loadedmetadata', handleLoadedMetadata);

            return () => {
                video.removeEventListener('timeupdate', handleTimeUpdate);
                video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            };
        }
    }, [videoRef]);

    return (
        <div className={`${styles.videoPlayer} ${!isPlaying ? styles.isPlaying : ""}`}>
            {!isPlaying && (
                <button className={styles.playButton} onClick={togglePlayIt}>
                    <BsPlayFill />
                </button>
            )}
            <video
                ref={videoRef}
                className={styles.video}
                controls={controls}
                loop={loop}
                autoPlay={autoPlay}
                onClick={togglePlayIt}
                onContextMenu={(e) => e.preventDefault()}
                onEnded={() => setIsPlaying(false)}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.controls}>
                <button onClick={togglePlayIt}>
                    {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
                </button>
                {(currentTime / 60).toFixed(2)}
                <div
                    className={styles.progressContainer}
                    onClick={handleProgressBarClick}
                    onMouseDown={handleProgressBarMouseDown}
                    onMouseMove={handleProgressBarMouseMove}
                    onMouseUp={handleProgressBarMouseUp}
                >
                    <div className={styles.progressBar} style={{ width: `${progress}%` }}/>
                </div>
                -{((duration - currentTime) / 60).toFixed(2)}
                <button onClick={() => setVolume((prevVolume) => (prevVolume >= 50 ? 0 : 100))}>
                    <BsVolumeUpFill />
                </button>
                <button onClick={handleFullscreen}>
                    <BsFullscreen />
                </button>
            </div>
        </div>
    );
};

export default VideoPlayer;
