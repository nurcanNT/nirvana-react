import "./App.css";
import Header from "./components/header";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";
import Location from "./components/location";
import Contact from "./components/contact";
import Product from "./components/product";
import Category from "./components/category";
import Banner from "./components/banner";
import BannerTea from "./components/bannertea/bannertea"
import HomeTitle from "./components/HomeTitle";
import OrganicSkinCare from "./components/product/OrganicSkinCare";
import OrganicShampo from "./components/product/OrganicShampo";
import OrganicTea from "./components/product/OrganicTea";
import FavoriteList from "./components/favorites/FavoriteList";
// import FavoritesList from "./components/favorites/FavoritesList";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeTitle />
      <Banner />
      <Category />
      <Product />
      <BannerTea/>
      <FavoriteList/>
      <Footer />
      <Contact />
      <Newsletter />
      <Location />
    </div>
  );
}

export default App;
