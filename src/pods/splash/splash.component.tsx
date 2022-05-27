import * as React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./splash.component.module.scss";
import {Button} from "common";
import {appBaseRoutes} from "core";
import logo from 'assets/logo.png';

export const Splash: React.FC = () => {
	let navigate = useNavigate();
	return (
		<>
			<div className={classes.logo}>
				<img alt="Rick and morty logo" src={logo}/>
			</div>
			<h1 className={classes.title}>The game</h1>
			<Button onClick={() => {
				navigate(appBaseRoutes.cardGame)
			}}>Comenzar</Button>
		</>
	);
}
