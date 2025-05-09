import HamburgerMenu from "./Components/Hamburger";

function Hero() {
  return (
    <section className="justify-center lg:h-screen h-96 w-[100%] text-white bg-gray-950 lg:px-24 px-8 pt-6">
      <nav className="flex items-center p-4 ">
        <div>
          <h1 className="font-extrabold text-6xl">FR</h1>
        </div>
        <HamburgerMenu />
      </nav>
      <section className="">
        <p className="pt-15 text-2xl text-gray-500 font-extrabold">I'm a</p>
        <h1 className="lg:text-8xl text-4xl font-extrabold">
          FULL STACK <br /> SOFTWARE <br /> DEVELOPER.
        </h1>
        <button className=" cursor-pointer h-10 lg:w-44 w-36 bg-gradient-to-r from-blue-100 to-blue-500 rounded-xl font-bold mt-10 z-0">
          Previous Projects
        </button>
      </section>
      <h1 className="relative mt-[-16rem] lg:rotate-[-20deg] rotate-[-40deg] lg:text-8xl text-2xl opacity-10 z-50">
        FYNEBOY ROSEMARY
      </h1>
    </section>
  );
}

export default Hero;
