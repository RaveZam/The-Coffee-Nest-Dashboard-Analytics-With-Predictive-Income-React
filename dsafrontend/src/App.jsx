import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Contentarea from "./contentarea/Contentarea";
import Header from "./header/Header";

function App() {
  const [navigate, navigateTo] = useState("dashboard");
  return (
    <div>
      <Header />
      <div className="mr-12 flex">
        <Sidebar navigateTo={navigateTo} />
        <Contentarea navigate={navigate} />
      </div>
    </div>
  );
}

export default App;
