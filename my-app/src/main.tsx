import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')!).render(
  // 2. Wrap ChakraProvider at the root of your app
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
