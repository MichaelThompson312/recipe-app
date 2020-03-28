import React from 'react';

const Recipe = ({ title, image, source, url, ingredients }) => {
	return (
		<div className="recipe-item">
			<h1>{title}</h1>
			<p>
				<a href={url} target="blank">
					{source}
				</a>
			</p>
			<p>Ingredients</p>
			<ol>{ingredients.map((_item) => <li key={_item}>{_item.text}</li>)}</ol>
			<img src={image} alt="title" />
		</div>
	);
};
export default Recipe;
