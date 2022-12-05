import { Container } from '@mui/system';
import { useCar } from '../../contexts/Car';
import LogTable from '../../components/LogTable';
import ClientList from '../../components/ClientList';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';

const Client: React.FC = () => {
  const { events, clients } = useCar()
  const { id } = useParams()

  return (
    <Container style={{ padding: 16 }}>
      <Header title={clients.length > 0 ? clients.filter(client => client.id === id)[0].name : undefined} />
      <ClientList />
      <LogTable events={events.filter(event => event.emitter === id)} />
    </Container>
  );
}

export default Client;
