// components/AboutSection.js


function AboutSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About us</h2>
          <p className="text-gray-700 mb-4">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <button className="px-4 py-2 bg-green-500 text-white rounded">More about company</button>
        </div>
        <div className="md:w-1/2 flex space-x-4 mt-6 md:mt-0">
          <img src="path-to-image1.jpg" alt="About" className="w-1/2 h-48 object-cover" />
          <img src="path-to-image2.jpg" alt="About" className="w-1/2 h-48 object-cover" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
