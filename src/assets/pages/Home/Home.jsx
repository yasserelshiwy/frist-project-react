import { useEffect } from "react";
import img from "../../image/avataaars.svg";
export default function Home() {
  useEffect(() => {
    document.title = "home";
  });
  return (
    <>
      <section className="bg-[#1abc9c] h-[97vh] ">
        <div className="container flex justify-center items-center h-full">
          <div className="body-section flex justify-center items-center flex-col gap-3">
            <div>
              <img
                src={img}
                className="w-[250px]"
                alt="Graphic person picture"
              />
            </div>
            <h2 className=" text-2xl md:text-[39px] font-bold  text-white   uppercase  py-[5px]">
              Start Framework
            </h2>
            <div className="w-full flex justify-center items-center">
              <div className=" w-full relative after:absolute after:h-[4px]  after:w-[60px]  md:after:w-[100px] after:right-3 after:bg-white"></div>
              <i className="fa-solid fa-star text-white mx-1"></i>
              <div className=" w-full relative after:absolute after:h-[4px]  after:w-[60px]  md:after:w-[100px] after:left-3 after:bg-white"></div>
            </div>
            <div>
              <p className="text-white">
                Graphic Artist - Web Designer - Illustrator
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
