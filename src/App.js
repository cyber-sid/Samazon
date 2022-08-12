import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Comp-Login/Login";
import Register from "./Comp-Login/Register";
import { useEffect } from "react";
import { authenticate } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    authenticate.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "Set_User",
          user: authUser,
        });
      } else {
        dispatch({
          type: "Set_User",
          user: null,
        });
      }
    });
  },[]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header /> <Home />
              </>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <>
                <Register />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
