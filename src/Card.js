import React from 'react';

const Card = ({ name, id, email }) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>	
		);	
}

export default Card;

//this html like syntax is jsx
//return only 1 thing, all under one div