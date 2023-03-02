import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  
  return (
    <div >
      <RouterProvider router={routes}>

      </RouterProvider>
      <Toaster></Toaster>
      
    </div>
  );
}

export default App;
