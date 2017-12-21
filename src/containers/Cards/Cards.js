import React, { Component } from 'react';
import './Cards.css';

import Card from '../../components/Card/Card';

class Cards extends Component {
		state = {
			cardContent: [
				{
					id: 1,
					img: 'http://lorempixel.com/450/200/sports/1/',
					headline: 'Lorem ipsum dolor sit amet, consectetur',
					description: 'Mauris ultrices felis in risus hendrerit, sit amet vestibulum justo aliquam. Curabitur imperdiet vehicula fringilla. In congue dui quis odio vestibulum imperdiet.',
					link: '#'
				},
				{
					id: 2,
					img: 'http://lorempixel.com/450/200/sports/2/',
					headline: 'Lorem ipsum dolor sit amet, consectetur',
					description: 'Mauris ultrices felis in risus hendrerit, sit amet vestibulum justo aliquam. Curabitur imperdiet vehicula fringilla. In congue dui quis odio vestibulum imperdiet.',
					link: '#'
				},
				{
					id: 3,
					img: 'http://lorempixel.com/450/200/sports/3/',
					headline: 'Lorem ipsum dolor sit amet, consectetur',
					description: 'Mauris ultrices felis in risus hendrerit, sit amet vestibulum justo aliquam. Curabitur imperdiet vehicula fringilla. In congue dui quis odio vestibulum imperdiet.',
					link: '#'
				},
				{
					id: 4,
					img: 'http://lorempixel.com/450/200/sports/8/',
					headline: 'Lorem ipsum dolor sit amet, consectetur',
					description: 'Mauris ultrices felis in risus hendrerit, sit amet vestibulum justo aliquam. Curabitur imperdiet vehicula fringilla. In congue dui quis odio vestibulum imperdiet.',
					link: '#'
				},
				{
					id: 5,
					img: 'http://lorempixel.com/450/200/sports/5/',
					headline: 'Lorem ipsum dolor sit amet, consectetur',
					description: 'Mauris ultrices felis in risus hendrerit, sit amet vestibulum justo aliquam. Curabitur imperdiet vehicula fringilla. In congue dui quis odio vestibulum imperdiet.',
					link: '#'
				},
				{
					id: 6,
					img: 'http://lorempixel.com/450/200/sports/6/',
					headline: 'Lorem ipsum dolor sit amet, consectetur',
					description: 'Mauris ultrices felis in risus hendrerit, sit amet vestibulum justo aliquam. Curabitur imperdiet vehicula fringilla. In congue dui quis odio vestibulum imperdiet.',
					link: '#'
				},
			]
		}
    render() {
			const cards = this.state.cardContent.map( (c) => 
			<Card 
				key={c.id}
				img={c.img}
				headline={c.headline}
				description={c.description}
				link={c.link} /> 
		);

			return (
				<React.Fragment>
					<div className="Cards container">
						{cards}
					</div>
					<div className="load-more">
						<button type="button" className="btn btn-outline-secondary">Load More</button>
					</div>
				</React.Fragment>
			)
    }
}

export default Cards;