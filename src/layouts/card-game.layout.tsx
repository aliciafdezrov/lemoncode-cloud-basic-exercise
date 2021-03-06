import * as React from 'react';

export const CardGameLayout: React.FC = (props) => {
	return (
		<div
			style={{
				minHeight: '100%',
				boxSizing: 'border-box',
				background: "transparent linear-gradient(180deg, #F4F4F4 0%, #E7E8E8 100%) 0% 0% no-repeat padding-box",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				padding: '5%',
			}}
		>
			{props.children}
		</div>
	)
}
