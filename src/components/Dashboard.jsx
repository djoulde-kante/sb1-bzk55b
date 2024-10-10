import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Container } from '@mui/material';
import { Dashboard as DashboardIcon, ShoppingCart, Assessment, AttachMoney, Settings } from '@mui/icons-material';

import DashboardHome from './DashboardHome';
import Products from './Products';
import Sales from './Sales';
import Reports from './Reports';
import Finances from './Finances';
import Settings from './Settings';

const drawerWidth = 240;

const Dashboard = () => {
  const menuItems = [
    { text: 'Tableau de bord', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Produits', icon: <ShoppingCart />, path: '/dashboard/products' },
    { text: 'Ventes', icon: <AttachMoney />, path: '/dashboard/sales' },
    { text: 'Rapports', icon: <Assessment />, path: '/dashboard/reports' },
    { text: 'Finances', icon: <AttachMoney />, path: '/dashboard/finances' },
    { text: 'Paramètres', icon: <Settings />, path: '/dashboard/settings' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Gestion de Supérette
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Container style={{ flexGrow: 1, padding: '20px', marginTop: '64px' }}>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Container>
    </div>
  );
};

export default Dashboard;