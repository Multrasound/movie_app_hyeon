import React from 'react';
import PropTypes from 'prop-types';

Food.propTypes = {
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired
};

function Food({name, stars}) {
  return <h1>I love {name} ({stars})</h1>
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    stars: 3
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    stars: 5
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} stars={dish.stars} />
      ))}
    </div>
  )
}

export default App;
 