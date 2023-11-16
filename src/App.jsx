import React from 'react'
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SetNewPassword from './components/SetNewPassword';
import ResetSuccessful from './components/ResetSuccessful';
import Posts from './components/Posts';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/set-new-password' element={<SetNewPassword/>} />
          <Route path='/reset-successful' element={<ResetSuccessful/>} />
          <Route path='/posts' element={<Posts/>} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
