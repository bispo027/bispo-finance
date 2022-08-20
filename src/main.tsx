import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'urql'
import App from './App'
import theme from './lib/theme'
import {client } from './lib/uRQL'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider value={client}>
      <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
)
