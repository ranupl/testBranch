import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import { useState, createContext } from "react";
import Login from "./Pages/Login";
import ProtectedRoute from "./Routes/ProtectedRoute";
import PublicRoute from "./Routes/PublicRotue";

export const Store1 = createContext();

function App() {
  const [isAuth, setisAuth] = useState(false);
  const details = {
    name: "shahid",
    friend: "ranu",
    dev: "mern",
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Store1.Provider value={{ isAuth, setisAuth, details }}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route path="/page1" element={<Page1 />} />
            <Route
              path="/page2"
              element={
                <ProtectedRoute>
                  <Page2 />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Store1.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
