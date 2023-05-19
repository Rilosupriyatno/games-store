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
        const response = await axios.get(`${options(url)}/?id=${id}`);
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <section id="list-games" className="mt-4">
      <h2>List Games</h2>

      <div className="grid gap-10">
        {items.map(({ id, thumbnail, title }) => {
          return (
            <article
              key={id}
              className="p-5 rounded-lg h-full background: var(--color-bg-variant);"
            >
              <div className="rounded-lg overflow-hidden">
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
