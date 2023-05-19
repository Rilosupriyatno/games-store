// import axios from "axios";

// const options = axios.create({
//   baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
//   method: "GET",
//   url: "https://free-to-play-games-database.p.rapidapi.com/api/filter",
//   params: {
//     tag: "3d.mmorpg.fantasy.pvp",
//     platform: "pc",
//   },
//   headers: {
//     "X-RapidAPI-Key": "ae30c0d2b7mshe6703b979142769p164ffcjsn3d5dcbf9f15d",
//     "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
//   },
// });

// export default options;
import axios from "axios";

const options = {
  method: "GET",
  url: "https://free-to-play-games-database.p.rapidapi.com/api/filter",
  params: {
    tag: "3d.mmorpg.fantasy.pvp",
    platform: "pc",
    result: 5,
  },
  headers: {
    "X-RapidAPI-Key": "ae30c0d2b7mshe6703b979142769p164ffcjsn3d5dcbf9f15d",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};
export default options;
