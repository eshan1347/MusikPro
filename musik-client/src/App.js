import "./App.css";
import InputForm from "./components/InputForm";
import SpotifyUpload from "./components/SpotifyUpload";
import { useEffect, useState } from "react";
import { getSpotifyAT } from "./apiSpotify/getSpotifyAT";

function App() {
  // const cli_id = "db50576864454fc19a8c2410b1323464";
  // const cli_secret = "811f528fbccb447991f8b5816dd5146b";
  // useEffect(() => {
  //   const access_token = getSpotifyAT(cli_id, cli_secret);
  // });
  const [ipCon, setIpCon] = useState(false);

  return (
    <div className="App">
      <button onClick={(e) => setIpCon(true)}>Manual Input</button>
      <div>{ipCon && <InputForm />}</div>
      <br></br>
      <div>
        <SpotifyUpload />
      </div>
      <div className="song"></div>
    </div>
  );
}

export default App;
