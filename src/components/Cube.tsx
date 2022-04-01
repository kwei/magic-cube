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

    function rotate(e: React.DragEvent<HTMLDivElement>){
        
    }

    return (
        <div className={`${styles["scene"]}`}
            onDragOver={(e)=>{e.preventDefault();}}
            onDrop={turn}
            onMouseMove={rotate}
            onMouseUp={(e)=>{e.preventDefault();}}
            >
			<div ref={cubeRef} className={`${styles["cube"]}`} 
                draggable="true"
                >
				<div className={`${styles["cube__face"]} ${styles["cube__face--front"]}`}>
                    <div className={`${styles["grid-container"]} ${styles["grid-container--front"]}`}>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--1"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--2"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--3"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--4"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--5"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--6"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--7"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--8"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--9"]}`}></div>
                    </div>
                </div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--back"]}`}>
                    <div className={`${styles["grid-container"]} ${styles["grid-container--back"]}`}>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--1"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--2"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--3"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--4"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--5"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--6"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--7"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--8"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--9"]}`}></div>
                    </div>
                </div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--right"]}`}>
                    <div className={`${styles["grid-container"]} ${styles["grid-container--right"]}`}>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--1"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--2"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--3"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--4"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--5"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--6"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--7"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--8"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--9"]}`}></div>
                    </div>
                </div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--left"]}`}>
                    <div className={`${styles["grid-container"]} ${styles["grid-container--left"]}`}>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--1"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--2"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--3"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--4"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--5"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--6"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--7"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--8"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--9"]}`}></div>
                    </div>
                </div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--top"]}`}>
                    <div className={`${styles["grid-container"]} ${styles["grid-container--top"]}`}>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--1"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--2"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--3"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--4"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--5"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--6"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--7"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--8"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--9"]}`}></div>
                    </div>
                </div>
                <div className={`${styles["cube__face"]} ${styles["cube__face--bottom"]}`}>
                    <div className={`${styles["grid-container"]} ${styles["grid-container--bottom"]}`}>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--1"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--2"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--3"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--4"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--5"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--6"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--7"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--8"]}`}></div>
                        <div className={`${styles["grid-item"]} ${styles["grid-item--9"]}`}></div>
                    </div>
                </div>
			</div>
		</div>
    );
}

export default Cube;