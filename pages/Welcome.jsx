import Image from "next/image";
import Chess from "../images/chessImage.png";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

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
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={commonStyles}>Reliability</div>
            <div className={commonStyles}>Security</div>
            <div className={commonStyles}>Ethereum</div>
            <div className={commonStyles}>Web 3.0</div>
            <div className={commonStyles}>Low Fees</div>
            <div className={commonStyles}>Blockchain</div>
          </div>
        </div>
        {/* end of the left side */}
        {/* right side */}
        <div className="md.flex-[0.5] flex-initial justify-center items-center">
          <Image src={Chess} alt="Chess" className="w-600 cursor-pointer" />
        </div>
        {/* end of the right side */}
      </div>
    </div>
  );
}
