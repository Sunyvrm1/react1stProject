import Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx'
import travelBanner from "../assets/travelBanner.jpg"

const Home = () => {
    return (
      <>
        <Navbar/>
        <div
          style={{
            backgroundImage: `url(${travelBanner})`,
            height: "80vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="py-10 flex flex-col gap-[40px] justify-center items-center"
        >
          <h1 className="text-[white] text-7xl font-semibold text-center font-shadow-md">
            The World Awaits
          </h1>
          <button className="bg-[cyan] px-5 py-2 font-semibold">
            Explore Now
          </button>
        </div>

        <Footer/>
      </>
    );
}

export default Home