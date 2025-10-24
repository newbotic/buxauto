import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const Service = () => {
  const { serviceId } = useParams();
  
  const getServiceTitle = (id: string) => {
    switch (id) {
      case 'diagnoza-auto':
        return 'Diagnoza Auto';
      case 'mecanica-auto':
        return 'Mecanica Auto';
      case 'vopsitorie-auto':
        return 'Vopsitorie Auto';
      case 'tinichigerie-auto':
        return 'Tinichigerie Auto';
      case 'revizie-auto':
        return 'Revizie Auto';
      default:
        return 'Serviciu';
    }
  };

  const getServiceDescription = (id: string) => {
    switch (id) {
      case 'diagnoza-auto':
        return 'Servicii complete de diagnosticare computerizată pentru identificarea precisă a problemelor vehiculului dumneavoastră.';
      case 'mecanica-auto':
        return 'Reparații mecanice profesionale pentru toate mărcile și modelele de automobile.';
      case 'vopsitorie-auto':
        return 'Servicii de vopsitorie auto de înaltă calitate, cu materiale premium și tehnologii moderne.';
      case 'tinichigerie-auto':
        return 'Reparații profesionale de caroserie și servicii complete de tinichigerie auto.';
      case 'revizie-auto':
        return 'Servicii complete de revizie tehnică pentru menținerea mașinii dumneavoastră în stare optimă.';
      default:
        return 'Descriere serviciu';
    }
  };

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        {getServiceTitle(serviceId || '')}
      </Typography>
      <Typography variant="body1" paragraph>
        {getServiceDescription(serviceId || '')}
      </Typography>
    </Box>
  );
};

export default Service;