import logo from '../assets/react.svg'

const Navbar = () => {
    return (
      <>
        <div className="py-4 w-11/12 mx-auto flex justify-between items-center">
          <img className="w-[60px]" src={logo} alt="" />
          <ul className="flex gap-8">
            <li className="font-semibold">Home</li>
            <li className="font-semibold">About</li>
            <li className="font-semibold">Contact</li>
          </ul>
        </div>
      </>
    );
}

export default Navbar