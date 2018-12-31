import React from 'react';

const Scroll = (props) => {
	return (
		<div style = {{ overflowY: 'scroll', border: '5px solid white', margin: '6px', height: '300px' }}>
			{props.children}
		</div>

	);
};

export default Scroll;