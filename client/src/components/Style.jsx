import React from "react";

export default function Style() {
  const styles = [
    { src: "/images/casual.png", alt: "Casual", label: "Casual" },
    { src: "/images/party.png", alt: "Party", label: "Party" },
    { src: "/images/formal.png", alt: "Formal", label: "Formal" },
    { src: "/images/gym.png", alt: "Gym", label: "Gym" },
  ];

  return (
    <div className="flex flex-col items-center p-8 w-full bg-[#F0F0F0] rounded-xl">
      <h1 className="text-[32px] font-bold mb-6 text-center">
        BROWSE BY DRESS STYLE
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 max-w-4xl">
        {styles.map((style, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={style.src}
              alt={style.alt}
              className="w-full h-56 object-cover rounded-lg"
            />
            <h2 className="absolute top-4 left-4 text-lg font-bold text-black">
              {style.label}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
