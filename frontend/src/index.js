import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.styl';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {
  extendTheme, // https://chakra-ui.com/docs/styled-system/features/color-mode
  ChakraProvider,
  ColorModeScript,
} from "@chakra-ui/react"

// 解決 Chakra UI 無法設定 initialColorMode 的 bug：在根目錄的 package.json 加上 "resolution": ....
// https://github.com/chakra-ui/chakra-ui/issues/4987
const theme = extendTheme({
  initialColorMode: 'light', // light dark
  useSystemColorMode: false,
  // components,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
