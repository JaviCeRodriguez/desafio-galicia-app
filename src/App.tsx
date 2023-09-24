import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/main";
import Home from "./screens/home";
import Explore from "./screens/explorar";
import Contact from "./screens/contactanos";
import Favorites from "./screens/favoritos";
import CoberturaProcess from "./screens/explorar/cobertura";
import Faq from "./screens/faq";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/explorar" element={<Explore />} />
        <Route path="/explorar/:code/:id" element={<CoberturaProcess />} />
        <Route path="/favoritos" element={<Favorites />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
