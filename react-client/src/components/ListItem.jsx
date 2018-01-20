import React from 'react';
import Paper from 'material-ui/Paper';


const ListItem = (props) => (

  <div>
      <Paper>
      <li className="listItem">
    Saturated Fat: { " " + props.Saturated} grams
    </li>
    <li className="listItem">
    Calories: { " " + props.calories}
    </li>
   
    <li className="listItem">
    Protein: {" " + props.protein} grams
    </li>
   
    <li className="listItem">
    Total Fat: {" " + props.fats} grams
    </li>
   
    <li className="listItem">
    Carbohydrates: {" " + props.carbs} grams
    </li>
   
    <li className="listItem">
    Fiber: {" " + props.fiber} grams
    </li> 
   
    <li className="listItem">
    Cholesterol: {" " + props.cholesterol} grams
    </li>
   
    <li className="listItem">
    Sodium: {" " + props.sodium} grams
    </li>

    <li className="listItem">
    Sugars: {" " + props.sugars} grams
    </li><br/> 
    </Paper>
  </div>

)

export default ListItem;