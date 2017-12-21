import React from 'react';
import './Card.css';

const card = (props) => (
	<div className="Card">
			<div>
					<img className="img-fluid Card__img" src={props.img} alt="Card Item"/>
			</div>
			<div>
				<h5 className="Card__headline">{props.headline}</h5>
			</div>
			<div>
				<p className="Card__description">{props.description}</p>
			</div>
			<div>
				<a className="Card__btn" href={props.link}>Read More</a>
			</div>
	</div>
)

export default card;