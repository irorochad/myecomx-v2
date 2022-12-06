import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.routes";
import Navigation from "./routes/navigation/nav.routes";
import Authentication from "./routes/authentication/auth.routes";
import Shop from "./routes/shop/shop.routes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
