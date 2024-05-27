import travelBanner from "../assets/travelBanner.jpg"

const Home = () => {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${travelBanner})`,
            height: "90vh",
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
      </>
    );
}

export default Home