import { Button, TextField, Typography, Paper, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProd = () => {
  const [prodData, setProdData] = useState({
    title: '',
    image: '',
    price: '',
    rating: ''
  });

  const navigate = useNavigate();

  function updateValue() {
    console.log(prodData);
    navigate('/');
  }

  return (
    <Container sx={{ marginTop: '5%', display: 'flex', justifyContent: 'center' }}>
      <Paper 
        elevation={4} 
        sx={{ padding: 4, maxWidth: 450, textAlign: 'center', borderRadius: 3 }}
      >
        <Typography variant="h4" sx={{ color: 'gray', fontWeight: 'bold', mb: 3 }}>
          ADD NEW PRODUCT
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              onChange={(e) => setProdData({ ...prodData, title: e.target.value })}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Image URL"
              variant="outlined"
              fullWidth
              onChange={(e) => setProdData({ ...prodData, image: e.target.value })}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              type="number"
              onChange={(e) => setProdData({ ...prodData, price: e.target.value })}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Rating"
              variant="outlined"
              fullWidth
              type="number"
              onChange={(e) => setProdData({ ...prodData, rating: e.target.value })}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              sx={{
                padding: '10px',
                fontSize: '16px',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#1976d2' }
              }}
              onClick={updateValue}
            >
              ADD PRODUCT
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AddProd;
