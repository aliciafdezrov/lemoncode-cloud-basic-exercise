import ReactDOM from 'react-dom';
import * as React from "react";
import classes from "./game-over-dialog.component.module.scss";
import Clock from './clock.svg';
import {Button} from "common";

interface Props {
    isOpen: boolean,
    onHide: () => void,
    duration: string,
}

export const GameOverDialog: React.FC<Props> = (props) => {
    const {isOpen, onHide, duration} = props;

    return (
        isOpen ? ReactDOM.createPortal(
            <div className={classes["dialog-overlay"]}>
                <div className={classes.dialog} aria-modal aria-hidden role="dialog">
                    <div className={classes["dialog-header"]}>
                        <h1>┬íCompletado!</h1>
                        <div className={classes["clock-and-time"]}>
                            <Clock/>
                            <label aria-label="game-duration-label">{duration}</label>
                        </div>
                    </div>
                    <div className={classes.dialogAction}>
                        <Button onClick={onHide}>Jugar otra vez</Button>
                    </div>
                </div>
            </div>, document.body) : null
    )
}

