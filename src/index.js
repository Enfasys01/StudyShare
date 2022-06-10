import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DetallePost from './routes/DetallePost';
import PostInfo from './routes/PostInfo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path='/' element={<App></App>}></Route>
      <Route path='DetallePost' element={<DetallePost/>}>
        <Route path=':postId' element={<PostInfo/>}></Route>
      </Route>
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
