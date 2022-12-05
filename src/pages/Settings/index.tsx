import { Grid } from '@mui/material'
import { Container } from '@mui/system';
import { useCar } from '../../contexts/Car';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'
import Header from '../../components/Header';

const Settings: React.FC = () => {
  const { events, setEvents, clients } = useCar()

  return (
    <Container style={{ padding: 16 }}>
      <Header />
      <Grid container spacing={2} marginTop={1} marginBottom={1}>
      </Grid>
      <TableContainer component={Paper} style={{ maxHeight: 500, height: 500 }}>
      <Table stickyHeader sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>IP</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>ActiveBy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ overflowY: 'scroll' }}>
          {clients.map((client) => (
            <TableRow
              key={client.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {client.name}
              </TableCell>
              <TableCell>{client.data.IP}</TableCell>
              <TableCell>{client.status}</TableCell>
              <TableCell>{client.data.ActiveBy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}

export default Settings;
