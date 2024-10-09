import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./sidebar/sidebar";
import Contentarea from "./contentarea/Contentarea";

function App() {
  const [navigate, navigateTo] = useState("dashboard");
  return (
    <div className="mr-12 flex">
      <Sidebar navigateTo={navigateTo} />
      <Contentarea navigate={navigate} />
    </div>
  );
}

export default App;
