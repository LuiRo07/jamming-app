import { useState } from "react";
import "./App.css";
import SearchResults from "./Components/Static/SearchResults.jsx";
import Playlist from "./Components/Static/Playlist.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Jamming</h1>
      <SearchResults />
      <Playlist />
    </>
  );
}

export default App;
