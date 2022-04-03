import { useRef } from 'react';
import styles from './grids.module.css';

function Grids(props: any){
    let containerRef = useRef<HTMLDivElement>(null);
    let active = false;
    let cubeFace = props.face;
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
            className={`${styles["grid-container"]} ${styles["grid-container--"+cubeFace]}`}
            onMouseDown={startRotate}
            onMouseMove={rotate}
            onMouseUp={stopRotate}
            ref={containerRef}
            >
            <div className={`${styles["grid-item"]} ${styles["grid-item--"+cubeFace+"-LU"]}`}></div>
            <div className={`${styles["grid-item"]} ${styles["grid-item--"+cubeFace+"-CU"]}`}></div>
            <div className={`${styles["grid-item"]} ${styles["grid-item--"+cubeFace+"-RU"]}`}></div>
            <div className={`${styles["grid-item"]} ${styles["grid-item--"+cubeFace+"-LC"]}`}></div>
            <div className={`${styles["grid-item"]} ${styles["grid-item--"+cubeFace+"-CC"]}`}><p>KW</p></div>
            <div className={`${styles["grid-item"]} ${styles["grid-item--"+cubeFace+"-RC"]}`}></div>
            <div className={`${styles["grid-item"]} ${styles["grid-item--"+cubeFace+"-LD"]}`}></div>
            <div className={`${styles["grid-item"]} ${styles["grid-item--"+cubeFace+"-CD"]}`}></div>
            <div className={`${styles["grid-item"]} ${styles["grid-item--"+cubeFace+"-RD"]}`}></div>
        </div>
    );
}

export default Grids;