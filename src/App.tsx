import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './query/client';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={'/MatLogs'}>
        <div className={'App'}>
          {/*TODO: make this come from a configuration*/}
          <ToastContainer position="top-right" autoClose={2000} />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
