import React from 'react'
import Bus from './components/Bus'
import Driver from './components/Driver'
import Landing from './components/Landing'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Seller from './components/Seller'
import SignUp from './components/SignUp'
import Stalls from './components/Stalls'
import User from './components/User'

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
