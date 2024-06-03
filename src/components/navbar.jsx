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
            {/* {menu.map(({ pageName, path }) => (
              <li key={pageName} className="font-semibold">
                <Link to={path}>{pageName}</Link>
              </li>
            ))} */}
            <li className="font-semibold">Home</li>
            <li className="font-semibold">About</li>
            <li className="font-semibold">Contact</li>
          </ul>
        </div>
      </>
    );
}

export default Navbar