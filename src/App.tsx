import { CarProvider } from './contexts/Car';
import ApplicationRoutes from './routes';

const App: React.FC = () => {
  return (
    <CarProvider>
      <ApplicationRoutes />
    </CarProvider>
  )
}

export default App;
