import logo from '../assets/react.svg'

const Footer = () => {
    return (
      <>
        <div className="container mx-auto py-10 grid-cols-3">
          <div>
            <img className='w-[60px]' src={logo} alt="" />
          </div>
          <div>
            <p>1234 567 890</p>
            <p>test@gmail.com</p>
          </div>
          <div>
            <p>1234 567 890</p>
            <p>test@gmail.com</p>
          </div>
        </div>
      </>
    );
}

export default Footer