
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { MainCom } from './Component/Pages/MainCom';


function App() {
  return (
    <div>
      <ChakraProvider>
      <MainCom/>
      </ChakraProvider>
    </div>
  );
}

export default App;
