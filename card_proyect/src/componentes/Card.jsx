// import { useState, useEffect } from "react";
import { cardData } from "./Data";



function Card() {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch(cardData)
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);

  return (
    <div class="container">
      {cardData.map((data) => (
        <div key={data.name} class="mdl-card borralodespues">
          <img src={data.img} alt={data.name} />
          <h3 class="mdl-card__title-text">{data.name}</h3>
          <p>{data.tipe}</p>
          <p class="mdl-card__supporting-text">Edad: {data.age}</p>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            Button
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;
