import logo from "./logo.svg";
import "./App.css";
import { Artists } from "./Artists";
import { Route, Routes } from "react-router";
import { Albums } from "./Albums";
import { Tracks } from "./Tracks";
import { useSelector } from "react-redux";
import Header from "./header";
import { Player } from "./Player";
import { Standing } from "./Standing";


function App() {
  const isWaiting = useSelector((state) => state.isWaiting);

  return (
    <div className="App">
      <Header/>
      {isWaiting && <div className="spinner" />}
      <Routes>
        <Route path="/" element={<Artists />} />
        <Route path="/player/" element={<Player />} />
        <Route path="/standing/" element={<Standing />} />

        <Route path="/roster/:artist" element={<Albums />} />
        
      </Routes>
    </div>
  );
}

export default App;
