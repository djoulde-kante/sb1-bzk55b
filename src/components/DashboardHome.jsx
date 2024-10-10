import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardHome = () => {
  const salesData = {
    labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    datasets: [
      {
        label: 'Ventes journalières',
        data: [1200, 1900, 1500, 1800, 2200, 2800, 2000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
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
        text: 'Ventes de la semaine',
      },
    },
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Tableau de bord
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Résumé des ventes
            </Typography>
            <Bar data={salesData} options={options} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Statistiques rapides
            </Typography>
            <Typography>Ventes totales: 13400 €</Typography>
            <Typography>Nombre de transactions: 245</Typography>
            <Typography>Produit le plus vendu: Lait</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardHome;