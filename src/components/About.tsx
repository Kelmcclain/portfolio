export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-black py-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://flashfocusstudios.org/flashfocus/1732452463493-photo.webp"
              alt="About"
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-400 mb-6">
              I'm McClain Kelvin, a multi-disciplinary professional with expertise in frontend development,
              graphic design, photography, and data analysis. With a passion for creating innovative solutions,
              I bring a unique blend of creative and analytical skills to every project.
            </p>
            <p className="text-gray-400 mb-6">
              My journey in tech began with a fascination for how digital solutions can transform businesses
              and improve lives. Over the years, I've honed my skills in various areas of technology, allowing me
              to approach problems from multiple angles and deliver comprehensive solutions.
            </p>
            <p className="text-gray-400 mb-8">
              When I'm not coding or designing, you can find me exploring new photography techniques,
              analyzing datasets for fun, or contributing to open-source projects. I believe in continuous
              learning and staying updated with the latest industry trends.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
              View Full Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
