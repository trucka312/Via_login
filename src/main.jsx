import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../public/assets/styles/index.css'
import { ConfigProvider } from 'antd';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#DCA245",
        },
      }}
    >
      <BrowserRouter>
        <App />
        <ToastContainer></ToastContainer>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
)
