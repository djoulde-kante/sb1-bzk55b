import React, { useState } from 'react';
import { Typography, TextField, Button, Grid, Paper } from '@mui/material';

const Settings = () => {
  const [settings, setSettings] = useState({
    storeName: 'Ma Supérette',
    address: '123 Rue du Commerce, 75001 Paris',
    phone: '01 23 45 67 89',
    email: 'contact@masuperette.com',
    taxRate: 20,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour sauvegarder les paramètres
    console.log('Paramètres sauvegardés:', settings);
    alert('Paramètres sauvegardés avec succès!');
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Paramètres
      </Typography>
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nom du magasin"
                name="storeName"
                value={settings.storeName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Adresse"
                name="address"
                value={settings.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Téléphone"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={settings.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Taux de TVA (%)"
                name="taxRate"
                type="number"
                value={settings.taxRate}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Sauvegarder les paramètres
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default Settings;