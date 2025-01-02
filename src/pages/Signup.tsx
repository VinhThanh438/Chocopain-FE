// src/components/Signup.tsx
import { useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "../css/auth.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import firebase from "../config/firebase.config";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({
    confirmPasswordError: false,
    phoneNumberError: false,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-up-button', {
      size: 'invisible',
      defaultCountry: 'VN'
    })
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "phoneNumber") {
      setErrors((prev) => ({
        ...prev,
        phoneNumberError: value.length !== 9,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const { username, password, confirmPassword, phoneNumber } = formData;

    if (password !== confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPasswordError: true }));
      setLoading(false);
      return;
    }

    const appVerifier = window.recaptchaVerifier;
    try {
      const formattedPhoneNumber = `+84${phoneNumber}`;
      const confirmationResult = await firebase.auth().signInWithPhoneNumber(formattedPhoneNumber, appVerifier);
      console.log("OTP sent:", confirmationResult);
      alert("Successfully!");
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign-in__wrapper">
      <div className="sign-in__backdrop"></div>
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit} style={{ marginBottom: "50px" }}>
        <div className="h4 mb-2 text-center">Signup</div>

        {errors.confirmPasswordError && (
          <Alert variant="danger" onClose={() => setErrors((prev) => ({ ...prev, confirmPasswordError: false }))} dismissible>
            Passwords do not match.
          </Alert>
        )}

        {errors.phoneNumberError && (
          <Alert variant="danger" onClose={() => setErrors((prev) => ({ ...prev, phoneNumberError: false }))} dismissible>
            Invalid phone number. It must be 9 characters long.
          </Alert>
        )}

        <Form.Group className="mb-2" controlId="username">
          <Form.Label>User name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            placeholder="User name"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="phoneNumber">
          <Form.Label>Phone number</Form.Label>
          <div className="input-group">
            <span className="input-group-text">+84</span>
            <Form.Control
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              placeholder="Enter your number"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="confirmPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Confirm password"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button className="w-100 mb-3" variant="primary" type="submit" disabled={loading}>
          {loading ? "Registering..." : "Sign up"}
        </Button>

        <div className="text-center">
          <div className="d-flex align-items-center justify-content-center">
            <hr className="flex-grow-1" style={{ margin: "0 10px", border: "1px solid #212529" }} />
            <span>Connect with Social Media</span>
            <hr className="flex-grow-1" style={{ margin: "0 10px", border: "1px solid #212529" }} />
          </div>
          <div className="mt-3">
            <a href="#" className="btn btn-primary mx-2" style={{ backgroundColor: "#4267B2", color: "white", padding: "10px 20px", borderRadius: "5px" }}>
              <FaFacebook size={20} style={{ marginRight: "5px" }} />
              Facebook
            </a>
            <a href="#" className="btn btn-danger mx-2" style={{ backgroundColor: "#DB4437", color: "white", padding: "10px 20px", borderRadius: "5px" }}>
              <FaGoogle size={20} style={{ marginRight: "5px" }} />
              Google
            </a>
          </div>
        </div>

        <div className="text-center mt-3">
          Already have an account?
          <Link to="/login">
            <Button variant="link">Login now</Button>
          </Link>
        </div>

        <div id="sign-up-button"></div>
      </Form>
    </div>
  );
};

export default Signup;
