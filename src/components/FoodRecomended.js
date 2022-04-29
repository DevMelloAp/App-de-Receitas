import React from 'react';
import PropTypes from 'prop-types';

function FoodRecomended(props) {
  const { recipeImage, recipeCategory, recipeTitle, key } = props;
  return (
    <section data-testid={ `${key}-recomendation-card` }>
      <img
        src={ recipeImage }
        alt="Meal"
        width="360"
        height="128"
      />
      <h3>
        { recipeTitle }
      </h3>
      <h5>
        { recipeCategory }
      </h5>
    </section>
  );
}

export default FoodRecomended;

FoodRecomended.propTypes = {
  recipeImage: PropTypes.string.isRequired,
  recipeCategory: PropTypes.string.isRequired,
  recipeTitle: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};
