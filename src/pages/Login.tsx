import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "../css/auth.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    await delay(500);
    console.log(`Username :${inputUsername}, Password :${inputPassword}`);
    if (inputUsername !== "admin" || inputPassword !== "admin") {
      setShow(true);
    }
    setLoading(false);
  };

  const handlePassword = () => {};

  const delay = (ms: any) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div className="sign-in__wrapper">
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        {/* Header */}
        <div className="h4 mb-2 text-center">Login</div>
        {/* ALert */}
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Incorrect username or password.
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={inputUsername}
            placeholder="Username"
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="checkbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Log In
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit">
            Logging In...
          </Button>
        )}

        <div className="d-grid justify-content-end mb-2">
          <Button
            className="text-muted px-0"
            variant="link"
            onClick={handlePassword}
          >
            Forgot password?
          </Button>
        </div>

        {/* Connect with Social Media */}
        <div className="text-center">
            <div className="d-flex align-items-center justify-content-center">
                <hr className="flex-grow-1" style={{ margin: '0 10px', border: '1px solid #212529' }} />
                <span>Connect with Social Media</span>
                <hr className="flex-grow-1" style={{ margin: '0 10px', border: '1px solid #212529' }} />
            </div>
            <div className="mt-3">
                <a 
                    href="#" 
                    className="btn btn-primary mx-2" 
                    style={{ backgroundColor: '#4267B2', color: 'white', textDecoration: 'none', padding: '10px 20px', borderRadius: '5px' }}
                >
                    <FaFacebook size={20} style={{ marginRight: '5px' }} />
                    Facebook
                </a>
                <a 
                    href="#" 
                    className="btn btn-danger mx-2" 
                    style={{ backgroundColor: '#DB4437', color: 'white', textDecoration: 'none', padding: '10px 20px', borderRadius: '5px' }}
                >
                    <FaGoogle size={20} style={{ marginRight: '5px' }} />
                    Google
                </a>
            </div>
        </div>

        <div className="text-center mt-3">
          Don't have an account?
          <Link to="/signup">
            <Button className="px-1 text-decoration-none" variant="link">Signup now</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
