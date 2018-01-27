import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';



const NdbnoResultsList = (props) => {
    return (
      
        <Table>
         {props.nutrient.length === 0 ?  
    
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn></TableHeaderColumn>
              </TableRow>
            </TableHeader> : 
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Nutrients</TableHeaderColumn>
              </TableRow>
            </TableHeader>
        }
        <TableBody displayRowCheckbox={false}>
        {props.nutrient.map((nutri, index) =>
            <TableRow key={index}>
            <TableRowColumn>{nutri.name}</TableRowColumn>
            <TableRowColumn>{nutri.value}{"  " + nutri.unit}</TableRowColumn>
          </TableRow>
        )}
        </TableBody>
      </Table>
    )
}

export default NdbnoResultsList;