import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import ForHiring from "./pages/forHiring/ForHiring";
import Layout from "./components/Layout/Layout";
import ForTalent from "./pages/forTalent/ForTalent";
import Join from "./pages/Join";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<ForTalent />} path="/for-talent" />
          <Route element={<ForHiring />} path="/for-hiring" />
        </Route>
          <Route element={<Join />} path="/onboarding" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
