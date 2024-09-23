"use Client";

import Image from "next/image";

export const CardGrid = () => {
  return (
    <div className="grid grid-cols-10 grid-rows-5 gap-4 w-full h-screen bg-slate-300">
      <div className="bg-red-400 rounded-lg col-span-2 row-span-2">1</div>
      <div className="bg-red-400 rounded-lg col-span-2 col-start-3">
        <Image
          width={150}
          height={150}
          src="/assets/React js.jpg"
          alt=""
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="bg-red-400 col-span-2 rounded-lg row-span-2 col-start-5">
        3
      </div>
      <div className="bg-red-400 col-span-2 row-span-2 rounded-lg col-start-3 row-start-2">
        <Image
          width={150}
          height={150}
          src="/assets/Desarrollo3.jpg"
          alt=""
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="bg-red-400 col-span-2 rounded-lg col-start-7 row-start-1">
        5
      </div>
      <div className="bg-red-400 col-span-2 rounded-lg row-span-2 col-start-9 row-start-1">
        <Image
          width={150}
          height={150}
          src="/assets/Desarrollo2.jpg"
          alt=""
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="bg-red-400 col-span-2 rounded-lg row-span-2 col-start-7 row-start-2">
        7
      </div>
      <div className="bg-red-400 col-span-2 rounded-lg row-span-2 row-start-3">
        8
      </div>
      <div className="bg-red-400 col-span-2 row-span-2 rounded-lg col-start-3 row-start-4">
        9
      </div>
      <div className="bg-red-400 col-span-2 rounded-lg row-span-2 col-start-5 row-start-3">
        10
      </div>
      <div className="bg-red-400 col-span-2 rounded-lg row-span-2 col-start-7 row-start-4">
        <Image
          width={150}
          height={150}
          src="/assets/Desarrollo1.jpg"
          alt=""
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="bg-red-400 col-span-2 rounded-lg row-span-2 col-start-9 row-start-3">
        12
      </div>
      <div className="bg-red-400 col-span-2 row-start-5 rounded-lg">13</div>
      <div className="bg-red-400 col-span-2 col-start-5 row-start-5 rounded-lg">
        14
      </div>
      <div className="bg-red-400 col-span-2 col-start-9 row-start-5 rounded-lg">
        <Image
          width={150}
          height={150}
          src="/assets/JavaScript.jpg"
          alt=""
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default CardGrid;
