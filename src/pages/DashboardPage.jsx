import React, { useEffect, useState } from "react";
import "../style/noticias.css";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const DashboardPage = () => {
  const [games, setgames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);
  const [selectedRating, setSelectedRating] = useState(""); // Estado para la calificación seleccionada
  const [currentPage, setCurrentPage] = useState(1);
  const apiKey = "8a133a1207394fc58c5f78eeeea63f2a";

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${apiKey}&page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setgames(data.results);
        setFilteredGames(data.results); // Mostrar todos los juegos sin filtrar al principio
      })
      .catch((error) => {
        console.error("Error al cargar los juegos:", error);
      });
  }, [currentPage, apiKey]);

  const filterGames = (term, rating) => {
    let filtered = games.filter((game) => {
      const matchesRating = !rating || game.rating >= rating;
      const matchesTerm = !term || game.name.toLowerCase().includes(term.toLowerCase());
  
      return matchesRating && matchesTerm;
    });
  
    setFilteredGames(filtered);
  };

  const handleRatingChange = (event) => {
    const rating = event.target.value;
    setSelectedRating(rating);
    filterGames(searchTerm, rating);
  };

  const handleShowModal = (game) => {
    setSelectedGame(game);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterGames(term);
  };

  // Filtrar juegos en función del término de búsqueda
  //const filteredGames = games.filter((game) =>
  //game.name.toLowerCase().includes(searchTerm.toLowerCase())
  //);
  return (
    <div>
      <Container>
        <h1>Lista de Videojuegos mas vistos</h1>
        <div className="row mb-3">
          <div className="col-md-6">
            <input
              type="text"
              placeholder="Buscar juegos..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <select value={selectedRating} onChange={handleRatingChange} placeholder="Flitrar por calificacion">
              <option value="">Todas las calificaciones</option>
              <option value="5">mas de 5</option>
              <option value="4">mas de 4</option>
              <option value="3">mas de 3</option>
              <option value="2">mas de 2</option>
              <option value="1">mas de 1</option>
              {/* Agrega más opciones de calificaciones según tus necesidades */}
            </select>
          </div>
        </div>
        <div className="row">
          {filteredGames.map((game) => (
            <div key={game.id} className="col-sm-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={game.background_image}
                  alt={game.name}
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{game.name}</h5>
                  <p className="card-text">
                    Fecha de lanzamiento: {game.released}
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => handleShowModal(game)}
                  >
                    Conoce mas
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <button onClick={() => setCurrentPage((prevPage) => prevPage - 1)}>
            Página Anterior
          </button>
          <button onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>
            Página Siguiente
          </button>
        </div>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedGame && selectedGame.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedGame && (
              <>
                <h2>Mas informacion</h2>
                <p>Rating en general de los usuarios: {selectedGame.rating}</p>
                <p>Metacritic Score: {selectedGame.metacritic}</p>
                <p>Platformas donde esta disponible:</p>
                <ul>
                  {selectedGame.platforms.map((platform) => (
                    <li key={platform.platform.id}>{platform.platform.name}</li>
                  ))}
                </ul>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

