import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Sales = () => {
  const [sales] = useState([
    { id: 1, date: '2024-03-15', total: 45.5, items: 5 },
    { id: 2, date: '2024-03-14', total: 32.8, items: 3 },
    { id: 3, date: '2024-03-13', total: 67.2, items: 8 },
  ]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Historique des Ventes
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Total (€)</TableCell>
              <TableCell align="right">Nombre d'articles</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sales.map((sale) => (
              <TableRow key={sale.id}>
                <TableCell component="th" scope="row">
                  {sale.date}
                </TableCell>
                <TableCell align="right">{sale.total.toFixed(2)}</TableCell>
                <TableCell align="right">{sale.items}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Sales;