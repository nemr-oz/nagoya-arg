import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Members from "./pages/Members";
import Publications from "./pages/Publications";
import News from "./pages/News";
import Search from "./pages/Search";
import Hidden1 from "./pages/Hidden1";
import Hidden2 from "./pages/Hidden2";
import Hidden3 from "./pages/Hidden3";
import Records from "./pages/Records";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/members" element={<Members />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/news" element={<News />} />
        <Route path="/search" element={<Search />} />
        <Route path="/hidden1" element={<Hidden1 />} />
        <Route path="/hidden2" element={<Hidden2 />} />
        <Route path="/hidden3" element={<Hidden3 />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </BrowserRouter>
  );
}