import React from 'react';
import USDAsearch from './USDAsearch.jsx';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const USDAresultsList = (props) => (
   
        <Table>
     
    
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
    </TableHeader> 

        <TableBody displayRowCheckbox={false} >
    {props.usdaResults.map((item, index) => 
        <TableRow 
        className="testNoBullet" 
        key={index}
        >
        <TableRowColumn>
            <li onClick={() => {
            props.handleClick(item.ndbno)}
            }>
            {item.name}
            </li>
        </TableRowColumn>
        </TableRow>
     )}
    </TableBody>
</Table>

    
    
)

export default USDAresultsList;