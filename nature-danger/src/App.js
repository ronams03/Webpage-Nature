import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import './App.css';

// Import all 30 pages
import Page01 from './pages/Page01';
import Page02 from './pages/Page02';
import Page03 from './pages/Page03';
import Page04 from './pages/Page04';
import Page05 from './pages/Page05';
import Page06 from './pages/Page06';
import Page07 from './pages/Page07';
import Page08 from './pages/Page08';
import Page09 from './pages/Page09';
import Page10 from './pages/Page10';
import Page11 from './pages/Page11';
import Page12 from './pages/Page12';
import Page13 from './pages/Page13';
import Page14 from './pages/Page14';
import Page15 from './pages/Page15';
import Page16 from './pages/Page16';
import Page17 from './pages/Page17';
import Page18 from './pages/Page18';
import Page19 from './pages/Page19';
import Page20 from './pages/Page20';
import Page21 from './pages/Page21';
import Page22 from './pages/Page22';
import Page23 from './pages/Page23';
import Page24 from './pages/Page24';
import Page25 from './pages/Page25';
import Page26 from './pages/Page26';
import Page27 from './pages/Page27';
import Page28 from './pages/Page28';
import Page29 from './pages/Page29';
import Page30 from './pages/Page30';

const NatureBackground = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #a8e063 0%, #56ab2f 100%);
  background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const pages = [
  { path: '/', label: 'Home', element: <Page01 /> },
  { path: '/page2', label: 'Deforestation', element: <Page02 /> },
  { path: '/page3', label: 'Pollution', element: <Page03 /> },
  { path: '/page4', label: 'Climate Change', element: <Page04 /> },
  { path: '/page5', label: 'Wildlife Extinction', element: <Page05 /> },
  { path: '/page6', label: 'Ocean Acidification', element: <Page06 /> },
  { path: '/page7', label: 'Soil Erosion', element: <Page07 /> },
  { path: '/page8', label: 'Desertification', element: <Page08 /> },
  { path: '/page9', label: 'Overfishing', element: <Page09 /> },
  { path: '/page10', label: 'Plastic Waste', element: <Page10 /> },
  { path: '/page11', label: 'Forest Fires', element: <Page11 /> },
  { path: '/page12', label: 'Water Scarcity', element: <Page12 /> },
  { path: '/page13', label: 'Loss of Biodiversity', element: <Page13 /> },
  { path: '/page14', label: 'Melting Glaciers', element: <Page14 /> },
  { path: '/page15', label: 'Coral Bleaching', element: <Page15 /> },
  { path: '/page16', label: 'Air Pollution', element: <Page16 /> },
  { path: '/page17', label: 'Toxic Waste', element: <Page17 /> },
  { path: '/page18', label: 'Urban Sprawl', element: <Page18 /> },
  { path: '/page19', label: 'Resource Depletion', element: <Page19 /> },
  { path: '/page20', label: 'Acid Rain', element: <Page20 /> },
  { path: '/page21', label: 'Invasive Species', element: <Page21 /> },
  { path: '/page22', label: 'Ozone Depletion', element: <Page22 /> },
  { path: '/page23', label: 'Microplastics', element: <Page23 /> },
  { path: '/page24', label: 'Noise Pollution', element: <Page24 /> },
  { path: '/page25', label: 'Light Pollution', element: <Page25 /> },
  { path: '/page26', label: 'Flooding', element: <Page26 /> },
  { path: '/page27', label: 'Drought', element: <Page27 /> },
  { path: '/page28', label: 'Pesticides', element: <Page28 /> },
  { path: '/page29', label: 'Overpopulation', element: <Page29 /> },
  { path: '/page30', label: 'Solutions', element: <Page30 /> },
];

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <Router>
      <NatureBackground>
        <AppBar position="static" style={{ background: 'rgba(34,139,34,0.85)' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: 2 }}>
              Nature's Warning
            </Typography>
            {pages.slice(0, 5).map((page, idx) => (
              <Button key={page.path} color="inherit" component={Link} to={page.path} style={{ fontWeight: 600 }}>
                {page.label}
              </Button>
            ))}
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <List style={{ width: 250 }}>
            {pages.map((page, idx) => (
              <ListItem button key={page.path} component={Link} to={page.path} onClick={() => setDrawerOpen(false)}>
                <ListItemText primary={page.label} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <AnimatePresence mode="wait">
          <Routes>
            {pages.map((page, idx) => (
              <Route key={page.path} path={page.path} element={
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  {page.element}
                </motion.div>
              } />
            ))}
          </Routes>
        </AnimatePresence>
      </NatureBackground>
    </Router>
  );
}

export default App;
