import { poppins } from "@/app/layout";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="grid grid-cols-5 content-center gap-4">
      <div className="grid-row-2 col-span-3 space-y-5 w-full overflow-hidden">
        <div className="flex items-center overflow-hidden rounded-r-lg">
          <div
            className="flex w-full space-x-8"
            style={{
              animation: "scroll-linear 20s linear infinite",
            }}
          >
            {[...Array(99)].map((_, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="relative rounded-lg bg-gradient-to-r from-white via-[#FBE8FF] to-[#FEF0FF] w-[430px] h-[200px]">
                  <Image
                    src={"/projects/alodokter-sgm.png"}
                    alt="alodokter-sgm"
                    fill
                    objectFit="fill"
                  />
                </div>
                <div className="relative rounded-lg bg-gradient-to-r from-white via-[#FBE8FF] to-[#FEF0FF] w-[340px] h-[200px]">
                  <Image
                    src={"/projects/cokran.jpg"}
                    alt="alodokter-sgm"
                    fill
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="relative rounded-lg bg-gradient-to-r from-white via-[#FBE8FF] to-[#FEF0FF] w-[430px] h-[200px]">
                  <Image
                    src={"/projects/sprout.jpg"}
                    alt="alodokter-sgm"
                    fill
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="relative rounded-lg bg-gradient-to-r from-white via-[#FBE8FF] to-[#FEF0FF] w-[350px] h-[200px]">
                  <Image
                    src={"/projects/toco.png"}
                    alt="alodokter-sgm"
                    fill
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center overflow-hidden rounded-r-lg">
          <div
            className="flex w-full space-x-8"
            style={{
              animation: "scroll-linear-reverse 20s linear infinite",
            }}
          >
            {[...Array(99)].map((_, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="relative rounded-lg bg-gradient-to-r from-white via-[#FBE8FF] to-[#FEF0FF] w-[340px] h-[200px]">
                  <Image
                    src={"/projects/cokran.jpg"}
                    alt="alodokter-sgm"
                    fill
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="relative rounded-lg bg-gradient-to-r from-white via-[#FBE8FF] to-[#FEF0FF] w-[430px] h-[200px]">
                  <Image
                    src={"/projects/alodokter-sgm.png"}
                    alt="alodokter-sgm"
                    fill
                    objectFit="fill"
                  />
                </div>
                <div className="relative rounded-lg bg-gradient-to-r from-white via-[#FBE8FF] to-[#FEF0FF] w-[350px] h-[200px]">
                  <Image
                    src={"/projects/bouchon.png"}
                    alt="alodokter-sgm"
                    fill
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="relative rounded-lg bg-gradient-to-r from-white via-[#FBE8FF] to-[#FEF0FF] w-[350px] h-[200px]">
                  <Image
                    src={"/projects/toco.png"}
                    alt="alodokter-sgm"
                    fill
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="relative rounded-lg bg-gradient-to-r from-white via-[#FBE8FF] to-[#FEF0FF] w-[350px] h-[200px]">
                  <Image
                    src={"/projects/packet-pulse.png"}
                    alt="alodokter-sgm"
                    fill
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`${poppins.className} flex flex-col items-cente justify-center col-span-2 w-full`}
      >
        <p className="text-[60px] text-white font-semibold">Pixel alchemist</p>
        <p className={`text-white`}>
          turning Figma into fast, flawless web apps. 3 years React wizardry,
          clean code addict, always shipping smooth vibes
        </p>
      </div>
    </div>
  );
};

export default Projects;
