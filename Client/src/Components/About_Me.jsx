function About() {
  return (
    <>
      <section className="flex h-screen text-white bg-gray-950 px-24 pt-24 space-x-20">
        <div className="bg-red-50 h-56 w-[30%]">
          <img src="" alt="" />
        </div>
        <div className="w-[50%]">
          <h1 className="pb-3 font-bold">ABOUT ME</h1>
          <p className="text-gray-400">
            I'm a full stack Software developer with a strong foundation in both
            frontend and backend technologies. I specilize in building scalable,
            responsive web applications using modern frameworks and tools such
            as React, Node.js, Express, and MongoDB. With a deep understanding
            of the software development lifecycle, I enjoy turning complex
            problems into intuitive and efficient solutions. Driven by curiosity
            and passion for continous learning, I stay up to date with emerging
            technologies and best practices. I thrive in collaborative
            environmets, where clear communication and shared goals are key to
            delivering high-quality products. Whether working on user
            Interfaces, RESTful APIs, or database architecture, I bring a
            balance of technical expertise and creative thinking to every
            Project.
          </p>
          <div className="flex space-x-8 mt-10">
            <button className="h-10 w-36 hover:bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-blue-500 rounded-xl">
              HIRE ME
            </button>
            <button className="h-10 w-36 hover:bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-blue-500 rounded-xl">
              RESUME
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
