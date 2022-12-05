import React from 'react';

interface TableProps {
  cells: {
    id: string | number,
    event: string,
    type: string,
    client: string,
    to: string,
    value: any
  }[]
}

const Table: React.FC<TableProps> = ({ cells }) => {

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "80px" }}>ID</th>
          <th style={{ width: "260px" }}>Event</th>
          <th style={{ width: "160px" }}>Type</th>
          <th style={{ width: "220px" }}>Client</th>
          <th style={{ width: "220px" }}>To</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {cells.map(cell => (
          <tr>
            <td style={{ width: "80px" }}>{cell.id}</td>
            <td style={{ width: "260px" }}>{cell.event}</td>
            <td style={{ width: "160px" }}>{cell.type}</td>
            <td style={{ width: "220px" }}>{cell.client}</td>
            <td style={{ width: "220px" }}>{cell.to}</td>
            <td><code>{JSON.stringify(cell.value)}</code></td>
            {/* <td style={{ width: "80px" }}>{cell.id}</td>
            <td style={{ width: "260px" }}>Turn Left</td>
            <td style={{ width: "160px" }}>HTTP/POST</td>
            <td style={{ width: "220px" }}>192.168.0.1 - API</td>
            <td style={{ width: "220px" }}>192.168.0.2 - Carrinho</td>
            <td><code>{JSON.stringify({ action: "left" })}</code></td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;