import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../AuthContext"
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"

export default function Profile() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  return (
    <CenteredContainer>
      <Card className="bg-light border border-danger rounded">
        <Card.Body className="text-primary">
          <h2 className="text-center text-danger mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong className="text-dark">Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-danger w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
    </CenteredContainer>
  )
}
