import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {
	const appID = 'b6f20bc0';
	const api = '422420553f5e3163bb79c5f748041e2f';

	const [ recipes, setRecipies ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ query, setquery ] = useState('');

	const req = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${api}`;

	useEffect(
		() => {
			getRecipies();
		},
		[ query ]
	);

	const getRecipies = async () => {
		const response = await fetch(req);
		const data = await response.json();
		setRecipies(data.hits);
		console.log(data.hits);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
		console.log(search);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setquery(search);
		setSearch('');
	};

	return (
		<div className="App">
			<form onSubmit={getSearch} className="search-form">
				<input className="search-bar" type="text" value={search} onChange={updateSearch} />
				<button className="search-btn" type="submit">
					Search
				</button>
			</form>
			<div className="recipes">
				{recipes.map((recipe) => (
					<Recipe
						key={recipe.recipe.label}
						title={recipe.recipe.label}
						image={recipe.recipe.image}
						source={recipe.recipe.source}
						ingredients={recipe.recipe.ingredients}
						url={recipe.recipe.url}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
