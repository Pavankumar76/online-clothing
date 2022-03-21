import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home/Home.component";
import Navigation from "./routes/navigation/Navigation.component";
import Signin from "./routes/signin/signin.component";

const Shop = () => {
  return <h1>Iam the shop Page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
