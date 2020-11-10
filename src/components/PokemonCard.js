import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { capitalizeName } from './../utility/functions';
import Loading from './Loading';

const PokemonCard = ({ pokemon }) => {
	const [frontSprite, setFrontSprite] = useState('');
	const [backSprite, setBackSprite] = useState('');
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const abortController = new AbortController();

		const getSprites = async () => {
			try {
				const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
				const data = await response.json();

				setFrontSprite(data.sprites.front_default);
				setBackSprite(data.sprites.back_default);
				setIsLoaded(true);
			} catch (error) {
				console.log(error);
			}
		};

		getSprites();

		return () => abortController.abort();
	}, [pokemon.name]);

	if (isLoaded) {
		return (
			<li className='card'>
				<div className='card__sprite-row'>
					<img
						className='card__sprite'
						src={frontSprite}
						alt={`front facing sprite for ${pokemon.name}`}
					/>
					<img
						className='card__sprite'
						src={backSprite}
						alt={`back facing sprite for ${pokemon.name}`}
					/>
				</div>
				<h2 className='card__heading'>{capitalizeName(pokemon.name)}</h2>
				<Link className='card__button' to={`/pokemon/${pokemon.name}`}>
					View Details
				</Link>
			</li>
		);
	} else {
		return (
			<li className='card'>
				<Loading />
			</li>
		);
	}
};

export default PokemonCard;
