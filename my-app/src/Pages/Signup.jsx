import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import {  useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const navigate = useNavigate();
  
  let signupshema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(4, "Too Short!").required("Required"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: signupshema,
    onSubmit: async (values) => {
      try {
        const res = await fetch(
          `http://localhost:3005/users?email=${values.email}`
        );
        const exitingUsers = await res.json();
        if (exitingUsers.length > 0) {
          alert("Email already registered. Please use a different email.");
          return;
        }
        await fetch("http://localhost:3005/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        alert("User registered successfully!");
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div>
        <div className="d-flex justify-content-center mt-3">
          <img
            className="w-25 rounded"
            src="/images/checklist-survey-concept_74855-6987.avif"
            alt=""
          />
        </div>

        <h4 className="text-center text-color">Hello!</h4>
        <p className="text-center color-span">
          welcome to Todo List app sign up to get started.
        </p>
        <div className="container mt-3 d-flex justify-content-center">
          <Form
            onSubmit={formik.handleSubmit}
            className="bg-form rounded-2 w-100 p-5 mb-2"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter email"
                autoComplete="new-email"
                onBlur={formik.handleBlur}
                isInvalid={!!formik.errors.email && formik.touched.email}
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
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="new-password"
                isInvalid={!!formik.errors.password && formik.touched.password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <p className="text- mb-4">
              by signing up you agree to our{" "}
              <span className="color-span">terms & CONDITIONS </span> terms &
              CONDITIONS of use and{" "}
              <span className="color-span">privacy policy.</span> privacy
              policy.
            </p>
            <div className="d-flex justify-content-center align-items-center  rounded-2">
              <Button className="bg-btn" variant="secondary" type="submit">
                SIGN UP
              </Button>
            </div>
            <p className="text-muted text-center mt-2">
              Already have an account?{" "}
              <Link className="link-form" to="/login">
                {" "}
                LOG IN
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
}
