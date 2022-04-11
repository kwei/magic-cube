import React, { Component, useRef, useState } from 'react';
import styles from './block.module.css';

interface BlockProps {
    colors: string[],
    faces: number[],
    id: string,
    position: number[]
}

function Block (props: BlockProps) {
    let colors = props.colors;
    let faces = props.faces;
    let directions = ["front", "back", "right", "left", "top", "bottom"];
    let id = props.id;
    const BOX_SIZE = 60;
    let [positionX, positionY,positionZ] = props.position;
    let boxRef = useRef<HTMLDivElement>(null);

    function mouseDown (e: React.MouseEvent<HTMLDivElement>) {

    }

    function mouseMove (e: React.MouseEvent<HTMLDivElement>) {

    }

    function mouseUp (e: React.MouseEvent<HTMLDivElement>) {

    }

    return (
        <div className={`${styles["container"]} ${styles["container--"+id]}`} 
            style={{
                "--x": positionX*BOX_SIZE+"px",
                "--y": (positionY)*BOX_SIZE+"px",
                "--z": (-(positionZ-1))*BOX_SIZE+"px"
            } as React.CSSProperties}
            ref={boxRef}
            onMouseDown={mouseDown}
            onMouseMove={mouseMove}
            onMouseUp={mouseUp}
            >
            {
            directions.map((direction, index) => {
                let color = "Black";
                if (faces.some((item: number) => item === index)) {
                    color = colors[index];
                }
                return <div key={direction} className={`${styles["cubeFace"]} ${styles["cubeFace--"+direction]} ${styles["cubeFace--"+color]}`}>{/*<p>{id}</p>*/}</div>
            })
            }
        </div>
    );
}

export default Block;