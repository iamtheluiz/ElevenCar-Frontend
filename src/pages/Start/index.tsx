import axios from 'axios'
import { Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCar } from '../../contexts/Car';

const Start: React.FC = () => {
  const [isApiAvailable, setIsApiAvailable] = useState(false)
  const [serverIpValue, setServerIpValue] = useState("127.0.0.1:3333")
  const { setServerIp } = useCar();
  const navigate = useNavigate()

  async function handleSubmit() {
    try {
      const response = await axios({
        url: `http://${serverIpValue}/health-check`,
        headers: {
          name: 'Sistema de Monitoramento'
        }
      })

      if (response.data.status === "Active" && response.data.name === "API") {
        setServerIp(serverIpValue)
        navigate('/home')
      } else {
        alert("API Indisponível na URL informada!")
      }
    } catch (error: any) {
      alert(error)
    }
  }

  return (
    <Container style={{ padding: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <section style={{
        backgroundColor: 'white',
        height: 300,
        width: '100%',
        maxWidth: 460,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32
      }}>
        <h1>Entrada</h1>
        <br />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Endereço da API"
          variant="outlined"
          value={serverIpValue}
          onChange={event => setServerIpValue(event.target.value)}
        />
        <br />
        <Button variant="contained" size="large" fullWidth onClick={handleSubmit}>
          Enviar
        </Button>
      </section>
    </Container>
  );
}

export default Start;