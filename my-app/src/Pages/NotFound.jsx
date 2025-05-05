import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
      <h3 className="display-4 fw-bold">404 - Page Not Found</h3>
      <p className="lead mb-4">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
}
