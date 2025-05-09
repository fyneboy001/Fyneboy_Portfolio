function Services() {
  const style =
    "border-4 border-blue-600 h-68 w-[30%] p-4 rounded-lg shadow-lg shadow-blue-600/50";
  const headingStyle = "font-bold p-4 text-center";
  return (
    <>
      <section className="h-[120vh] text-white bg-gray-950 px-24">
        <h1 className="font-bold text-center text-4xl pb-20">SERVICES</h1>
        <div className="flex w-[100%] items-center justify-evenly">
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
        <div className="flex w-[100%] items-center justify-evenly pt-14">
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
