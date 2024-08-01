import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
    <Routes>
      <Route path="/bus" element={<Bus />} />
      <Route path="/driver" element={<Driver />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/seller" element={<Seller />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/stalls" element={<Stalls />} />
      <Route path="/user" element={<User />} />
    </Routes>
      </div>
  )
}

export default App
