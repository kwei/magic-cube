import { useRef } from 'react';
import styles from './rubikCube.module.css';
import Block from './block';

function RubikCube(props: any) {
    let containerRef = useRef<HTMLDivElement>(null);
    let cubeRef = useRef<HTMLDivElement>(null);
    let isMouseDown = false;
    let rotateSpeed = -0.5;
    let lastDeg = { x: 0, y: 0 };
    let mousePosition = { x: 0, y: 0 };

    const colors = [
        // 0 -> z+ : green
        "Green",
        // 1 -> z- : blue
        "Blue",
        // 2 -> x+ : red
        "Red",
        // 3 -> x- : orange
        "Orange",
        // 4 -> y+ : white
        "White",
        // 5 -> y- : yellow
        "Yellow",
    ];
    const faces = [
        // z-1
        [
            [[0, 3, 4], [0, 4], [0, 2, 4]], 
            [[0, 3],    [0],    [0, 2]   ], 
            [[0, 3, 5], [0, 5], [0, 2, 5]]
        ],
        // z-2
        [
            [[3, 4], [4], [2, 4]], 
            [[3],    [],  [2]   ], 
            [[3, 5], [5], [2, 5]]
        ],
        // z-3
        [
            [[1, 3, 4], [1, 4], [1, 2, 4]], 
            [[1, 3],    [1],    [1, 2]], 
            [[1, 3, 5], [1, 5], [1, 2, 5]]
        ]
    ];
    // const faces = [
    //     // z-1
    //     [
    //         [[0, 3, 4], [0, 4], [0, 2, 4]]
    //     ]
    // ];



    function mouseDown (e: React.MouseEvent<HTMLDivElement>) {
        isMouseDown = true;
        mousePosition.x = e.clientX;
        mousePosition.y = e.clientY;
    }


    function mouseMove (e: React.MouseEvent<HTMLDivElement>) {
        if (isMouseDown === true) {
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
            return cubeDom.style.transform = "translateZ(-100px) rotateY(" + lastDeg.y + "deg) rotateX(" + lastDeg.x + "deg)";
        }
    }


    function mouseUp (e: React.MouseEvent<HTMLDivElement>) {
        isMouseDown = false;
    }


    return (
        <div className={`${styles["container"]}`}
            onMouseDown={mouseDown}
            onMouseMove={mouseMove}
            onMouseUp={mouseUp}
            ref={containerRef}
            >
            <div className={`${styles["cube"]}`}
                ref={cubeRef}
                >
                {/* <div className={`${styles["axis-x"]}`}></div>
                <div className={`${styles["axis-y"]}`}></div>
                <div className={`${styles["axis-z"]}`}></div> */}
                {
                    faces.map((face, i) => 
                        face.map((items, j) => 
                            items.map((item, k) => 
                                <Block key={i+"-"+j+"-"+k} id={i+"-"+j+"-"+k} position={[k, j, i]} colors={colors} faces={item}></Block>
                            )
                            
                        )
                    )
                }
            </div>
		</div>
    );
}

export default RubikCube;