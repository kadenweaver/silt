import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import AppUI from './App';
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react'
import '@fontsource/eb-garamond/700.css'
import '@fontsource/noto-sans-jp/400.css'

const theme = extendTheme({
  heading: `'Noto Sans JP', sans-serif`,
  text: `'EB Garamond', serif`,
  config: {initialColorMode: 'dark', useSystemColorMode: false},
})

const container = document.getElementById('root')

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <AppUI />
    </ChakraProvider>
  </React.StrictMode>
)
