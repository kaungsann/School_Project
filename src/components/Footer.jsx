import { Icon } from "@iconify/react";
function Footer() {
  return (
    <>
      <div className="flex justify-around p-6 bg-slate-50">
        <div className="flex mt-6">
          <Icon
            icon="ri:facebook-line"
            className="text-slate-700 text-lg ml-4"
          />
          <Icon
            icon="iconoir:instagram"
            className="text-slate-700 text-lg ml-4"
          />
          <Icon
            icon="dashicons:pinterest"
            className="text-slate-700 text-lg ml-4"
          />
        </div>

        <div>
          <h4 className="text-md text-slate-800 mb-4 font-semibold">Info</h4>
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
          <h4 className="text-md text-slate-800 mb-4 font-semibold">Shop</h4>
          <ul>
            <li className="text-sm text-slate-400 mb-4">New Additions</li>
            <li className="text-sm text-slate-400 mb-4">Top Selling</li>
            <li className="text-sm text-slate-400 mb-4">Notebooks</li>
            <li className="text-sm text-slate-400 mb-4">Bags</li>
            <li className="text-sm text-slate-400 mb-4">Pens</li>
            <li className="text-sm text-slate-400 mb-4">Pencil Cases</li>
            <li className="text-sm text-slate-400 mb-4">Stickers</li>
            <li className="text-sm text-slate-400 mb-4">Washi Tape</li>
            <li className="text-sm text-slate-400 mb-4">Gift Cards</li>
          </ul>
        </div>

        <div>
          <h4 className="text-md text-slate-800 mb-4 font-semibold">
            Join for special updates & discounts{" "}
            <Icon icon="el:hand-down" className="text-yellow-700 text-lg" />
          </h4>

          <div className="flex">
            <input
              type="email"
              className="px-2 py-1.5 border-2"
              placeholder="enter your email"
            />
            <button className="ml-2 px-4 py-1.5 bg bg-pink-200 text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
