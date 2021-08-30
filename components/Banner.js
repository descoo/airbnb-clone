import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[400px] lg:h-[450px] xl:h-[500px] ">
      <Image src="/images/banner.jpg" layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-white text-sm sm:text-lg">
          Not sure where to go? Perfect.
        </p>
        <button className="text-gray-700 bg-gray-100 px-10 py-4 shadow-md rounded-full my-3 hover:bg-gray-700 hover:text-white active:scale-90 transition duration-150">
          Im flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
