import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { storage } from "./firebase";

ReactDOM.render(<App />, document.getElementById("root"));

// const unzip = require("unzipper");

// const fetchGames = () => {
//   const storageRef = storage.ref("Games");
//   storageRef
//     .listAll()
//     .then((res) => {
//       res.items.forEach((item) => {
//         console.log(item.name);
//         item.getDownloadURL().then((url) => {
//           console.log("Download URL: ", url);
//           unzip.Open.file(url).then((d) =>
//             d.extract({ path: "/extraction/path", concurrency: 5 })
//           );
//         });
//       });
//     })
//     .catch((error) => console.error(error));
// };

// fetchGames();
