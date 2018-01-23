import React from 'react';
import USDAsearch from './USDAsearch.jsx'

const USDAresultsList = (props) => (
    <div>
        {console.log("hi", props)}
        {props.usdaResults.map((item, index) => 
        <li className="testNoBullet" key={index}>{item.name}</li>)}
    </div>
)

export default USDAresultsList;