import React from 'react';
import DailySummary from './DailySummary.jsx';
import Paper from 'material-ui/Paper';
import SetCalories from './SetCalories.jsx';
import CaloriesInputed from './CaloriesInputed.jsx';
import RemainingCalories from './RemainingCalories.jsx';
import NutrientTable from './NutrientTable.jsx'


const Home = (props) => {
    return (
        <div>
            <DailySummary/>
        </div>
    )
}

export default Home;