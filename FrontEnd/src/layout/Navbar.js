import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">devzxje</Link>
        <Link className="btn btn-success" to="/add">Add new player</Link>
      </div>
    </nav>
  );
}
