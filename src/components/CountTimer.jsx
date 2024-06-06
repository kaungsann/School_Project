function CountTimer() {
  return (
    <>
      <section>
        <div className="flex flex-col items-center my-8">
          <h5 className="text-xs w-32 text-center py-1 mb-2 text-white bg-[#86ABD4]">
            NEW COLLECTION
          </h5>
          <h4 className="text-2xl text-center text-slate-700 font-semibold">
            Summer in Italy Collection 🍋
          </h4>
          <p className="text-sm font-sans my-4">
            Transport yourself to the sunny Mediterranean with our new
            collection! Immerse in the vibrant colours and enchanting charm of
            Italy
          </p>
          <p className="text-sm font-sans">
            15% off when you buy 3+
            <span className="text-pink-400 hover:text-slate-700 ml-2 cursor-pointer">
              Summer in Italy items ✨
            </span>
          </p>
          <img
            src="https://gen.sendtric.com/countdown/80s5eb2oyv"
            alt="countTime"
            className="my-4"
          />
        </div>
      </section>
    </>
  );
}

export default CountTimer;
