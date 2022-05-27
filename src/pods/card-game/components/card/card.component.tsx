import * as React from "react";
import classes from "./card.component.module.scss"
import {CardVm} from "./card.vm";
import CardImage from './card.svg';
const assetsRoute = '../../../assets/images/';

interface Props {
    card: CardVm;
    onClick: (card: CardVm) => void
    position: number
}

export const Card: React.FC<Props> = React.memo((props) => {
    const {
        card,
        onClick,
        position,
    } = props;
    const handleClick = () => {
        onClick(card)
    };
    const cardClassName = card.imageIsUp ? `${classes["card"]} ${classes["animation"]}` : `${classes["card"]}`

    return (
        <div onClick={handleClick} className={cardClassName}>
            <div className={classes["card-flipped"]}>
                <img alt={`flipped ${position}`} src={`${assetsRoute}${card.image.src}.jpeg`}/>
            </div>
            <div className={classes["card-not-flipped"]} style={{background: `url(${CardImage})`}}>
                <label className={classes["card-identifier"]} aria-label="card-position-label">{position}</label>
            </div>
        </div>
    );
});
