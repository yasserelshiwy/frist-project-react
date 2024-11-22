import React from "react";
import notfound from "../../../image/undraw_page_not_found_re_e9o6.svg";
export default function NotFound() {
  return (
    <>
      <section className="bg-white h-[97vh] ">
        <div className="container flex justify-center items-center flex-col gap-8 h-full">
          <img src={notfound} className="w-full h-96" alt="" />
          <p className="text-4xl "> 404 Not Found page </p>
        </div>
      </section>
    </>
  );
}
