import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./store/actions/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    console.log({ products });
  });
  return (
    <div className="App">
      <Header />
      {products && products?.map((product) => <Product />)}
      <Footer />
    </div>
  );
}

export default App;
