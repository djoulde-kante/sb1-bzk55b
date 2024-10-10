import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Reports = () => {
  const salesData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
    datasets: [
      {
        label: 'Ventes mensuelles',
        data: [12000, 19000, 15000, 18000, 22000, 28000],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Évolution des ventes',
      },
    },
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Rapports
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Évolution des ventes
            </Typography>
            <Line data={salesData} options={options} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Produits les plus vendus
            </Typography>
            <ol>
              <li>Lait</li>
              <li>Pain</li>
              <li>Œufs</li>
              <li>Fromage</li>
              <li>Yaourt</li>
            </ol>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Statistiques générales
            </Typography>
            <Typography>Chiffre d'affaires total: 114000 €</Typography>
            <Typography>Nombre total de ventes: 2450</Typography>
            <Typography>Panier moyen: 46.53 €</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Reports;