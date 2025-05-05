import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [loginError, setLoginError] = React.useState("");
  const navigate = useNavigate();
  const {login} = useAuth()

  const loginshema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(4, "Too Short!").required("Required"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginshema,
    onSubmit: async (values) => {
      try {
        let res = await fetch("http://localhost:3005/users");
        const users = await res.json();

        const matchedUser = users.find(
          (user) =>
            user.email === values.email && user.password === values.password
        );
        if (matchedUser) {
          // use context method
          login();
          navigate("/dashboard/add");
        } else {          
          setLoginError("Invalid email or password.");
        }
      } catch (error) {
        console.error("Login error:", error);
        setLoginError("Server error. Try again later.");      }
    },
  });

  return (
    <>
  
      <div className="text-center text-color">
        <h4 className="mb-1 mt-3">Hello again! </h4>
        <p> welcome back</p>
      </div>

      <div className="container mt-3 d-flex justify-content-center">
        <Form
          onSubmit={formik.handleSubmit}
          className="bg-form rounded-2 p-3 p-sm-5 w-100 w-sm-75"
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.email && formik.touched.email}
              autoComplete="email"
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.password && formik.touched.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          {loginError && <p className="text-danger text-center">{loginError}</p>}

          <div className="d-flex justify-content-center align-items-center    rounded-2">
              <Button className=" " variant="dark" type="submit">
              LOG IN
              </Button>
            </div>
          <p className="text-center text-muted mt-4">Or Continue With</p>
          <div className="d-flex justify-content-between flex-wrap">
            <p className=" border ps-5 p-2 pe-5 rounded-2 bg-light mb-3 mb-sm-0 w-45 w-sm-auto">
              <FontAwesomeIcon className="pe-2" icon={faGoogle} /> Google
            </p>
            <p className=" border ps-5 p-2 pe-5 rounded-2 mb-3 mb-sm-0 w-45 w-sm-auto bg-p ">
              {" "}
              <FontAwesomeIcon className="pe-2" icon={faFacebookF} /> Facebook
            </p>
          </div>
          <p className="text-muted text-center mt-2">
            Not a member?{" "}
            <Link to="/signup" className="link-form">
              {" "}
              Register now
            </Link>
          </p>
        </Form>
      </div>
    </>
  );
}
