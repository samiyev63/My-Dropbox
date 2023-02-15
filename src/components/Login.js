import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../AuthContext"
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) { e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("No such account exists")
    }

    setLoading(false)
  }
  return (
    <CenteredContainer>
        <Card.Body className="bg-light border border-danger rounded">
          <h2 className="text-center text-danger mb-4 ">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Control className="bg-light text-dark border border-primary rounded" type="email" placeholder="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Control className="bg-light text-dark border border-primary rounded" type="password" placeholder="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 bg-danger border border-primary rounded" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center text-danger mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="w-100 text-center text-dark mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </Card.Body>
      
    </CenteredContainer>
  )
}
