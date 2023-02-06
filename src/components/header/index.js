import { FaShoppingBasket, FaSearch, FaBars, FaShoppingCart, FaHeart, FaUserCircle } from "react-icons/fa";

function Header() {
    return (
      <>
      <div className="header-1">
            <a href="#" className="logo"> <span><FaShoppingBasket/></span> nirvanna</a>
            <form action="" className="search-box-container">
                <input type="search" id="search-box" placeholder="search here..." />
                    <label htmlFor="search-box" className= "fas fa-search"> <FaSearch/></label>
          </form>
        </div><div className="header-2">
  
                <div id="menu-bar" className= <FaBars/> ></div>
                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#category">Category</a>
                    <a href="#product">Product</a>
                    <a href="#deal">Deal</a>
                    <a href="#contact">Contant</a>
                </nav>
  
                <div className="icons">
                    <a href="#" className="fas fa-shoppingCart" > <FaShoppingCart/></a>
                    <a href="#heart" className="fas fa-heart"> <FaHeart/></a>
                    <a href="#" className="fas fa-user-circle"> <FaUserCircle/></a>
                </div>
            </div>
     </>
    );
  }
  
  export default Header;


  