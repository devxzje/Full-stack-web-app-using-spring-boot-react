import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Link, useParams } from "react-router-dom";
import { Button, Pagination, Row } from "react-bootstrap";

const Home = () => {
  const [players, setPlayer] = useState([]);
  const [playersPerPage, setPlayersPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
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

  const totalPages = Math.ceil(players.length / playersPerPage);
  // const pages = [...Array(totalPages+1).key().slice(1)];
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;

  const visiblePlayers = players.slice(indexOfFirstPlayer, indexOfLastPlayer);

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage !== totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
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
              {visiblePlayers.map((player, index) => (
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
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true" onClick={prevPage}>
                    &laquo;
                  </span>
                </a>
              </li>
              {pages.map((page) => (
                <li
                  class="page-item"
                  key={page}
                  onClick={() => setCurrentPage(page)}
                >
                  <a class="page-link" href="#">
                    {page}
                  </a>
                </li>
              ))}
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span onClick={nextPage} aria-hidden="true">
                    &raquo;
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          <select onChange={(e) => setPlayersPerPage(e.target.value)}>
            <option value="4">4</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Home;
