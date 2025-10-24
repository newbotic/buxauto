import { Box, Typography, List, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const services = [
  { id: 'diagnoza-auto', title: 'Diagnoza Auto' },
  { id: 'mecanica-auto', title: 'Mecanica Auto' },
  { id: 'vopsitorie-auto', title: 'Vopsitorie Auto' },
  { id: 'tinichigerie-auto', title: 'Tinichigerie Auto' },
  { id: 'revizie-auto', title: 'Revizie Auto' },
];

const Services = () => {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Servicii
      </Typography>

      <List>
        {services.map((s) => (
          <ListItemButton key={s.id} component={Link} to={`/servicii/${s.id}`}>
            <ListItemText primary={s.title} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Services;
