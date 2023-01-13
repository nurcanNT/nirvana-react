
function Header() {
  return (
    <>
    <div class="header-1">
          <a href="#" class="logo"><i class="fas fa-shopping-basket"></i>nirvanna</a>
          <form action="" class="search-box-container">
              <input type="search" id="search-box" placeholder="search here..." />
                  <label for="search-box" class="fas fa-search"></label>
        </form>
      </div><div class="header-2">

              <div id="menu-bar" class="fas fa-bars"></div>
              <nav class="navbar">,
                  <a href="#home">Home</a>
                  <a href="#category">Category</a>
                  <a href="#product">Product</a>
                  <a href="#deal">Deal</a>
                  <a href="#contact">Contant</a>
              </nav>

              <div class="icons">
                  <a href="#" class="fas fa-shopping-cart"></a>
                  <a href="#" class="fas fa-heart"></a>
                  <a href="#" class="fas fa-user-circle"></a>
              </div>
          </div>
          </>
  );
}

export default Header;
