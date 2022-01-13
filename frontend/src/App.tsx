import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "components/NavBar";
import Listing from "pages/Listing";
import Form from "pages/Form";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
