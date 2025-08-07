import Navbar from "./NavBar";

function Header() {
  return (
    <header>
      
      <div className="navbar">
      <Navbar />
        <div className="brand">MY FORUM</div>
      
      </div>

      <div className="search-box">
        <select>
          <option value="Everything">Everything</option>
          <option value="Titles">Titles</option>
          <option value="Descriptions">Descriptions</option>
        </select>
        <input type="text" name="q" placeholder="search ..." />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
