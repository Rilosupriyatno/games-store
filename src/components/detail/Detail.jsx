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
          "https://free-to-play-games-database.p.rapidapi.com/api/filter",
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
    <section id="list-games" className="mt-4">
      <h2>List Games</h2>

      <div className="grid gap-10">
        <article className="p-5 rounded-lg h-full background: var(--color-bg-variant);">
          <div className="rounded-lg overflow-hidden">
            <img src={items.thumbnail} alt={items.title} />
          </div>
          <h3>{items.title}</h3>
        </article>
      </div>
    </section>
  );
};
export default Detail;
