function About() {
  return (
    <div className="flex flex-col items-start justify-center h-full w-10/12 sm:max-w-[700px]">
      <h1 className="text-lg">About Fikra</h1>
      <div className="mt-4">
        <p>
          Fikra is a pet project we made to practice full-stack web developement
          skills. This project is a social network plateform for developers to
          share their pet project idea.
        </p>
        <div className="space-y-4 mt-10">
          <p className="font-medium ">Some of tech used in this project:</p>
          <div>
            <p className="font-medium mb-2">Frontend : </p>
            <ul className="list-disc ml-6">
              <li>React</li>
              <li>Typescript</li>
              <li>TailwindCSS</li>
              <li>Github Actions CI CD</li>
              <li>Vercel for deployement</li>
              <li>
                <a className="underline" href="http://github.com/ilefM/fikra">
                  source code
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-2">Backend : </p>
            <ul className="list-disc ml-6">
              <li>Nestjs</li>
              <li>Typescript</li>
              <li>Postgres</li>
              <li>Github Actions CI CD</li>
              <li>Render for deployement</li>
              <li>
                <a
                  className="underline"
                  href="http://github.com/ilefM/fikra-api"
                >
                  source code
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8">
          The project is open source and any contribution will be welcomed
        </p>
      </div>
    </div>
  );
}

export default About;
