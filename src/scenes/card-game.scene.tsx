import * as React from 'react';
import { CardGame } from "../pods/card-game/card-game.component";
import { CardGameLayout } from "../layouts/card-game.layout";

export const CardGameScene = () => {
	return (
		<CardGameLayout>
			<CardGame/>
		</CardGameLayout>
	)
}
