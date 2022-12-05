import { Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ClientCardProps {
  client: any
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
  const navigate = useNavigate();

  function handleNavigateToClient() {
    navigate(`/cliente/${client.id}`)
  }

  return (
    <div style={{
      backgroundColor: client.status === 'Active' ? '#15B81B' : '#B81515',
      width: 284,
      minWidth: 284,
      height: 180,
      borderRadius: 6,
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 12,
      color: 'white',
    }}
    onClick={handleNavigateToClient}>
      <span>{client.name}</span>
      <span style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: 26
      }}>{client.status}</span>
      <ul style={{
        fontSize: 14
      }}>
        {Object.keys(client.data).map((key, i) => <li key={i}>{key}: {client.data[key]}</li>)}
      </ul>
    </div>
  );
}

export default ClientCard;