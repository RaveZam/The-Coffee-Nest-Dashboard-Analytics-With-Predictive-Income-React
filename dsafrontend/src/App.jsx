import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Contentarea from "./contentarea/Contentarea";
import Header from "./header/Header";
import { GlobalDataProvider } from "./contentarea/Contentarea";

function App() {
  const [navigate, navigateTo] = useState("dashboard");

  return (
    <div className="h-screen overflow-hidden">
      {/* hides scroll  */}
      <Header />
      <div className="flex">
        <GlobalDataProvider>
          <Sidebar navigateTo={navigateTo} />
          <Contentarea navigate={navigate} />
        </GlobalDataProvider>
      </div>
    </div>
  );
}

export default App;
