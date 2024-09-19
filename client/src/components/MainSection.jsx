// components/MainSection.js
import Banner from '../assets/banner.png'

function MainSection() {
  return (
    <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${Banner})` }} >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Lorem Ipsum is Lorem Ipsum Lorem</h1>
        <p className="mt-4 text-lg md:text-xl">More about services</p>
      </div>
    </section>
  );
}

export default MainSection;
