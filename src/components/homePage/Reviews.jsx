import { Rating } from "@mui/material";
import React from "react";

function Reviews() {
  return (
    <div className=" bg-black">
      <div
        className=" mt-5 w-full  h-auto relative bg-cover md:bg-center   "
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80)`,
        }}
      >
        <div className=" flex flex-col gap-10 py-16 px-5 ">
          <div className=" flex flex-col gap-2 items-center text-white md:gap-4">
            <h3 className=" text-2xl md:text-3xl">Our costumers loves us</h3>
            <h2 className=" text-4xl md:text-6xl md:tracking-wider">
              Latest Reviews
            </h2>
          </div>
          <div className=" w-full h-auto md:flex md:py-20">
            <div className=" w-full h-auto bg-black bg-opacity-70 flex flex-col gap-10 justify-center px-10 py-10 md:h-[400px] ">
              <h1 className=" text-white">
                "Our family had an amazing vacation, all thanks to Abrar Travel
                Wings! From start to finish, their attention to detail and
                personalized service made our trip unforgettable. We can't wait
                to book our next adventure with them."
              </h1>
              <Rating value={5} />
              <h3 className=" text-3xl text-white">Sarah M.</h3>
            </div>
            <div className=" w-full h-auto bg-[#0c6f63] bg-opacity-70 flex flex-col gap-10 justify-center px-10 py-10 md:h-[400px]">
              <h1 className=" text-white">
                "Abrar Travel Wings truly knows how to make dreams come true.
                They tailored a perfect honeymoon package for us, and every
                moment was filled with romance and adventure. The memories we
                made will last a lifetime."
              </h1>
              <Rating value={5} />
              <h3 className=" text-3xl text-white">John & Emily</h3>
            </div>
            <div className=" w-full h-auto bg-black bg-opacity-70 flex flex-col gap-10 justify-center px-10 py-10 md:h-[400px]">
              <h1 className=" text-white">
                "I've been a loyal customer of Abrar Travel Wings for years, and
                they never disappoint. Their dedication to customer satisfaction
                is unmatched. They've taken care of all my travel needs, from
                business trips to family vacations, with professionalism and a
                personal touch."
              </h1>
              <Rating value={5} />
              <h3 className=" text-3xl text-white">Michael R</h3>
            </div>
            <div className=" w-full h-auto bg-white bg-opacity-70 flex flex-col gap-10 justify-center px-10 py-10 md:h-[400px]">
              <h1 className=" text-black">
                "I can't thank Abrar Travel Wings enough for making my solo
                backpacking trip a breeze. Their recommendations,
                accommodations, and local insights made my adventure safe and
                exciting. I returned with unforgettable experiences and new
                friends!"
              </h1>
              <Rating value={5} />
              <h3 className=" text-3xl text-black">Jenniffer P</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
