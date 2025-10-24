import { Typography, Box, ImageList, ImageListItem, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const Gallery = () => {
  const images = [
    { url: 'https://source.unsplash.com/random/800x600?car+repair', title: 'Service Auto 1' },
    { url: 'https://source.unsplash.com/random/800x600?mechanic', title: 'Service Auto 2' },
    { url: 'https://source.unsplash.com/random/800x600?auto+paint', title: 'Service Auto 3' },
    { url: 'https://source.unsplash.com/random/800x600?car+service', title: 'Service Auto 4' },
    { url: 'https://source.unsplash.com/random/800x600?car+diagnostic', title: 'Service Auto 5' },
    { url: 'https://source.unsplash.com/random/800x600?auto+workshop', title: 'Service Auto 6' },
  ];

  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  const cols = mdUp ? 3 : smUp ? 2 : 1;

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Galerie
      </Typography>
  <ImageList sx={{ width: '100%', height: 'auto' }} cols={cols} rowHeight={200}>
        {images.map((item) => (
          <ImageListItem key={item.url}>
            <img
              src={item.url}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Gallery;