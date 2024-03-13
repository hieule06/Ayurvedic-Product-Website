import Header from "./layout/header/Header";
import AboutUs from "./layout/container/AboutUs";
import Feedback from "./layout/container/Feedback";
import Newsletter from "./layout/container/Newsletter";
import Product from "./layout/container/Product";
import Footer from "./layout/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container-product">
        <Product></Product>
        <AboutUs></AboutUs>
        <Feedback></Feedback>
        <Newsletter></Newsletter>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
