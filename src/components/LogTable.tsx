import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Box,
  Typography,
  Button,
  IconButton
} from '@mui/material'

import { MdVisibility } from 'react-icons/md'
import { useCar } from '../contexts/Car';

interface TableProps {
  events: {
    id: string | number,
    event: any,
    type: string,
    client: any,
    to: any,
    value: any
  }[]
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 760,
  height: 520,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'auto'
};

const LogTable: React.FC<TableProps> = ({ events }) => {
  const [isStickToBottom, setIsStickToBottom] = useState(true)
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState('');
  const { setEvents } = useCar();

  useEffect(() => {
    if (isStickToBottom) {
      const tbody = document.querySelector("table")?.parentElement;
  
      tbody?.scroll({ top: tbody!.scrollHeight });
    }
  }, [events])

  useEffect(() => {
    if (isStickToBottom) {
      const tbody = document.querySelector("table")?.parentElement;
  
      tbody?.scroll({ top: tbody!.scrollHeight });
    }
  }, [events])

  function handleClose() {
    setOpen(false)
  }

  function handleOpen(event: any) {
    let eventData = { ...event }
    eventData.value = JSON.parse(eventData.value)
    setSelectedEvent(eventData)
    setOpen(true)
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row-reverse', marginBottom: 6, gap: 6 }}>
        <Button
          variant="contained"
          style={!isStickToBottom ? {} : {
            backgroundColor: 'white',
            color: '#1976d2'
          }}
          onClick={() => setIsStickToBottom(!isStickToBottom)}
        >
          {isStickToBottom ? 'Rolagem Manual': 'Rolagem Automática'}
        </Button>
        <Button
          variant="contained"
          onClick={() => setEvents([])}
          style={{
            backgroundColor: 'white',
            color: '#1976d2'
          }}
        >
          Limpar
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Requisição Completa
          </Typography>
          <pre>{JSON.stringify(selectedEvent, null, 2)}</pre>
          <br />
          <div style={{ width: '100%', textAlign: 'right' }}>
            <Button onClick={handleClose} variant='contained'>Fechar</Button>
          </div>
        </Box>
      </Modal>
      <TableContainer component={Paper} style={{ maxHeight: 500, height: 500 }}>
        <Table stickyHeader sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Event</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>To</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ overflowY: 'scroll' }}>
            {events.map((event, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{event.event}</TableCell>
                <TableCell>{event.type}</TableCell>
                <TableCell>{event.client.name}</TableCell>
                <TableCell>{event.to.name}</TableCell>
                <TableCell>
                  <span style={{
                    display: 'block',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: 520
                  }}>
                    {event.value}
                  </span>
                </TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleOpen(event)} style={{
                    backgroundColor: '#1976d2'
                  }}>
                    <MdVisibility color="white" size={24} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>  
    </>
  );
}

export default LogTable;