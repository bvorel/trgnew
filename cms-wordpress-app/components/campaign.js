import { useEffect, useRef, useState, useCallback } from "react";


export default function Campaign({ children }) {
  const ref = useRef(null);

  return (
    <section data-scroll-section>

      <div className="text-ticker w-full py-40">
        <div className="container">
          <div className="grid grid-rows-10 grid-cols-9 gap-8">
            <div className="bg-white p-10 col-span-6 row-span-2 h-96"></div>
            <div className="bg-white p-10 col-span-3 row-span-3"></div>
            <div className="bg-white p-10 col-span-6 row-span-2 h-96"></div>
            <div className="bg-white p-10 col-span-3 row-span-3"></div>
            <div className="bg-white p-10 col-span-6 row-span-2 h-96"></div>
            <div className="bg-white p-10 col-span-5 row-span-2 h-96"></div>
            <div className="bg-white p-10 col-span-2 row-span-2 h-96"></div>
            <div className="bg-white p-10 col-span-2 row-span-2 h-96"></div>
            <div className="bg-white p-10 col-span-full row-span-2 h-96"></div>
          </div>
        </div>
      </div>

    </section>
  )
}
