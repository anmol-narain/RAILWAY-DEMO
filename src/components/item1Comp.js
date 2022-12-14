import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Item1Modal from './item1CompModal';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const rows = [
    {
      "name":"Frozen yoghurt",
      "calories":159,
      "fat":6.0,
      "carbs":24,
      "protein":4.0
    },
    {
      "name":"Ice cream sandwich",
      "calories":237,
      "fat":9.0,
      "carbs":37,
      "protein":4.3
    },
    {
      "name":"Eclair",
      "calories":262,
      "fat":5.0,
      "carbs":34,
      "protein":4.5
    },
    {
      "name":"Cupcake",
      "calories":129,
      "fat":6.0,
      "carbs":25,
      "protein":2.0
    },
    {
      "name":"Gingerbread",
      "calories":459,
      "fat":4.0,
      "carbs":23,
      "protein":4.6
    }
  ];



let Item1Comp = ()=>{

    const [id,setId] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let actionBtn = (e) => {
        console.log(e.target.id);
        setId(e.target.id)
        handleOpen();
        
    }

    return(
        <>
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
                    <TableCell align="right">{<Button variant="contained" id={row.name} onClick={(e)=>{actionBtn(e)}}>Action Button</Button>}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
      </Table>
    </TableContainer>
    <Item1Modal
        id={id}
        rows={rows}
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
    />
    </>
    )
}

export default Item1Comp;