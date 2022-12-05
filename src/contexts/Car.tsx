import React, { useState, useEffect, useContext } from 'react'
import Swal from 'sweetalert2'

import { connect } from "socket.io-client";

interface CarContextData {
  events: any[],
  setEvents(events: any[]): void,
  clients: any[],
  serverIp: string,
  setServerIp(events: string): void,
}

const CarContext = React.createContext<CarContextData>({} as CarContextData)

const CarProvider: React.FC<any> = ({ children }) => {
  const [events, setEvents] = useState<any[]>([])
  const [clients, setClients] = useState<any[]>([])
  const [socket, setSocket] = useState<any>(null)
  const [serverIp, setServerIp] = useState<string>("")

  function reset() {
    setEvents([])
    setClients([])
    setSocket([])
    setServerIp("")
  }

  useEffect(() => {
    if (serverIp !== "") {
      const socket = connect(serverIp, {
        reconnectionDelayMax: 10000,
        query: {
          "name": "Sistema de Monitoramento"
        }
      });
  
      setSocket(socket)
  
      return () => { socket.disconnect() }
    } else {
      if (window.location.pathname !== "/") {
        window.location.pathname = "/"
      }
    }
  }, [serverIp])

  useEffect(() => {
    if (socket) {
      socket.on("log", (data: any) => {
        setEvents(prevState => {
          return [...prevState, data]
        })
      });

      socket.on('connect', () => {
        socket.emit("get-activity", null)

        Swal.fire({
          icon: 'success',
          title: 'Yeaahh!!',
          text: 'Parece a conexão com o servidor foi estabelecida!'
        })
      })

      socket.on("activity", (data: any) => {
        setClients(data.map((item: any) => {
          let itemData = { ...item };
          const activeSince = new Date(itemData.data.activeSince)
          const activeBy = itemData.data.activeBy
          const activeByHour = Math.floor(activeBy / 3600)
          const activeByMinutes = Math.floor((activeBy - activeByHour * 3600) / 60)


          itemData.data.activeSince = `${activeSince.toLocaleDateString()} ${activeSince.toLocaleTimeString()}`
          itemData.data.activeBy = `${activeByHour}h${activeByMinutes}min`

          return (itemData)
        }))
      });

      socket.on("disconnect", () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Parece que sua conexão com o servidor caiu!'
        })

        setClients(prevState => {
          return prevState.map(item => {
            let client = { ...item }

            client.status = 'Inactive'
            client.ActiveBy = '0h0min'

            return client
          })
        })
      });
    }
  }, [socket])

  // useEffect(() => {
  //   let counter = 0;

  //   const interval = setInterval(() => {
  //     setEvents(prevState => {
  //       counter = prevState.length + 1
  //       return [...prevState, {
  //         id: counter,
  //         ...requestsFixtures[counter % requestsFixtures.length]
  //       }]
  //     })
  //   }, 1000)

  //   return () => clearInterval(interval);
  // }, [])


  return (
    <CarContext.Provider value={{
      events,
      setEvents,
      clients,
      serverIp,
      setServerIp
    }}>
      {children}
    </CarContext.Provider>
  )
}

function useCar(): CarContextData {
  const context = useContext(CarContext);

  if (!context) {
    throw new Error("useCar must be used within a CarProvider");
  }

  return context;
}

export { CarProvider, useCar };