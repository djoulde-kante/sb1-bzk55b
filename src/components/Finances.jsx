import React from 'react';
import { Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Finances = () => {
  const expensesData = {
    labels: ['Achats', 'Salaires', 'Loyer', 'Électricité', 'Autres'],
    datasets: [
      {
        data: [12000, 8000, 3000, 1500, 2000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  const transactions = [
    { id: 1, date: '2024-03-15', description: 'Vente journalière', montant: 1250.5 },
    { id: 2, date: '2024-03-14', description: 'Paiement fournisseur', montant: -500 },
    { id: 3, date: '2024-03-13', description: 'Vente journalière', montant: 980.75 },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Finances
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Répartition des dépenses
            </Typography>
            <Pie data={expensesData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Dernières transactions
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Montant (€)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell align="right" style={{ color: transaction.montant >= 0 ? 'green' : 'red' }}>
                        {transaction.montant.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Finances;