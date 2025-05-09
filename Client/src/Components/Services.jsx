function Services() {
  const style =
    "border-4 border-blue-600 lg:h-68 h-76 lg:w-[30%] w-[100%] px-4 rounded-lg shadow-lg shadow-blue-600/50 mt-10";
  const headingStyle = "font-bold p-4  text-center";
  return (
    <>
      <section className="h-[170vh] lg:h-[140vh] text-white bg-gray-950 lg:px-24 px-8">
        <h1 className="font-bold text-center text-4xl lg:pb-20 pb-0">
          SERVICES
        </h1>
        <div className="lg:flex w-[100%] items-center lg:justify-evenly justify-between">
          <div className={style}>
            <h1 className={headingStyle}>WEBSITE DEVELOPMENT</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum est
              exercitationem, ea aliquid quisquam dolores, quasi, voluptates
              nisi repudiandae beatae dicta sunt. Tenetur, deleniti
              necessitatibus ab mollitia ratione provident? Illum.
            </p>
          </div>
          <div className={style}>
            <h1 className={headingStyle}>MOBILE APP DEVELOPMENT</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, odio aut. Animi est voluptatibus culpa quas dolores
              accusamus doloribus ea alias, reprehenderit, eligendi perferendis
              quae excepturi fugiat. Et, blanditiis consequatur!
            </p>
          </div>
        </div>
        <div className="flex w-[100%] items-center justify-evenly lg:pt-14">
          <div className={style}>
            <h1 className={headingStyle}>PROGRAMMING LANGUAGES</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
              obcaecati illum aperiam sint veritatis labore debitis eligendi ea
              corrupti provident dolores excepturi commodi alias similique saepe
              quae ratione id voluptatem.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
