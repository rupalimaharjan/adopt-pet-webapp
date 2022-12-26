import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt me !</Link>
          </header>
          <Routes>
            <Route path="/details/:pet_id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt me!"),
//     React.createElement(Pet, { name: "luna", animal: "Dog", breed: "shepard" }),
//     React.createElement(Pet, {
//       name: "pepper",
//       animal: "bird",
//       breed: "Cocktail",
//     }),
//     React.createElement(Pet, { name: "lice", animal: "cat", breed: "Mix" }),
//   ]);
// };

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
