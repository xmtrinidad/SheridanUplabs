import React, { Component } from 'react';
import './Cards.css';

import Card from '../../components/Card/Card';

import card1 from '../../assets/card_img1.jpg'
import card2 from '../../assets/card_img2.jpg'
import card3 from '../../assets/card_img3.jpg'
import card4 from '../../assets/card_img4.jpg'
import card5 from '../../assets/card_img5.jpg'
import card6 from '../../assets/card_img6.jpg'


class Cards extends Component {
		state = {
			cardContent: [
				{
					id: 1,
					img: card1,
					headline: 'Lorem ipsum dolor sit amet, consectetur',
					description: 'Mauris ultrices felis in risus hendrerit, sit amet vestibulum justo aliquam. Curabitur imperdiet vehicula fringilla. In congue dui quis odio vestibulum imperdiet.',
					link: '#'
				},
				{
					id: 2,
					img: card2,
					headline: 'Lorem ipsum dolor sit amet, consectetur',
					description: 'Mauris ultrices felis in risus hendrerit, sit amet vestibulum justo aliquam. Curabitur imperdiet vehicula fringilla. In congue dui quis odio vestibulum imperdiet.',
					link: '#'
				},
				{
					id: 3,
					img: card3,
					headline: 'Lorem ipsum dolor sit amet, consectetur',
					description: 'Mauris ultrices felis in risus hendrerit, sit amet vestibulum justo aliquam. Curabitur imperdiet vehicula fringilla. In congue dui quis odio vestibulum imperdiet.',
					link: '#'
				},
				{
					id: 4,
					img: card4,
					headline: 'Lorem ipsum dolor sit amet, consectetur',
					description: 'Mauris ultrices felis in risus hendrerit, sit amet vestibulum justo aliquam. Curabitur imperdiet vehicula fringilla. In congue dui quis odio vestibulum imperdiet.',
					link: '#'
				},
				{
					id: 5,
					img: card5,
					headline: 'Lorem ipsum dolor sit amet, consectetur',
					description: 'Mauris ultrices felis in risus hendrerit, sit amet vestibulum justo aliquam. Curabitur imperdiet vehicula fringilla. In congue dui quis odio vestibulum imperdiet.',
					link: '#'
				},
				{
					id: 6,
					img: card6,
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