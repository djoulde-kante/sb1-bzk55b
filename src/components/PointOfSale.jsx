import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, TextField, List, ListItem, ListItemText, Paper, Grid } from '@mui/material';

const PointOfSale = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({ name: '', price: '' });

  const addProduct = () => {
    if (currentProduct.name && currentProduct.price) {
      setProducts([...products, { ...currentProduct, id: Date.now() }]);
      setCurrentProduct({ name: '', price: '' });
    }
  };

  const total = products.reduce((sum, product) => sum + parseFloat(product.price), 0);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Point de vente
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Ajouter un produit
            </Typography>
            <TextField
              label="Nom du produit"
              value={currentProduct.name}
              onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Prix"
              type="number"
              value={currentProduct.price}
              onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" onClick={addProduct}>
              Ajouter
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Produits dans le panier
            </Typography>
            <List>
              {products.map((product) => (
                <ListItem key={product.id}>
                  <ListItemText primary={product.name} secondary={`${product.price} €`} />
                </ListItem>
              ))}
            </List>
            <Typography variant="h6">
              Total: {total.toFixed(2)} €
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Button component={Link} to="/dashboard" variant="contained" color="secondary" style={{ marginTop: '1rem' }}>
        Aller au Tableau de bord
      </Button>
    </Container>
  );
};

export default PointOfSale;