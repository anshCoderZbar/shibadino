import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "routes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
