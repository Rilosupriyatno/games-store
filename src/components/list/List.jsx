import React from "react";
import "./list.css";
import axios from "axios";
import { useEffect, useState } from "react";
import options from "../../api/api";

const List = () => {
  const [items, setItems] = useState([]);
  const [success, setSuccess] = useState(false);
  const fetchItems = async () => {
    try {
      const response = await options.get("games", {
        params: {
          result: 10,
          platform: "pc",
        },
      });
      setItems(response.data);
      setSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    fetchItems(cancelToken.token);
  }, []);
  return (
    <section id="list-games">
      <h2>List Games</h2>

      <div className="container games_container">
        {items.map(({ id, thumbnail, title }) => {
          //   const [tambah, setTambah] = useState(false);
          //   const tambahLike = () => {
          //     setTambah(tambah + 1);
          //   };
          return (
            <article key={id} className="games_item">
              <div className="games_item-image">
                <img src={thumbnail} alt={title} />
              </div>
              <h3>{title}</h3>
              {/* <small>{tambah} Orang menyukai ini</small> */}
              <div className="games_item-cta">
                {/* <a href={github} className="btn" target="blank">
                  Github
                </a> */}
                {/* <button onClick={tambahLike} className="btn">
                  Like
                </button> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default List;
