import PropTypes from "prop-types";
import { useGetTransitionByIdQuery } from "../services/transitionAPI";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Image, Input, Spinner, Textarea } from "@nextui-org/react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import TransitionReport from "./TransitionReport ";

function ViewTransition({ mode }) {
  const { id } = useParams();
  const navigateTo = useNavigate();
  const { data, isLoading } = useGetTransitionByIdQuery(id, {
    skip: !id,
  });

  return (
    <>
      <h1 className="text-xl sm:text-md font-bold text-slate-600">
        Transition -{mode}
      </h1>

      {isLoading && (
        <Spinner
          size="lg"
          className="flex justify-center items-center w-full h-screen absolute top-0 bottom-0 right-0 left-0"
        />
      )}

      <div className="my-6">
        {data?.length > 0 &&
          data.map((info) => (
            <>
              <div className="flex justify-between items-center w-3/4">
                <span className="text-md font-bold uppercase mb-3 text-slate-600">
                  {(info?.user?.firstName || "").concat(
                    " ",
                    info?.user?.lastName || ""
                  )}
                </span>
                <div>
                  <Button
                    onClick={() => navigateTo("/adminpanel/transitions")}
                    className="bg-[#414649] text-background mr-6"
                    size="md"
                  >
                    Back
                  </Button>

                  <PDFDownloadLink
                    document={<TransitionReport data={info} />}
                    fileName="transition_report.pdf"
                  >
                    {({ loading }) => (
                      <Button
                        color="primary"
                        variant="ghost"
                        size="md"
                        className="hover:text-white text-[#414649]"
                      >
                        {loading ? "Generating PDF..." : "Report"}
                      </Button>
                    )}
                  </PDFDownloadLink>
                </div>
              </div>

              <div className="px-4 py-3 mt-4 w-3/4 bg-slate-100 rounded-md shadow-md">
                <h4 className="text-lg font-semibold mb-4 text-slate-600">
                  Customer Shipping Info
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <Input
                    isReadOnly
                    type="text"
                    label="Region"
                    variant="bordered"
                    defaultValue={info?.shippingInfo?.region}
                    className="max-w-xs"
                    labelPlacement="outside"
                  />

                  <Input
                    isReadOnly
                    type="text"
                    label="Address"
                    variant="bordered"
                    defaultValue={info?.shippingInfo?.address}
                    className="max-w-xs"
                    labelPlacement="outside"
                  />

                  <Input
                    isReadOnly
                    type="text"
                    label="Apartment"
                    variant="bordered"
                    defaultValue={info?.shippingInfo?.apartment}
                    className="max-w-xs"
                    labelPlacement="outside"
                  />

                  <Input
                    isReadOnly
                    type="text"
                    label="City"
                    variant="bordered"
                    defaultValue={info?.shippingInfo?.city}
                    className="max-w-xs"
                    labelPlacement="outside"
                  />

                  <Input
                    isReadOnly
                    type="text"
                    label="PostalCode"
                    variant="bordered"
                    defaultValue={info?.shippingInfo?.postalCode}
                    className="max-w-xs"
                    labelPlacement="outside"
                  />

                  <Input
                    isReadOnly
                    type="text"
                    label="PhoneNumber"
                    variant="bordered"
                    defaultValue={info?.shippingInfo?.phoneNumber}
                    className="max-w-xs"
                    labelPlacement="outside"
                  />
                </div>
              </div>

              <div className="px-4 py-3 mt-8 w-3/4 bg-slate-100 rounded-md shadow-md">
                <h4 className="text-lg font-semibold mb-4 text-slate-600">
                  Customer Payment
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <Input
                    isReadOnly
                    type="text"
                    label="CardNumber"
                    variant="bordered"
                    defaultValue={info?.payment?.cardNumber}
                    className="max-w-xs"
                    labelPlacement="outside"
                  />

                  <Input
                    isReadOnly
                    type="text"
                    label="Address"
                    variant="bordered"
                    defaultValue={info?.payment?.expDate}
                    className="max-w-xs"
                    labelPlacement="outside"
                  />

                  <Input
                    isReadOnly
                    type="text"
                    label="Apartment"
                    variant="bordered"
                    defaultValue={info?.payment?.securityCode}
                    className="max-w-xs"
                    labelPlacement="outside"
                  />

                  <Input
                    isReadOnly
                    type="text"
                    label="City"
                    variant="bordered"
                    defaultValue={info?.payment?.nameOnCard}
                    className="max-w-xs"
                    labelPlacement="outside"
                  />
                </div>
              </div>

              <div className="px-4 py-3 mt-8 w-3/4 border-b-2 mb-12 border-b-slate-500 bg-slate-100 rounded-md shadow-md">
                <h4 className="text-lg font-semibold mb-4 text-slate-600">
                  Customer Products
                </h4>
                <div>
                  {info?.purchasedProductLists?.map((item) => (
                    <>
                      <div className="flex mb-6 w-full">
                        <Image
                          isZoomed
                          width={240}
                          alt="NextUI Fruit Image with Zoom"
                          src={item?.product.image1}
                        />
                        <Image
                          isZoomed
                          width={240}
                          className="ml-8"
                          alt="NextUI Fruit Image with Zoom"
                          src={item?.product.image2}
                        />
                      </div>
                      <div key={item.id} className="grid grid-cols-3 gap-4">
                        <Input
                          isReadOnly
                          type="text"
                          label="Name"
                          variant="bordered"
                          defaultValue={item?.product?.name}
                          className="max-w-xs"
                          labelPlacement="outside"
                        />
                        <Input
                          isReadOnly
                          type="text"
                          label="Category"
                          variant="bordered"
                          defaultValue={item?.product?.category?.name}
                          className="max-w-xs"
                          labelPlacement="outside"
                        />
                        <Input
                          isReadOnly
                          type="text"
                          label="Price"
                          variant="bordered"
                          defaultValue={item?.product?.price}
                          className="max-w-xs"
                          labelPlacement="outside"
                        />
                        <Input
                          isReadOnly
                          type="text"
                          label="Price"
                          variant="bordered"
                          defaultValue={item?.product?.price}
                          className="max-w-xs"
                          labelPlacement="outside"
                        />
                        <Input
                          isReadOnly
                          type="text"
                          label="Stock"
                          variant="bordered"
                          defaultValue={item?.product?.stock}
                          className="max-w-xs"
                          labelPlacement="outside"
                        />

                        <Input
                          isReadOnly
                          type="text"
                          label="Quantity"
                          variant="bordered"
                          defaultValue={item?.qty}
                          className="max-w-xs"
                          labelPlacement="outside"
                        />

                        <Textarea
                          isReadOnly
                          label="Description"
                          variant="bordered"
                          labelPlacement="outside"
                          placeholder="Enter your description"
                          defaultValue={item?.product?.description}
                          className="max-w-xs"
                        />
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}

ViewTransition.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default ViewTransition;
