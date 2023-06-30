import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [players, setPlayer] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadPlayers();
  }, []);

  const loadPlayers = async () => {
    const result = await axios.get("http://localhost:8080/player/index");
    setPlayer(result.data);
  };

  const deletePlayer = async (id) => {
    await axios.delete(`http://localhost:8080/player/delete/${id}`);
    loadPlayers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Number</th>
              <th scope="col">Club</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr>
                <th scope="row" key="index">
                  {index + 1}
                </th>
                <td>{player.name}</td>
                <td>{player.number}</td>
                <td>{player.club}</td>
                <td>
                  <Link
                    className="btn btn-warning mx-2"
                    to={`/update/${player.id}`}
                  >
                    {" "}
                    Update
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deletePlayer(player.id)}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/player/${player.id}`}
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
