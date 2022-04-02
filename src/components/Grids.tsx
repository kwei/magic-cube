import { useRef } from 'react';
import { PropertyName } from 'typescript';
import styles from './cube.module.css';

function Grids(props: any){
    let containerRef = useRef(null);
    let active = false;
    let rotateSpeed = -0.5;
    let lastDeg = {
        x: 0,
        y: 0
    };
    let mousePosition = {
        x: 0,
        y: 0
    };

    function startRotate(e: React.MouseEvent<HTMLDivElement>){
        e.preventDefault();
        active = true;
        mousePosition.x = e.clientX;
        mousePosition.y = e.clientY;
        console.log("Active inner: " + active);
    }

    function rotate(e: React.MouseEvent<HTMLDivElement>){
        
    }

    function stopRotate(e: React.MouseEvent<HTMLDivElement>){
        active = false;
        console.log("Active inner: " + active);
    }


    return (
        <div 
            className={`${styles["grid-container"]} ${styles["grid-container--"+props.face]}`}
            onMouseDown={startRotate}
            onMouseMove={rotate}
            onMouseUp={stopRotate}
            ref={containerRef}
            >
            <div className={`${styles["grid-item"]} ${styles["grid-item--LU"]}`}></div>
            <div className={`${styles["grid-item"]} ${styles["grid-item--CU"]}`}></div>
            <div className={`${styles["grid-item"]} ${styles["grid-item--RU"]}`}></div>
            <div className={`${styles["grid-item"]} ${styles["grid-item--LC"]}`}></div>
            <div className={`${styles["grid-item"]} ${styles["grid-item--CC"]}`}></div>
            <div className={`${styles["grid-item"]} ${styles["grid-item--RC"]}`}></div>
            <div className={`${styles["grid-item"]} ${styles["grid-item--LD"]}`}></div>
            <div className={`${styles["grid-item"]} ${styles["grid-item--CD"]}`}></div>
            <div className={`${styles["grid-item"]} ${styles["grid-item--RD"]}`}></div>
        </div>
    );
}

export default Grids;