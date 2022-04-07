import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./store/actions/index";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return <div className="App"></div>;
}

export default App;
