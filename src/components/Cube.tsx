import { useRef } from 'react';
import styles from './cube.module.css';
import Grids from './Grids';

function Cube() {
    let cubeRef = useRef<HTMLDivElement>(null);
    let sceneRef = useRef<HTMLDivElement>(null);
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
        active = true;
        mousePosition.x = e.clientX;
        mousePosition.y = e.clientY;
        console.log("Active: " + active);
    }

    function rotate(e: React.MouseEvent<HTMLDivElement>){
        if (active === true) {
            let cubeDom = cubeRef.current;
            if (cubeDom === null) {
                return ;
            }
            let delta = {
                x: e.pageX-mousePosition.x,
                y: e.pageY-mousePosition.y
            };
            mousePosition.x = e.pageX;
            mousePosition.y = e.pageY;

            lastDeg.y -= rotateSpeed*delta.x;
            lastDeg.x += rotateSpeed*delta.y;
            console.log("Deg: ( " + lastDeg.x + ", " + lastDeg.y + " )");
    
            return cubeDom.style.transform = "translateZ(-100px) rotateY(" + lastDeg.y + "deg) rotateX(" + lastDeg.x + "deg)";
        }
    }

    function stopRotate(e: React.MouseEvent<HTMLDivElement>){
        active = false;
        console.log("Active: " + active);
    }

    return (
        <div className={`${styles["scene"]}`}
            onMouseDown={startRotate}
            onMouseMove={rotate}
            onMouseUp={stopRotate}
            ref={sceneRef}
            >
			<div ref={cubeRef} className={`${styles["cube"]}`}>
				<div className={`${styles["cube__face"]} ${styles["cube__face--front"]}`}>
                    <Grids face="front"></Grids>
                </div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--back"]}`}>
                    <Grids face="back"></Grids>
                </div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--right"]}`}>
                    <Grids face="right"></Grids>
                </div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--left"]}`}>
                    <Grids face="left"></Grids>
                </div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--top"]}`}>
                    <Grids face="top"></Grids>
                </div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--bottom"]}`}>
                    <Grids face="bottom"></Grids>
                </div>
			</div>
		</div>
    );
}

export default Cube;