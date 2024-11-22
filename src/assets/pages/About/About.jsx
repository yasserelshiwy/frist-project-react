import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "about";
  });
  return (
    <>
      <section className="bg-[#1abc9c] h-[97vh] ">
        <div className="container flex justify-center items-center h-full">
          <div className="body-section flex justify-center items-center flex-col gap-3">
            <h2 className=" text-2xl md:text-[39px] font-bold  text-white text-center   uppercase  py-[5px]">
              about component
            </h2>
            <div className="w-full flex justify-center items-center">
              <div className=" w-full relative after:absolute after:h-[4px]  after:w-[60px]  md:after:w-[100px] after:right-3 after:bg-white"></div>
              <i className="fa-solid fa-star text-white mx-1"></i>
              <div className=" w-full relative after:absolute after:h-[4px]  after:w-[60px]  md:after:w-[100px] after:left-3 after:bg-white"></div>
            </div>
            <div className="flex xl:w-3/4 px-4 gap-4 my-4">
              <p className="text-white w-1/2">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p className="w-1/2 text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
