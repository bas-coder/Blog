import {Link} from "react-router-dom"

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>THE DOJO</h1>
      <div className="navbar_links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        <a href="/">About</a>
      </div>
    </nav>
   );
}
 
export default Navbar;