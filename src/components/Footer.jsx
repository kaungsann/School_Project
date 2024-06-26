import { Icon } from "@iconify/react";
function Footer() {
  return (
    <>
      <div className="flex justify-evenly my-12 ">
        <div className="flex items-center cursor-pointer">
          <Icon
            icon="vaadin:truck"
            style={{ color: "black" }}
            className="text-xl"
          />
          <span className="ml-2 text-xs font-semibold hover:underline-offset-8 hover:underline decoration-solid underline-effect">
            Free World Wide Shipping
          </span>
        </div>
        <div className="flex items-center cursor-pointer">
          <Icon
            icon="streamline:arrow-round-right"
            style={{ color: "black" }}
            className="text-xl"
          />

          <span className="ml-2 text-xs font-semibold hover:underline-offset-8 hover:underline decoration-solid underline-effect">
            Full 30-day Return Policy
          </span>
        </div>
        <div className="flex items-center cursor-pointer">
          <Icon
            icon="fa:users"
            style={{ color: "black" }}
            className="text-xl"
          />
          <span className="ml-2 text-xs font-semibold hover:underline-offset-8 hover:underline decoration-solid underline-effect">
            Join 1000 stationery-addicts
          </span>
        </div>
      </div>
      <div className="flex justify-around p-6 bg-[#2f3132]">
        <div className="flex mt-6">
          <Icon
            icon="ri:facebook-line"
            className="text-slate-100 text-lg ml-4"
          />
          <Icon
            icon="iconoir:instagram"
            className="text-slate-100 text-lg ml-4"
          />
          <Icon
            icon="dashicons:pinterest"
            className="text-slate-100 text-lg ml-4"
          />
        </div>

        <div>
          <h4 className="text-md text-slate-300 mb-4 font-semibold">Info</h4>
          <ul>
            <li className="text-sm text-slate-400 mb-4">Blog</li>
            <li className="text-sm text-slate-400 mb-4">About Us</li>
            <li className="text-sm text-slate-400 mb-4">Ststain ability</li>
            <li className="text-sm text-slate-400 mb-4">
              Shipping and Returns
            </li>
            <li className="text-sm text-slate-400 mb-4">Common Questions</li>
            <li className="text-sm text-slate-400 mb-4">Contact us</li>
          </ul>
        </div>

        <div>
          <h4 className="text-md text-slate-300 mb-4 font-semibold">Shop</h4>
          <ul>
            <li className="text-sm text-slate-400 mb-4">New Additions</li>
            <li className="text-sm text-slate-400 mb-4">Top Selling</li>
            <li className="text-sm text-slate-400 mb-4">Smart Phone</li>
            <li className="text-sm text-slate-400 mb-4">Laptop</li>
            <li className="text-sm text-slate-400 mb-4">EV Bicycle</li>
            <li className="text-sm text-slate-400 mb-4">Smart Watch</li>
            <li className="text-sm text-slate-400 mb-4">Stickers</li>
            <li className="text-sm text-slate-400 mb-4">Washi Tape</li>
            <li className="text-sm text-slate-400 mb-4">Gift Cards</li>
          </ul>
        </div>

        <div>
          <h4 className="text-md text-slate-300 mb-4 font-semibold">
            Join for special updates & discounts
            <Icon icon="el:hand-down" className="text-yellow-700 text-lg" />
          </h4>

          <div className="">
            <input
              type="email"
              className="px-2 py-1.5 border-2"
              placeholder="enter your email"
            />
            <button className="ml-2 px-4 py-1.5 bg-[#06539d] text-white font-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
