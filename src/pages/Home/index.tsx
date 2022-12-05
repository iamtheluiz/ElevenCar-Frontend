import { Container } from '@mui/system';
import { useCar } from '../../contexts/Car';
import LogTable from '../../components/LogTable';
import ClientList from '../../components/ClientList';
import Header from '../../components/Header';

const Home: React.FC = () => {
  const { events } = useCar()

  return (
    <Container style={{ padding: 16 }}>
      <Header />
      <ClientList />
      <LogTable events={events} />
    </Container>
  );
}

export default Home;
