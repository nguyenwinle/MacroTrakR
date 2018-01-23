import React from 'react';
// import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h3>{props.searchItem ? "Nutritional facts for a serving of " + props.searchItem + " is as follow:" : "What are we eating today?"}</h3> <br/>
    { props.items.map((item, index) => 
      <ListItem
      key={index}
        calories={item.calories}
        protein={item.protein}
        fats={item.fats}
        carbs={item.carbs}
        fiber={item.fiber}
        item={item}
        index={index}
        cholesterol= {item.cholesterol}
        sodium= {item.sodium}
        sugars= {item.sugars}
        Saturated = {item.Saturated}
      />)}
  </div>
)

export default List;


