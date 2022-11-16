const commonStyles="min-h-[70px]"



export default function Welcome() {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        {/* left side */}
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white py-1 text-gradient">
            We design and build core infrastructure <br /> for decentralized web
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Draft Digital provides a full suite of expert services to take your
            decentralized system from idea to production. <br />
            We are core developers in the most transformative decentralized
            projects <br />
            We take your vision to production <br />
            Read our latest case studies
          </p>
        </div>
        {/* end of the left side */}
      </div>
    </div>
  );
}
