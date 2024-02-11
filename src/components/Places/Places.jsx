import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";


const PlacesData = [
  {
    img: Img1,
    title: "Boat Tour",
    location: "USA",
    description: "Embark on a serene boat tour, where the gentle sway of the water complements picturesque views, offering a peaceful escape amidst nature's beauty.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "US",
    description:
      "Dive into the mesmerizing world beneath the surface, where vibrant coral reefs, diverse marine life, and the ethereal beauty of underwater landscapes create a captivating and otherworldly experience.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "Australia",
    description: "Experience the captivating allure of Sydney, where the iconic Opera House, stunning harbors, and vibrant culture create a mesmerizing cityscape.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "Discover the glamour and energy of Los Angeles, where palm-lined boulevards, iconic landmarks, and a vibrant arts scene make for an enchanting urban experience.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "USA",
    description:
      "Indulge in the dazzling lights and entertainment of Las Vegas, a city that never sleeps, offering a unique blend of excitement and luxury on the famous Strip.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
