import React from 'react';
import USDAsearch from './USDAsearch.jsx'

const USDAresultsList = (props) => (
    <div>
        {props.usdaResults.map((item, index) => 
        <li onClick={() => {
            props.handleClick(item.ndbno)}
        }
        className="testNoBullet" 
        key={index}
        >{"NDBNO #: "}{item.ndbno} {"  + "} {item.name}</li>)}
    </div>
)

export default USDAresultsList;