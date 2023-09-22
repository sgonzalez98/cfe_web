import React from "react";
import Image from "next/image";
import Stars from "../../../public/assets/icons/stars.svg";

const list = [
  {
    name: "iezh Robert",
    image: "/assets/people-3.png",
    city: "Warsaw",
    country: "Poland",
    rating: "4",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
  },
  {
    name: "iezh Robert",
    image: "/assets/people-3.png",
    city: "Warsaw",
    country: "Poland",
    rating: "3.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
  },
  {
    name: "iezh Robert",
    image: "/assets/people-3.png",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
  },
];

const Testimoni = () => {
  return list.map((item, index) => (
    <div className="px-3 items-stretch my-2" key={index}>
      <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
        <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
          <div className="flex order-2 xl:order-1">
            <Image src={item.image} height={50} width={50} alt="Icon People" />
            <div className="flex flex-col ml-5 text-left">
              <p className="text-lg text-black-600 capitalize">{item.name}</p>
              <p className="text-sm text-black-500 capitalize">
                {item.city},{item.country}
              </p>
            </div>
          </div>
          <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
            <p className="text-sm">{item.rating}</p>
            <span className="flex ml-4">
              <Image className="h-4 w-4" src={Stars} alt="Estrellas" />
            </span>
          </div>
        </div>
        <p className="mt-5 text-left">“{item.testimoni}”.</p>
      </div>
    </div>
  ));
};

export default Testimoni;
