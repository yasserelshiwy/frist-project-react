import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "contact";
  });

  return (
    <>
      <section className="bg-white h-[97vh] ">
        <div className="container flex  justify-start mt-32 items-center flex-col gap-8 h-full w-full">
          <div className=" text-center">
            <h2 className=" text-2xl md:text-[40px] font-bold  text-[#2c3e50]    uppercase  py-4">
              conatct section
            </h2>
            <div className="w-full flex justify-center items-center my-2">
              <div className=" w-full relative after:absolute after:h-[4px]  after:w-[60px]  md:after:w-[100px] after:right-3 after:bg-[#2c3e50] "></div>
              <i className="fa-solid fa-star text-[#2c3e50]  mx-1"></i>
              <div className=" w-full relative after:absolute after:h-[4px]  after:w-[60px]  md:after:w-[100px] after:left-3 after:bg-[#2c3e50] "></div>
            </div>
          </div>
          <div className="w-full flex justify-start items-center  h-1/2 px-4 ">
            <form
              action=""
              className="w-full space-y-8 flex justify-center items-center h-full flex-col"
            >
              <div className="username w-full md:w-1/2 flex-col  flex justify-center items-center relative ">
                <input
                  id="username"
                  type="text"
                  placeholder="UserName"
                  className=" w-full z-30  p-3 outline-none border-b-[1px] rounded-lg border-gray-300 placeholder:text-gray-600 peer"
                />
                <label
                  htmlFor="username"
                  className="ml-2 text-[#1abc9ce6] w-fit transition-[top] duration-500  p-1 rounded-md font-medium absolute  left-0 top-2 peer-focus:-top-7 "
                >
                  userName :
                </label>
              </div>
              <div className="UserAge w-full md:w-1/2 flex-col  flex justify-center items-center relative ">
                <input
                  id="UserAge"
                  type="numder"
                  placeholder="UserAge"
                  className=" w-full z-30  p-3 outline-none border-b-[1px] rounded-lg border-gray-300 placeholder:text-gray-600 peer"
                />
                <label
                  htmlFor="UserAgeusername"
                  className="ml-2 text-[#1abc9ce6] w-fit transition-[top] duration-500  p-1 rounded-md font-medium absolute  left-0 top-2 peer-focus:-top-7 "
                >
                  userAge :
                </label>
              </div>

              <div className="userEmail  w-full md:w-1/2 flex-col  flex justify-center items-center relative ">
                <input
                  id="userEmail"
                  type="email"
                  placeholder="userEmail"
                  className=" w-full z-30  p-3 outline-none border-b-[1px] rounded-lg border-gray-300 placeholder:text-gray-600 peer"
                />
                <label
                  htmlFor="userEmail"
                  className="ml-2 text-[#1abc9ce6] w-fit transition-[top] duration-500  p-1 rounded-md font-medium absolute  left-0 top-2 peer-focus:-top-7 "
                >
                  userEmail :
                </label>
              </div>
              <div className="userPassword w-full md:w-1/2 flex-col  flex justify-center items-center relative ">
                <input
                  id="userPassword"
                  type="password"
                  placeholder="userPassword"
                  className=" w-full z-30  p-3 outline-none border-b-[1px] rounded-lg border-gray-300 placeholder:text-gray-600 peer"
                />
                <label
                  htmlFor="UserAgeusername"
                  className="ml-2 text-[#1abc9ce6] w-fit transition-[top] duration-500  p-1 rounded-md font-medium absolute  left-0 top-2 peer-focus:-top-7 "
                >
                  userPassword :
                </label>
              </div>
              <div className="username w-full md:w-1/2 m-auto ">
                <button
                  type="button"
                  className="p-[7px_15px]  focus:scale-[0.95] w-auto hover:scale-200 bg-[#1abc9ce6] text-white rounded-lg"
                >
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
