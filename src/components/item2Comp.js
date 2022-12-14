import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const rows = [
  {
    "name":"Frozen yoghurt",
    "calories":259,
    "fat":6.0,
    "carbs":24,
    "protein":3.0
  },
  {
    "name":"Ice cream sandwich",
    "calories":137,
    "fat":9.0,
    "carbs":36,
    "protein":5.3
  },
  {
    "name":"Eclair",
    "calories":162,
    "fat":5.1,
    "carbs":35,
    "protein":4.5
  },
  {
    "name":"Cupcake",
    "calories":229,
    "fat":6.0,
    "carbs":25,
    "protein":4.0
  },
  {
    "name":"Gingerbread",
    "calories":459,
    "fat":4.0,
    "carbs":23,
    "protein":4.6
  }
];

let actionBtn = () => {

}

let Item2Comp = ()=>{
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    <TableCell align="right">Action&nbsp;</TableCell>
                </TableRow>
                </TableHead>    
            <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">{<Button variant="contained" onClick={actionBtn}>Action Button</Button>}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
      </Table>
    </TableContainer>
    )
}

export default Item2Comp;