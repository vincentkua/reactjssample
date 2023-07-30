import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <div>
      <h3 style={{display:"inline"}}>Navbar</h3>
      <Link to="/">Main</Link>
      <Link to="/page2">Page2</Link>


    </div>
  );
};

export default Navbar;
