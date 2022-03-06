import { LegacyRef, useRef } from 'react';
import styles from './cube.module.css';

function Cube() {
    let cubeRef = useRef<HTMLDivElement>(null);
    var currentClass = useRef<string>('');
    function dragging(e: React.DragEvent<HTMLDivElement>){ //only for div element's onDrag event
        let cubeDom = cubeRef.current;
        if ( cubeDom == null) {
            return;
        }
        e = e || window.event;
        // console.log("X: " + e.pageX + " Y: " + e.pageY);
        let direct = ""
        if(e.pageX > 300) {
            direct = "left"
        }
        else if (e.pageX < 90) {
            direct = "right"
        }
        else if (e.pageY < 80) {
            direct = "bottom"
        }
        else if (e.pageY > 285) {
            direct = "top"
        }
        let showClass = 'show-' + direct;
        if ( currentClass ) {
            cubeDom.classList.remove( styles[currentClass.current] );
        }
        cubeDom.classList.add( styles[showClass] );
        currentClass.current = showClass;
    }

    return (
        <div className={`${styles["scene"]}`}
            onDragOver={(e)=>{e.preventDefault();}}
            >
			<div ref={cubeRef} className={`${styles["cube"]}`} 
                onDrag={dragging} draggable="true"
                >
				<div className={`${styles["cube__face"]} ${styles["cube__face--front"]}`}></div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--back"]}`}></div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--right"]}`}></div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--left"]}`}></div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--top"]}`}></div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--bottom"]}`}></div>
			</div>
		</div>
    );
}

export default Cube;