import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppContext } from "./context/ContextApi";
import Feed from "../src/components/Feed";
import Header from "../src/components/Header";
import SearchResult from "../src/components/SearchResult";
import VideoDetails from "../src/components/VideoDetails";



function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/SearchResult/:searchQuery" element={<SearchResult />} />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
