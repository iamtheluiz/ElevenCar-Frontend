export const requestsFixtures = [
  {
    event: "Turn Left",
    type: "HTTP/POST",
    client: {
      IP: "192.168.0.1",
      name: "API"
    },
    to: {
      IP: "192.168.0.2",
      name: "Carrinho"
    },
    value: JSON.stringify({ action: "left" })
  },
  {
    event: "Log Stream",
    type: "WebSocket",
    client: {
      IP: "192.168.0.3",
      name: "Cliente"
    },
    to: {
      IP: "192.168.0.1",
      name: "API"
    },
    value: JSON.stringify({
      client: '192.168.0.1 - API',
      to: "192.168.0.2 - Carrinho",
      data: {
        action: "left"
      }
    })
  },
  {
    event: "Turn Right",
    type: "HTTP/POST",
    client: {
      IP: "192.168.0.1",
      name: "API"
    },
    to: {
      IP: "192.168.0.2",
      name: "Carrinho"
    },
    value: JSON.stringify({ action: "right" })
  },
  {
    event: "Log Stream",
    type: "WebSocket",
    client: {
      IP: "192.168.0.3",
      name: "Cliente"
    },
    to: {
      IP: "192.168.0.1",
      name: "API"
    },
    value: JSON.stringify({
      client: '192.168.0.1 - API',
      to: "192.168.0.2 - Carrinho",
      data: {
        action: "right"
      }
    })
  }
]