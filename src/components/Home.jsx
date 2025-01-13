import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Container } from '@mui/material';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Container sx={{ marginTop: '5%', display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={3} justifyContent="center">
        {data.map((row) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={row.id}>
            <Card
              sx={{
                maxWidth: 300,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.05)' }
              }}
            >
              <CardMedia sx={{ height: 180, objectFit: 'contain' }} image={row.image} title={row.title} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                  {row.title.length > 50 ? `${row.title.substring(0, 50)}...` : row.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Price: <b>${row.price}</b>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Rating: ⭐ {row.rating.rate} ({row.rating.count} reviews)
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button variant="contained" color="primary" size="small">
                  Buy Now
                </Button>
                <Button variant="outlined" color="secondary" size="small">
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
