import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; // Import the CSS file

function App() {
  const [cards, setCards] = useState([]);
  const [limit, setLimit] = useState(10);
  

  useEffect(() => {
    axios.get("http://localhost:5000/cards")
      .then(response => {
        console.log(response.data); // Log to check data structure
        setCards(response.data.data);
      })
      .catch(error => console.error("Error fetching cards:", error));
  }, []);

  return (
    <div>
      <div className="card-container">
        {cards.slice(0, limit).map((card) => (
          <div key={card.id} className="card">
        <img src={card.images.small} alt={card.name} />            
        <h3>{card.name}</h3>
          </div>
        ))}
      </div>
      <button 
          onClick={() => setLimit(limit + 10)} 
          disabled={limit >= cards.length}
          >Show More
      </button>

    </div>
  );
}

export default App;