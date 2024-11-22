import { useEffect, useState } from "react";
import image1 from "../../image/poert1.png";
import image2 from "../../image/port2.png";
import image3 from "../../image/port3.png";
export default function Portfolio() {
  useEffect(() => {
    document.title = "portfolio";
  });
  const [openImag, setOpenImag] = useState(false);
  const [imageStats, setImageStats] = useState(null);

  const openImage = (image) => {
    setImageStats(image);
    setOpenImag(true);
  };

  const closeImage = () => {
    setOpenImag(false);
    setImageStats(null);
  };

  return (
    <>
      <section className="bg-white min-h-[97vh] ">
        <div className="container flex  justify-start mt-32 items-center flex-col gap-8 h-full w-full">
          <div className=" text-center">
            <h2 className=" text-2xl md:text-[40px] font-bold  text-[#2c3e50]    uppercase  py-4">
              portfolio component
            </h2>
            <div className="w-full flex justify-center items-center my-2 ">
              <div className=" w-full relative after:absolute after:h-[4px]  after:w-[60px]  md:after:w-[100px] after:right-3 after:bg-[#2c3e50] "></div>
              <i className="fa-solid fa-star text-[#2c3e50]  mx-1"></i>
              <div className=" w-full relative after:absolute after:h-[4px]  after:w-[60px]  md:after:w-[100px] after:left-3 after:bg-[#2c3e50] "></div>
            </div>
          </div>
          <div className="cards flex-wrap flex justify-center items-start  gap-8   px-4">
            <div className="card w-full md:w-[45%] lg:w-[28%]   ">
              <div className="inear group  overflow-hidden  rounded-xl  relative">
                <div className="">
                  <img
                    src={image1}
                    className="w-full"
                    alt="portofilo image test"
                  />
                </div>
                <div
                  onClick={() => openImage(image1)}
                  className="opacity-0  group-hover:opacity-100 transition-opacity duration-[600ms] flex w-full h-full bg-[#1abc9ce6] absolute top-0 left-0  justify-center items-center "
                >
                  <i className="fa-solid fa-plus text-8xl text-white"></i>
                </div>
              </div>
            </div>
            <div className="card w-full md:w-[45%] lg:w-[28%]   ">
              <div className="inear group overflow-hidden  rounded-xl relative">
                <img
                  src={image2}
                  className="w-full"
                  alt="portofilo image test"
                />

                <div
                  onClick={() => openImage(image2)}
                  className="opacity-0  group-hover:opacity-100 transition-opacity duration-[600ms] w-full h-full bg-[#1abc9ce6] absolute top-0 left-0 flex justify-center items-center "
                >
                  <i className="fa-solid fa-plus text-8xl text-white"></i>
                </div>
              </div>
            </div>
            <div className="card w-full md:w-[45%] lg:w-[28%]    ">
              <div className="inear group overflow-hidden  rounded-xl relative">
                <img
                  src={image3}
                  className="w-full"
                  alt="portofilo image test"
                />
                <div
                  onClick={() => openImage(image3)}
                  className="opacity-0  group-hover:opacity-100 transition-opacity duration-[600ms] w-full h-full bg-[#1abc9ce6] absolute top-0 left-0 flex justify-center items-center "
                >
                  <i className="fa-solid fa-plus text-8xl text-white"></i>
                </div>
              </div>
            </div>
            <div className="card w-full md:w-[45%] lg:w-[28%]  ">
              <div className="inear group overflow-hidden  rounded-xl relative">
                <img
                  src={image1}
                  className="w-full"
                  alt="portofilo image test"
                />
                <div
                  onClick={() => openImage(image1)}
                  className="opacity-0  group-hover:opacity-100 transition-opacity duration-[600ms] w-full h-full bg-[#1abc9ce6] absolute top-0 left-0 flex justify-center items-center "
                >
                  <i className="fa-solid fa-plus text-8xl text-white"></i>
                </div>
              </div>
            </div>
            <div className="card w-full md:w-[45%] lg:w-[28%]    ">
              <div className="inear group overflow-hidden  rounded-xl relative">
                <img
                  src={image2}
                  className="w-full"
                  alt="portofilo image test"
                />
                <div
                  onClick={() => openImage(image2)}
                  className="opacity-0  group-hover:opacity-100 transition-opacity duration-[600ms] w-full h-full bg-[#1abc9ce6] absolute top-0 left-0 flex justify-center items-center "
                >
                  <i className="fa-solid fa-plus text-8xl text-white"></i>
                </div>
              </div>
            </div>
            <div className="card w-full md:w-[45%] lg:w-[28%]    ">
              <div className="inear group overflow-hidden  rounded-xl relative">
                <img
                  src={image3}
                  className="w-full"
                  alt="portofilo image test"
                />
                <div
                  onClick={() => openImage(image3)}
                  className="opacity-0  group-hover:opacity-100 transition-opacity duration-[600ms] w-full h-full bg-[#1abc9ce6] absolute top-0 left-0 flex justify-center items-center "
                >
                  <i className="fa-solid fa-plus text-8xl text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {openImag && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-[#0d6efd]/10 bg-opacity-70 flex items-center justify-center  z-50"
            onClick={closeImage}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={imageStats}
                alt="Full Screen"
                className="max-w-full max-h-screen"
              />
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 text-white text-3xl"
              >
                <i className="fa-regular fa-circle-xmark"></i>
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
