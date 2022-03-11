import { LegacyRef, useRef } from 'react';
import styles from './cube.module.css';

function Cube() {
    let cubeRef = useRef<HTMLDivElement>(null);
    var currentClass = useRef<string>('');
    var currentFace = useRef<string>('');
    var horizontalFaceIndex = useRef<Array<string>>(['front', 'right', 'back', 'left']);
    var verticalFaceIndex = useRef<Array<string>>(['front', 'bottom', 'back', 'top']);
    
    function turn(e: React.DragEvent<HTMLDivElement>){ //only for div element's onDrag event
        let cubeDom = cubeRef.current;
        if ( cubeDom == null) {
            return;
        }
        e = e || window.event;

        currentFace.current = 'front';
        if ( currentClass.current != '') {
            currentFace.current = String(styles[currentClass.current]).split("-")[1].split("__")[0];
        }
        console.log("Current face: ", currentFace.current);
        let direct = currentFace.current

        if(e.pageX > 300) {
            // direct = "left"
            let lastElement = horizontalFaceIndex.current[3]
            horizontalFaceIndex.current.pop();
            horizontalFaceIndex.current.unshift(lastElement);
            verticalFaceIndex.current[0] = horizontalFaceIndex.current[0];
            verticalFaceIndex.current[2] = horizontalFaceIndex.current[2];
            direct = horizontalFaceIndex.current[0];
        }
        else if (e.pageX < 90) {
            // direct = "right"
            let firstElement = horizontalFaceIndex.current[0];
            horizontalFaceIndex.current.shift();
            horizontalFaceIndex.current.push(firstElement);
            verticalFaceIndex.current[0] = horizontalFaceIndex.current[0];
            verticalFaceIndex.current[2] = horizontalFaceIndex.current[2];
            direct = horizontalFaceIndex.current[0];
        }
        else if (e.pageY < 80) {
            // direct = "bottom"
            let firstElement = verticalFaceIndex.current[0];
            verticalFaceIndex.current.shift();
            verticalFaceIndex.current.push(firstElement);
            horizontalFaceIndex.current[0] = verticalFaceIndex.current[0];
            horizontalFaceIndex.current[2] = verticalFaceIndex.current[2];
            direct = verticalFaceIndex.current[0];
        }
        else if (e.pageY > 285) {
            direct = "top"
            let lastElement = verticalFaceIndex.current[3]
            verticalFaceIndex.current.pop();
            verticalFaceIndex.current.unshift(lastElement);
            horizontalFaceIndex.current[0] = verticalFaceIndex.current[0];
            horizontalFaceIndex.current[2] = verticalFaceIndex.current[2];
            direct = verticalFaceIndex.current[0];
        }

        console.log("horizontalFaceIndex: ", horizontalFaceIndex.current);
        console.log("verticalFaceIndex: ", verticalFaceIndex.current);

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
            onDrop={turn}
            >
			<div ref={cubeRef} className={`${styles["cube"]}`} 
                draggable="true"
                >
				<div className={`${styles["cube__face"]} ${styles["cube__face--front"]}`}>front</div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--back"]}`}>back</div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--right"]}`}>right</div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--left"]}`}>left</div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--top"]}`}>top</div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--bottom"]}`}>bottom</div>
			</div>
		</div>
    );
}

export default Cube;