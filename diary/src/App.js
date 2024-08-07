import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
