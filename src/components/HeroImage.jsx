import { useNavigate } from "react-router-dom";

function HeroImage() {
  const navigateTo = useNavigate();
  return (
    <>
      <div className="relative">
        <video className="video" playsInline loop autoPlay muted>
          <source
            loading="lazy"
            src="https://cdn.shopify.com/s/files/1/0505/4709/7785/files/hero-video-fdb01b9054d346f8a1050b30fb13e1db_3599ded5-717e-4cdb-bcb7-b093d2cb2547.mp4?v=1624898130"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col justify-center items-center">
          <h4 className="text-7xl font-sans text-white font-semibold">
            Built For the everyday
          </h4>
          <button
            onClick={() => navigateTo("/products")}
            className="py-4 px-8 mt-6 w-40 text-white font-bold bg-[#2F3132] rounded-sm shadow-lg"
          >
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroImage;
