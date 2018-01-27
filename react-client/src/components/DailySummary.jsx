import React from 'react';
import Paper from 'material-ui/Paper';
import SetCalories from './SetCalories.jsx';
import CaloriesInputed from './CaloriesInputed.jsx';
import RemainingCalories from './RemainingCalories.jsx';
import NutrientTable from './NutrientTable.jsx'


const DailySummary = (props) => {
    console.log('daily summary props:', props)
    return (
      <div>
          <Paper>
            <div>
                <span><SetCalories calories={props.calories}/></span>
                <span> <CaloriesInputed/></span>
                <span><RemainingCalories/></span>
                {/* <div>
                    <NutrientTable/>
                </div> */}
            </div>
        </Paper>
      </div>
    );
  }

export default DailySummary;
  