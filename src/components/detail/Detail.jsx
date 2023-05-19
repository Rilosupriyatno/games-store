import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import options from "../../api/api";
import fetchData from "../list/List";
import "./detail.css";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      try {
        const response = await axios.get(
          "https://free-to-play-games-database.p.rapidapi.com/api/game",
          {
            params: {
              id: id,
            },
            headers: {
              "X-RapidAPI-Key":
                "ae30c0d2b7mshe6703b979142769p164ffcjsn3d5dcbf9f15d",
              "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
          }
        );
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  if (items === null) {
    return <h2>Loading...</h2>;
  }
  return (
    <section id="about">
      <h2>Detail Games</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={items.thumbnail} alt={items.title} />
          </div>
        </div>
        <div className="about_content">
          <h3>{items.title}</h3>
          <h4> Genre : {items.genre}</h4>
          <h4> Publisher : {items.publisher}</h4>
          <h4> Developer : {items.developer}</h4>
          <h4>Description : {items.short_description}</h4>
        </div>
      </div>
    </section>
    // <section id="list-games">

    //   <div className="container games_container">
    //     <article className="games_item">
    //       <div className="games_item-image">
    //         <img src={items.thumbnail} alt={items.title} />
    //       </div>
    //       <h3>{items.title}</h3>
    //       <span>{items.short_description}</span>
    //       <span>{items.genre}</span>
    //       <span>{items.publisher}</span>
    //       <span>{items.developer}</span>
    //     </article>
    //   </div>
    // </section>
  );
};
export default Detail;
