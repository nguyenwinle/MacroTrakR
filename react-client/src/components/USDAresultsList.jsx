import React from 'react';
import USDAsearch from './USDAsearch.jsx'

const USDAresultsList = (props) => (
    <div>
        {console.log("hi", props)}
        {props.usdaResults.map((item, index) => 
        <li onClick={() => {
            props.handleClick()}
        }
        className="testNoBullet" 
        key={index}
        >{item.name}</li>)}
    </div>
)

export default USDAresultsList;