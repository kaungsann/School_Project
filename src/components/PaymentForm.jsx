import shopPay from "../assets/images/shoppay.png";
import payPay from "../assets/images/paypal.png";
import googlePay from "../assets/images/gp.png";
import {
  Accordion,
  AccordionItem,
  Checkbox,
  Select,
  SelectItem,
} from "@nextui-org/react";

function PaymentForm() {
  const regions = [
    { key: "United State", label: "US" },
    { key: "brunei", label: "Brunei" },
    { key: "cambodia", label: "Cambodia" },
    { key: "east_timor", label: "East Timor" },
    { key: "indonesia", label: "Indonesia" },
    { key: "laos", label: "Laos" },
    { key: "malaysia", label: "Malaysia" },
    { key: "myanmar", label: "Myanmar" },
    { key: "philippines", label: "Philippines" },
    { key: "singapore", label: "Singapore" },
    { key: "thailand", label: "Thailand" },
    { key: "vietnam", label: "Vietnam" },
    { key: "korea", label: "Korea" },
  ];

  return (
    <>
      <div className="flex justify-between">
        <div className="w-3/5 mt-12 relative">
          <div className="w-3/4 absolute right-0">
            <h5 className="text-md text-slate-500 text-center mb-4">
              Express checkout
            </h5>
            <div className="flex justify-center">
              <img
                src={shopPay}
                alt="shoppay"
                className="w-44 h-14 rounded-md shadow-md"
              />
              <img
                src={payPay}
                alt="shoppay"
                className="w-44 h-14 rounded-md shadow-md bg-yellow-400 ml-4"
              />

              <img
                src={googlePay}
                alt="shoppay"
                className="w-44 h-14 rounded-md shadow-md bg-white ml-4"
              />
            </div>
            <div className="flex items-center mt-4">
              <span className="bg-slate-700 w-full border-1 mr-3"></span>
              <span className="text-slate-500 text-md">OR</span>
              <span className="bg-slate-700 w-full border-1 ml-3"></span>
            </div>

            <section>
              <form className="p-4">
                <label className="text-black font-semibold text-xl">
                  Content
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="px-3 inputLine py-3 w-full mt-3 rounded-md border-1 border-slate-300"
                />
                <Checkbox
                  defaultSelected
                  size="md"
                  className="bg[#dc6ace] mt-2"
                >
                  Send me updates + new product launches
                </Checkbox>

                <div className="mt-6">
                  <label className="text-black font-semibold text-md">
                    Delivery
                  </label>

                  <Select
                    isRequired
                    variant="bordered"
                    label="Country/Region"
                    className="w-full mt-3"
                  >
                    {regions.map((re) => (
                      <SelectItem key={re.key}>{re.label}</SelectItem>
                    ))}
                  </Select>

                  <div className="flex justify-between mt-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="px-3 inputLine w-2/4	py-3 mt-3 rounded-md mr-8 border-1 border-slate-300"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="px-3 inputLine w-2/4	py-3 mt-3 rounded-md border-1 border-slate-300"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Address"
                    className="px-3 inputLine w-full py-3 rounded-md border-1 border-slate-300 mt-4"
                  />

                  <input
                    type="text"
                    placeholder="Apartment,suit,etc(optional)"
                    className="px-3 inputLine w-full py-3 rounded-md border-1 border-slate-300 mt-4"
                  />

                  <div className="flex justify-between mt-4">
                    <input
                      type="text"
                      placeholder="City"
                      className="px-3 inputLine w-2/4	py-3 mt-3 rounded-md mr-8 border-1 border-slate-300"
                    />
                    <input
                      type="text"
                      placeholder="Postal Code"
                      className="px-3 inputLine w-2/4	py-3 mt-3 rounded-md border-1 border-slate-300"
                    />
                  </div>

                  <input
                    type="phone"
                    placeholder="Phone (optional)"
                    className="px-3 w-full inputLine py-3 rounded-md border-1 border-slate-300 mt-4"
                  />
                  <div className="mt-6">
                    <label className="text-black font-semibold text-xl">
                      Payment
                    </label>
                    <p className="text-sm text-slate-500 mt-3">
                      All transactions are secure and encrypted.
                    </p>

                    <Accordion variant="splitted">
                      <AccordionItem
                        key="1"
                        subtitle={
                          <div className="flex items-center justify-between">
                            <div className="flex justify-start items-center">
                              <h4 className="ml-3 mb-1"> Credit Card</h4>
                            </div>

                            <div className="flex justify-end w-40 items-center">
                              <img
                                src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/0169695890db3db16bfe.svg"
                                alt="visa"
                                className="w-16 h-6 cursor-pointer"
                              />
                              <img
                                src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/37fc65d0d7ac30da3b0c.svg"
                                alt="card1"
                                className="w-16 h-6 cursor-pointer ml-2"
                              />
                              <img
                                src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/ae9ceec48b1dc489596c.svg"
                                alt="card2"
                                className="w-16 h-6 cursor-pointer ml-2"
                              />
                              <img
                                src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/f11b90c2972f3811f2d5.svg"
                                alt="card3"
                                className="w-16 h-6 cursor-pointer ml-2"
                              />
                            </div>
                          </div>
                        }
                        className="mt-4"
                      >
                        <input
                          type="number"
                          placeholder="Card number"
                          className="px-3 inputLine w-full py-3 rounded-md border-1 border-slate-300 mt-4"
                        />
                        <div className="flex justify-between mt-4">
                          <input
                            type="text"
                            placeholder="Expiration date (MM/YY)"
                            className="px-3 inputLine w-2/4	py-3 mt-3 rounded-md mr-8 border-1 border-slate-300"
                          />
                          <input
                            type="number"
                            placeholder="Security code"
                            className="px-3 inputLine w-2/4	py-3 mt-3 rounded-md border-1 border-slate-300"
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Name on card"
                          className="px-3 inputLine w-full py-3 rounded-md border-1 border-slate-300 mt-4"
                        />

                        {/* <div className="mt-4">
                        <label className="text-black font-semibold text-md">
                          Billing address
                        </label>

                        <Select
                          isRequired
                          variant="bordered"
                          label="Country/Region"
                          className="w-full mt-3"
                        >
                          {regions.map((re) => (
                            <SelectItem key={re.key}>{re.label}</SelectItem>
                          ))}
                        </Select>

                        <div className="flex justify-between mt-4">
                          <input
                            type="text"
                            placeholder="First Name"
                            className="px-3 w-2/4	py-3 mt-3 rounded-md mr-8 border-1 border-slate-300"
                          />
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="px-3 w-2/4	py-3 mt-3 rounded-md border-1 border-slate-300"
                          />
                        </div>

                        <input
                          type="text"
                          placeholder="Address"
                          className="px-3 w-full py-3 rounded-md border-1 border-slate-300 mt-4"
                        />

                        <input
                          type="text"
                          placeholder="Apartment,suit,etc(optional)"
                          className="px-3 w-full py-3 rounded-md border-1 border-slate-300 mt-4"
                        />

                        <div className="flex justify-between mt-4">
                          <input
                            type="text"
                            placeholder="City"
                            className="px-3 w-2/4	py-3 mt-3 rounded-md mr-8 border-1 border-slate-300"
                          />
                          <input
                            type="text"
                            placeholder="Postal Code"
                            className="px-3 w-2/4	py-3 mt-3 rounded-md border-1 border-slate-300"
                          />
                        </div>

                        <input
                          type="phone"
                          placeholder="Phone (optional)"
                          className="px-3 w-full py-3 rounded-md border-1 border-slate-300 mt-4"
                        />
                      </div> */}
                      </AccordionItem>
                      <AccordionItem
                        key="2"
                        subtitle={
                          <div className="flex items-center justify-between">
                            <div className="flex justify-start items-center">
                              <h4 className="ml-3 mb-1">PayPal</h4>
                            </div>

                            <div className="flex justify-end w-40 items-center">
                              <img
                                src={payPay}
                                alt="visa"
                                className="w-20 h-12 cursor-pointer"
                              />
                            </div>
                          </div>
                        }
                        aria-label="Accordion 2"
                        className="bg-slate-300 text-center text-sm"
                      >
                        After clicking Pay with PayPal, you will be redirected
                        to PayPal to complete your purchase securely.
                        <button className="w-full bg-blue-500 mt-4 rounded-md text-white text-bold text-xl text-center py-3">
                          PayPal
                        </button>
                      </AccordionItem>
                    </Accordion>
                    <button className="w-full bg-[#C98897] mt-4 rounded-md text-white text-bold text-xl text-center py-3">
                      Pay Now
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>

        <div className="w-2/5 fixed top-48 right-0">
          <div className="w-96 ml-12">
            <div className="flex justify-between items-center mt-20">
              <input
                type="text"
                placeholder="Discount code or gift card"
                className="px-3 py-3 w-80 mt-3 rounded-md border-1 border-slate-300"
              />
              <button className="px-6 py-2.5 ml-3 mt-3 rounded-md bg-slate-300">
                Apply
              </button>
            </div>

            <div className="flex justify-between items-center mt-8">
              <span className="text-md">Subtotal</span>
              <span className="text-md font-semibold text-black">$13.98</span>
            </div>

            <div className="flex justify-between items-center mt-3">
              <span className="text-md">Shipping</span>
              <span className="text-md font-semibold text-black">$5.95</span>
            </div>

            <div className="flex justify-between items-center mt-3">
              <span className="text-2xl">Total</span>

              <div>
                <span className="text-slate-500 text-sm mr-2">USD</span>
                <span className="text-2xl font-semibold text-black">
                  $19.93
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentForm;