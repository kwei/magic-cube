import { useRef } from 'react';
import styles from './piece.module.css';

function piece(props: any){
    let pieceColor = props.pieceColor;
    let indexing = props.indexing;
    let containerRef = useRef<HTMLDivElement>(null);

    if (containerRef !== null) {
        let containerDom = containerRef.current;
        if (containerDom !== null) {
            containerDom.style.backgroundColor = ""+pieceColor;
        }
    }


    return (
        <div className={`${styles["piece-container"]}`} ref={containerRef}>

        </div>
    );
}

export default piece;