import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./auth.css";

const Signup = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPhonenumber, setInputPhonenumber] = useState("");
  const [inputConfirmPassword, setConfirmPassword] = useState("");

  const [showUsernamePasswordError, setShowUsernamePasswordError] = useState(false);
  const [showConfirmPasswordError, setShowConfirmPasswordError] = useState(false);
  const [showPhoneNumberError, setShowPhoneNumberError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    // check confirm password
    if (inputPassword !== inputConfirmPassword) {
      setShowConfirmPasswordError(true);
      setLoading(false);
      return;
    }

    // check valid phone number
    if (inputPhonenumber.length < 10) {
      setShowPhoneNumberError(true);
      setLoading(false);
      return;
    }

    await delay(500);
    console.log(`Username :${inputUsername}, Password :${inputPassword}, Confirm password: ${inputConfirmPassword}, Phone number: ${inputPhonenumber}`);
    
    if (inputUsername !== "admin" || inputPassword !== "admin") {
      setShowUsernamePasswordError(true);
    }

    setLoading(false);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputPhonenumber(value);
    
    // event check valid number when user is typing
    if (value.length < 10) {
      setShowPhoneNumberError(true);
    } else {
      setShowPhoneNumberError(false);
    }
  };

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
        <div className="h4 mb-2 text-center">Sign up</div>
        
        {/* Alert for username/password error */}
        {showUsernamePasswordError && (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShowUsernamePasswordError(false)}
            dismissible
          >
            Incorrect username or password.
          </Alert>
        )}
        
        {/* Alert for confirm password error */}
        {showConfirmPasswordError && (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShowConfirmPasswordError(false)}
            dismissible
          >
            Passwords do not match.
          </Alert>
        )}

        {/* Alert for phone number error */}
        {showPhoneNumberError && (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShowPhoneNumberError(false)}
            dismissible
          >
            Invalid phone number. It must be at least 10 characters long.
          </Alert>
        )}

        <Form.Group className="mb-2" controlId="username">
          <Form.Label>User name</Form.Label>
          <Form.Control
            type="text"
            value={inputUsername}
            placeholder="User name"
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </Form.Group>
        
        <Form.Group className="mb-2" controlId="phonenumber">
          <Form.Label>Phone number</Form.Label>
          <div className="input-group">
            <span className="input-group-text">+84</span>
            <Form.Control
              type="number"
              value={inputPhonenumber}
              onChange={handlePhoneNumberChange}
              required
              placeholder="Enter your number"
            />
          </div>
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

        <Form.Group className="mb-2" controlId="confirmpassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            value={inputConfirmPassword}
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <br />
        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Sign up
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Registering...
          </Button>
        )}
      </Form>
    </div>
  );
};

export default Signup;