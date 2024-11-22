import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <section className="bg-[#2c3e50] text-white py-20">
          <div className="container">
            <div className="inear flex justify-between items-center flex-col gap-8 md:flex-row">
              <div className="w-1/3 text-center space-y-4">
                <h3 className="text-[26px] font-semibold">LOCATION</h3>
                <p className="">2215 John Daniel Drive</p>
                <p className="">Clark, MO 65243</p>
              </div>
              <div className="flex justify-center  items-center flex-col">
                <h3 className="text-xl md:text-[26px] font-semibold  ">
                  AROUND THE WEB
                </h3>
                <div className="icons flex justify-center gap-2 items-center mt-6 ">
                  <i className="fa-brands fa-facebook mx-1 icon text-lg border rounded-full p-2"></i>
                  <i className="fa-brands fa-twitter mx-1 icon text-lg border rounded-full p-2"></i>
                  <i className="fa-brands fa-linkedin-in mx-1 icon text-lg border rounded-full p-2"></i>
                  <i className="fa-solid fa-globe mx-1 icon text-lg border rounded-full p-2"></i>
                </div>
              </div>
              <div className="w-1/3 text-center space-y-4  ">
                <h3 className="text-[26px] font-semibold">ABOUT FREELANCER</h3>
                <p className="">
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#1a252f] py-5">
          <div className="container text-center">
            <p className="text-white">Copyright © Your Website 2021</p>
          </div>
        </section>
      </footer>
    </>
  );
}
