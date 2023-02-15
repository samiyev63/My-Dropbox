import React from "react"
import Signup from "./components/Signup"
import { AuthProvider } from "./AuthContext"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Profile from "./components/Profile"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
import Dashboard from "./components/drive/Dashboard"

function App() {
  return (
    <Router>
      <AuthProvider>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />

          <PrivateRoute path="/user" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />

          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
      </AuthProvider>
    </Router>
  )
}

export default App
