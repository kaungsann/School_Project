import shopPay from "../assets/images/shoppay.png";
import payPay from "../assets/images/paypal.png";
import { Icon } from "@iconify/react";
import { calculateSubtotal } from "../utils/cartCountPrice";
import { useAddTransitionMutation } from "../services/transitionAPI";

import {
  Accordion,
  AccordionItem,
  Checkbox,
  Select,
  SelectItem,
  Input,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function PaymentForm() {
  const carts = useSelector((state) => state.cart);

  const [addPay, { isLoading, error }] = useAddTransitionMutation();

  console.log("cart s is a", carts);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigateTo = useNavigate();

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

  const subtotal = calculateSubtotal(carts);

  const onSubmit = async (data) => {
    console.log("data is a", data);
    try {
      const userId = 2;
      const paymentData = {
        userId,
        shippingInfo: {
          emailAddress: data.email,
          region: data.region,
          name: `${data.firstName} ${data.lastName}`,
          address: data.address,
          apartment: data.apartment,
          city: data.city,
          postalCode: data.postalCode,
          phoneNumber: data.phone,
        },
        purchasedProductListReqs: carts.map((product) => ({
          productId: product.id,
          qty: product.quantity,
        })),
        payment: {
          cardNumber: data.cardNumber,
          expDate: data.expDate,
          securityCode: data.securityCode,
          nameOnCard: data.nameOnCard,
        },
      };

      await addPay(paymentData);
      navigateTo("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="w-3/5 mt-12 relative">
          <div className="w-3/4 absolute right-0">
            <h5 className="text-md text-slate-500 text-center mb-4">
              Express checkout
            </h5>
            <div className="flex justify-around">
              <img
                src={shopPay}
                alt="shoppay"
                className="w-44 h-12 rounded-md shadow-md cursor-pointer"
              />
              <div className="w-44 flex justify-center rounded-md items-center bg-black cursor-pointer">
                <Icon icon="logos:google-pay" className="text-xl bg-black" />
              </div>
              <div className="w-44 flex justify-center rounded-md items-center bg-yellow-400 cursor-pointer">
                <Icon icon="logos:paypal" className="text-xl" />
                <span className="text-blue-800 text-xl font-bold">Pay</span>
                <span className="text-cyan-600 text-xl font-bold">Pal</span>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <span className="bg-slate-700 w-full border-1 mr-3"></span>
              <span className="text-slate-500 text-md">OR</span>
              <span className="bg-slate-700 w-full border-1 ml-3"></span>
            </div>

            <section>
              <form className="p-4 mb-10" onSubmit={handleSubmit(onSubmit)}>
                <label className="text-black font-semibold text-xl">
                  Content
                </label>

                <Input
                  type="email"
                  variant="bordered"
                  {...register("email", {
                    required: "email is required",
                  })}
                  placeholder="example@gmail.com"
                  aria-labelledby="email"
                  className="px-3 py-3 w-full mt-3 rounded-md"
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
                    id="country"
                    className="w-full mt-3"
                    aria-label="region"
                  >
                    {regions.map((re) => (
                      <SelectItem key={re.key}>{re.label}</SelectItem>
                    ))}
                  </Select>
                  <div className="flex justify-between mt-4">
                    <Input
                      type="text"
                      variant="bordered"
                      {...register("name", {
                        required: "name is required",
                      })}
                      placeholder="First Name"
                      aria-labelledby="First Name"
                      className="px-3 w-2/4	py-3 mt-3 rounded-md"
                    />

                    <Input
                      type="text"
                      variant="bordered"
                      {...register("name", {
                        required: "name is required",
                      })}
                      placeholder="Last Name"
                      aria-labelledby="Last Name"
                      className="px-3 w-2/4	py-3 mt-3 rounded-md"
                    />
                  </div>
                  <Input
                    type="text"
                    variant="bordered"
                    {...register("address", {
                      required: "address is required",
                    })}
                    placeholder="Address"
                    aria-labelledby="Address"
                    className="px-3 w-full py-3 rounded-md mt-4"
                  />
                  <Input
                    type="text"
                    variant="bordered"
                    {...register("apartment", {
                      required: "apartment is required",
                    })}
                    placeholder="Apartment,suit,etc(optional)"
                    aria-labelledby="apartment"
                    className="px-3 w-full py-3 rounded-md mt-4"
                  />
                  <div className="flex justify-between mt-4">
                    <Input
                      type="text"
                      variant="bordered"
                      {...register("city", {
                        required: "City is required",
                      })}
                      placeholder="city"
                      aria-labelledby="City"
                      className="px-3 w-full py-3 rounded-md mt-4"
                    />

                    <Input
                      type="text"
                      variant="bordered"
                      {...register("postalCode", {
                        required: "postalCode is required",
                      })}
                      placeholder="Postal Code"
                      aria-labelledby="Postal Code"
                      className="px-3 w-full py-3 rounded-md mt-4"
                    />
                  </div>

                  <Input
                    type="number"
                    variant="bordered"
                    {...register("phoneNumber", {
                      required: "phoneNumber is required",
                    })}
                    placeholder="phoneNumber"
                    aria-labelledby="phoneNumber"
                    className="px-3 w-full py-3 rounded-md mt-4"
                  />

                  <div className="mt-6">
                    <label className="text-black font-semibold text-xl">
                      Payment
                    </label>
                    <p className="text-sm text-slate-500 mt-3">
                      All transactions are secure and encrypted.
                    </p>

                    <Accordion variant="splitted" aria-label="payBox">
                      <AccordionItem
                        key="1"
                        aria-label="payBox1"
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
                        <Input
                          type="number"
                          variant="bordered"
                          {...register("cardNumber", {
                            required: "cardNumber is required",
                          })}
                          placeholder="Card number"
                          aria-labelledby="Card number"
                          className="px-3 w-full py-3 rounded-md mt-4"
                        />

                        <div className="flex justify-between mt-4">
                          <Input
                            type="date"
                            variant="bordered"
                            {...register("expDate", {
                              required: "expDate is required",
                            })}
                            placeholder="Expiration date (MM/YY)"
                            aria-labelledby="Expiration date (MM/YY)"
                            className="px-3 w-2/4	py-3 mt-3 rounded-md mr-8"
                          />

                          <Input
                            type="number"
                            variant="bordered"
                            {...register("securityCode", {
                              required: "securityCode is required",
                            })}
                            placeholder="Security code"
                            aria-labelledby="Security code"
                            className="px-3 w-2/4	py-3 mt-3 rounded-md mr-8"
                          />
                        </div>
                        <Input
                          type="text"
                          variant="bordered"
                          {...register("nameOnCard", {
                            required: "nameOnCard is required",
                          })}
                          placeholder="Name on card"
                          aria-labelledby="Name on card"
                          className="px-3 w-2/4	py-3 mt-3 rounded-md mr-8"
                        />
                        <input
                          type="text"
                          placeholder="Name on card"
                          className="px-3 w-full py-3 rounded-md mt-4"
                        />
                      </AccordionItem>
                      {/* <AccordionItem
                        aria-label="payBox2"
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
                        className="bg-slate-300 text-center text-sm"
                      >
                        After clicking Pay with PayPal, you will be redirected
                        to PayPal to complete your purchase securely.
                        <button className="w-full bg-blue-500 mt-4 rounded-md text-white text-bold text-xl text-center py-3">
                          PayPal
                        </button>
                      </AccordionItem> */}
                    </Accordion>
                    {/* <button className="w-full bg-[#2F3132] mt-4 rounded-md text-white text-bold text-xl text-center py-3">
                      Pay Now
                    </button> */}

                    <input
                      type="submit"
                      value="Pay Now"
                      className="w-full bg-[#2F3132] mt-4 rounded-md text-white text-bold text-xl text-center py-3"
                    />
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>

        <div className="w-2/5 fixed h-screen right-0">
          <div className="w-[400px] ml-12">
            <div className="h-[450px] mt-3 bg-slate-100 rounded-md shadow-md overflow-y-scroll selectItems">
              {carts.map((cart) => (
                <div
                  key={cart.id}
                  className="flex justify-between items-center p-4 border-b-1"
                >
                  <div className="relative">
                    <img
                      src={cart.image1}
                      alt={cart.name}
                      className="w-20 h-20"
                    />
                    <div className="bg-slate-500 w-8 h-8 flex justify-center items-center absolute -top-3 -right-6 p-2 rounded-full">
                      <span className="text-white text-sm font-bold">
                        {cart?.quantity}
                      </span>
                    </div>
                  </div>

                  <div className="w-3/5">
                    <h2 className="text-slate-800 text-sm font-semibold">
                      {cart.title}
                    </h2>
                  </div>

                  <div className="flex flex-col items-center">
                    <p className="text-slate-500 text-sm font-semibold">
                      {cart.price * cart?.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-6">
              <input
                type="text"
                placeholder="Discount code or gift card"
                className="px-3 py-3 w-80 mt-3 rounded-md"
              />
              <button className="px-6 py-2.5 ml-3 mt-3 rounded-md bg-slate-300">
                Apply
              </button>
            </div>

            <div className="flex justify-between items-center mt-8">
              <span className="text-2xl">Total</span>

              <div>
                <span className="text-slate-500 text-sm mr-2">USD</span>
                <span className="text-2xl font-semibold text-black">
                  $ $ {subtotal.toFixed(2)}
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
