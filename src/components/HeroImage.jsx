import heroImg from "../assets/images/summer.png";

function HeroImage() {
  return (
    <>
      <img
        src={heroImg}
        alt="hero"
        className="h-[500px] w-full cursor-pointer"
      />
    </>
  );
}

export default HeroImage;
