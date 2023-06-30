import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditPlayer() {
  let navigate = useNavigate();

  const {id} = useParams();

  const [player, setPlayer] = useState({
    name: "",
    number: "",
    club: "",
  });

  const { name, number, club } = player;

  const onInputChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    loadPlayers()
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/player/update/${id}`, player);
    navigate("/");
  };

  const loadPlayers = async () =>{
    const result= await axios.get(`http://localhost:8080/player/${id}`);
    setPlayer(result.data);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Update player</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label>Name</label>
              <input
                type={"text"}
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                className="form-control"
                placeholder="Player name"
              ></input>
            </div>
            <div className="mb-3">
              <label>Number</label>
              <input
                type={"text"}
                name="number"
                value={number}
                onChange={(e) => onInputChange(e)}
                className="form-control"
                placeholder="Player number"
              ></input>
            </div>
            <div className="mb-3">
              <label>Club</label>
              <input
                type={"text"}
                name="club"
                value={club}
                onChange={(e) => onInputChange(e)}
                className="form-control"
                placeholder="Club"
              ></input>
            </div>
            <button className="btn btn-outline-success mx-2" type="submit">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
