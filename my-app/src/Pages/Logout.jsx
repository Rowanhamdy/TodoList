import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="text-center mt-5">
      <h2 className="mb-3">Access Denied</h2>
      <p className="text-muted mb-4">You need to be logged in to view this page.</p>
      <Button variant="primary" onClick={handleLoginRedirect}>
        Go to Login
      </Button>
    </div>
  );
}

