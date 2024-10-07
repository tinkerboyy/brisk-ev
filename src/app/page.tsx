"use client";

import { useState } from "react";
import { Carousel } from "react-responsive-3d-carousel";

export default function Home() {
  const [width] = useState("700px");
  const [height] = useState("500px");

  return (
    <div>
      <section>
        <div id="hero" className="h-screen relative"></div>
      </section>
      <section>
        <div className="relative max-w-6xl flex flex-col mx-auto  justify-between px-4 my-32 ">
          <div className="flex flex-col space-y-2 justify-between md:flex-row">
            <div className="flex flex-col items-start space-y-8 w-72">
              <div className="font-bold text-2xl">
                <strong>Battery</strong>
              </div>
              <div className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
              </div>
            </div>
            <div className="flex flex-col items-start space-y-8 w-72 font-bold  md:flex-col-reverse">
              <div className="font-bold text-2xl">
                <strong>1 year Warranty</strong>
              </div>
            </div>
          </div>
          <div>
            <img
              className="block w-full bg-cover bg-center"
              src="/image351.png"
              alt=""
            />
          </div>
          <div className="flex flex-row-reverse">
            <div className="flex flex-col items-center justify-between space-y-2 md:text-right">
              <div className="w-64 text-4xl font-bold text-lime-400">
                <strong className="w-64 text-4xl font-bold text-lime-400">
                  333 &nbsp;
                </strong>
                <strong className="w-64 text-2xl font-bold text-lime-400">
                  KM
                </strong>
              </div>
              <div className="w-64 text-4xl font-normal">
                <strong>RANGE</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative container flex flex-col max-w-screen-xl mx-auto space-y-2 justify-between px-4 my-32 md:flex-row md:space-x-2 md:space-y-0">
          <div>
            <img
              className="block w-full bg-cover bg-center"
              src="/222.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="block w-full bg-cover bg-center"
              src="/7778.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section>
        <div className="relative max-w-screen-xl flex flex-col mx-auto items-center justify-between px-4 my-32 md:flex-row">
          <Carousel
            showArrows={false}
            width={width}
            height={height}
            autoPlay={true}
            spread="wide"
            showStatus={false}
            showIndicators={false}
          >
            <img src="image340.png" alt="example-image-1" />
            <img src="image-1.png" alt="example-image-2" />
            <img src="image340.png" alt="example-image-2" />

            <img src="image.png" alt="example-image-1" />
            <img src="image-1.png" alt="example-image-2" />
          </Carousel>
        </div>
      </section>
      <section>
        <div className="relative max-w-screen-xl flex flex-col mx-auto items-center justify-between px-4 my-32 md:flex-row">
          <img
            className="block w-full bg-cover bg-center"
            src="/image342.png"
            alt=""
          />
        </div>
      </section>

      <section>
        <div className="relative max-w-screen-xl flex flex-col mx-auto items-center justify-between px-4 my-32 md:flex-row">
          <img
            className="block w-full bg-cover bg-center"
            src="/image346.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
