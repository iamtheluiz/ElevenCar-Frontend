import React from 'react';
import { Grid } from '@mui/material';
import { useCar } from '../contexts/Car';
import ClientCard from './ClientCard';

const ClientList: React.FC = () => {
  const { clients } = useCar()

  return (
    // <Grid container marginTop={1} marginBottom={1}>
    //   {clients.map(client => (
    //     <ClientCard key={`${client.id} - ${client.name}`} client={client} />
    //   ))}
    // </Grid>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: 16,
      marginTop: 8,
      marginBottom: 8,
      overflowX: 'auto',
      paddingBottom: 2
    }}>
      {clients.map(client => (
        <ClientCard key={`${client.id} - ${client.name}`} client={client} />
      ))}
    </div>
  );
}

export default ClientList;