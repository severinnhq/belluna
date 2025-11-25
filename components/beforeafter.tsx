"use client";

import Image from "next/image";
import { useState } from "react";

export const Slider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <div className="w-fit m-auto text-center select-none py-6">
      {/* White text above the slider */}
      <p className="text-white text-2xl font-bold mb-4">Mi lehetséges?</p>

      <div
        className="relative overflow-hidden"
        onMouseMove={handleMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        style={{ display: "inline-block", maxHeight: "400px" }}
      >
        {/* Before image */}
        <Image
          src="/uploads/demobefore.png"
          alt="Before"
          draggable={false}
          priority
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "auto",
            height: "100%",
            maxHeight: "400px",
            display: "block",
          }}
        />

        {/* After image clipped */}
        <div
          className="absolute top-0 left-0 overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            width: "100%",
            height: "100%",
            maxHeight: "400px",
          }}
        >
          <Image
            src="/uploads/demoafter.png"
            alt="After"
            draggable={false}
            priority
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "auto",
              height: "100%",
              maxHeight: "400px",
              display: "block",
            }}
          />
        </div>

        {/* Slider handle shifted left */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          {/* Knob centered on the handle */}
          <div className="absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-6px)] bg-white" />
        </div>
      </div>
    </div>
  );
};
