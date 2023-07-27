import Image from "next/image";
import React from "react";

const Carousel = () => {
  return (
    <div className="carousel carousel-center max-w-3xl p-4 space-x-4  rounded-box flex mx-auto mb-20">
      <div className="carousel-item">
        <Image
          src="https://images.pexels.com/photos/7005938/pexels-photo-7005938.jpeg?auto=compress&cs=tinysrgb&w=260&h=750&dpr=1"
          className="rounded-box"
          alt="product"
          width={300}
          height={100}
        />
      </div>
      <div className="carousel-item">
        <Image
          src="https://images.pexels.com/photos/7005938/pexels-photo-7005938.jpeg?auto=compress&cs=tinysrgb&w=260&h=750&dpr=1"
          className="rounded-box"
          alt="product"
          width={300}
          height={100}
        />
      </div>
      <div className="carousel-item">
        <Image
          src="https://images.pexels.com/photos/7005938/pexels-photo-7005938.jpeg?auto=compress&cs=tinysrgb&w=260&h=750&dpr=1"
          className="rounded-box"
          alt="product"
          width={300}
          height={100}
        />
      </div>
      <div className="carousel-item">
        <Image
          src="https://images.pexels.com/photos/7005938/pexels-photo-7005938.jpeg?auto=compress&cs=tinysrgb&w=260&h=750&dpr=1"
          className="rounded-box"
          alt="product"
          width={300}
          height={100}
        />
      </div>
      <div className="carousel-item">
        <Image
          src="https://images.pexels.com/photos/7005938/pexels-photo-7005938.jpeg?auto=compress&cs=tinysrgb&w=260&h=750&dpr=1"
          className="rounded-box"
          alt="product"
          width={300}
          height={100}
        />
      </div>
      <div className="carousel-item">
        <Image
          src="https://images.pexels.com/photos/7005938/pexels-photo-7005938.jpeg?auto=compress&cs=tinysrgb&w=260&h=750&dpr=1"
          className="rounded-box"
          alt="product"
          width={300}
          height={100}
        />
      </div>
      <div className="carousel-item">
        <Image
          src="https://images.pexels.com/photos/7005938/pexels-photo-7005938.jpeg?auto=compress&cs=tinysrgb&w=260&h=750&dpr=1"
          className="rounded-box"
          alt="product"
          width={300}
          height={100}
        />
      </div>
    </div>
  );
};

export default Carousel;
