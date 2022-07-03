import Main from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
import Home from "./routers/Home/Home/Home";

function App() {
  return (
    <Main>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Main>
  );
}

export default App;
