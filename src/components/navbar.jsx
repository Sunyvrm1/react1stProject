import { Link } from 'react-router-dom';
import logo from '../assets/react.svg'

const Navbar = () => {

  const menu = [
    { pageName: "Home", path: "/" },
    { pageName: "About", path: "/about" },
    { pageName: "Contact", path: "/contact" },
  ];
    return (
      <>
        <div className="py-4 container mx-auto flex justify-between items-center">
          <img className="w-[60px]" src={logo} alt="" />

          <ul className="flex gap-8">
            {/* {menu.map(({pageName, path}) => (
              <Link key={pageName} path={path}>
                <li className="font-semibold">{pageName}</li>
              </Link>
            ))} */}
            {/* <Link to="/">
              <li className="font-semibold">Home</li>
            </Link>
            <Link to="/about">
              <li className="font-semibold">About</li>
            </Link>
            <Link to="/contact">
              <li className="font-semibold">Contact</li>
            </Link> */}
            <li className="font-semibold">Home</li>
            <li className="font-semibold">About</li>
            <li className="font-semibold">Contact</li>
          </ul>
        </div>
      </>
    );
}

export default Navbar