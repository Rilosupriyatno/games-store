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
        const response = await axios.get(`${options}/${id}`);
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <section id="list-games">
      <h2>List Games</h2>

      <div className="container games_container">
        {items.map(({ id, thumbnail, title }) => {
          return (
            <article key={id} className="games_item">
              <div className="games_item-image">
                <img src={thumbnail} alt={title} />
              </div>
              <h3>{title}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Detail;
