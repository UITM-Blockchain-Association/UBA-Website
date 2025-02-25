import { useState } from "react";
import "/src/assets/css/logoSlider.css";

const LogoSlider = () => {
  const [isPaused, setIsPaused] = useState(false);

  const sponsors = [
    "https://tmb001.vercel.app/images/partners/logo-pointsmaker.png",
    "https://tmb001.vercel.app/images/partners/logo-buyersforpoints.png",
    "https://tmb001.vercel.app/images/partners/logo-dealandrunner.png",
    "https://tmb001.vercel.app/images/partners/logo-buyformeretail.png",
    "https://tmb001.vercel.app/images/partners/logo-buyinggroup.png",
    "https://tmb001.vercel.app/images/partners/logo-embdeals.png",
    "https://tmb001.vercel.app/images/partners/logo-buygetrewards.png",
    "https://tmb001.vercel.app/images/partners/logo-maxoutdeals.png",
    "https://tmb001.vercel.app/images/partners/logo-mysbuyinggroup.png",
    "https://tmb001.vercel.app/images/partners/logo-closeoutnj.png",
  ];

  return (
    <div className="bg-white py-8 flex justify-center mt-[10rem] mb-[10rem]">
      <div
        className="w-[calc(100%-160px)] mx-auto overflow-hidden relative border-t border-b border-[#BCBCBC] pt-[30px] pb-[30px]"
        onMouseEnter={() => setIsPaused(true)} // Pause animation
        onMouseLeave={() => setIsPaused(false)} // Resume animation
      >
        <div
          className="flex items-center gap-[100px] whitespace-nowrap animate-scroll"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {/* Duplicate logos for seamless looping */}
          {[
            ...sponsors,
            ...sponsors,
            ...sponsors,
            ...sponsors,
            ...sponsors,
          ].map((logo, index) => (
            <div key={index} className="shrink-0">
              <img
                src={logo}
                alt={`Sponsor ${index + 1}`}
                className="h-16 object-contain"
                style={{ filter: "brightness(0) invert(0.6)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
