import "./App.css";
import Header from "./components/header";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";
import Location from "./components/location";
import Contact from "./components/contact";
import Product from "./components/product";
import Category from "./components/category";
import Banner from "./components/banner";
import HomeTitle from "./components/HomeTitle";
import OrganicTea from "./components/product/OrganicTea";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeTitle />
      <Banner />
      <Category />
      <Product />
      <Footer />
      <Contact />
      <Newsletter />
      <Location />
      <OrganicTea />
    </div>
  );
}

export default App;
