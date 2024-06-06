import { Select, SelectItem } from "@nextui-org/react";
import Flag from "react-world-flags";

const CurrencyFlags = () => {
  const currencies = [
    { code: "MMK", country: "MM" }, // Myanmar
    { code: "USD", country: "US" },
    { code: "EUR", country: "EU" },
    { code: "JPY", country: "JP" },
    { code: "SGD", country: "SG" }, // Singapore
    { code: "THB", country: "TH" }, // Thailand
    { code: "CNY", country: "CN" }, // China
    { code: "INR", country: "IN" }, // India
    { code: "AUD", country: "AU" }, // Australia
    { code: "VND", country: "VN" }, // Vietnam
    { code: "MYR", country: "MY" }, // Malaysia
    { code: "KRW", country: "KR" }, // Korea
  ];

  return (
    <div>
      <Select className="w-28">
        {currencies.map((currency) => (
          <SelectItem key={currency.code}>
            <div key={currency.code} className="w-10 h-8 flex items-center">
              <Flag code={currency.country} />
              <span className="ml-1.5">{currency.code}</span>
            </div>
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default CurrencyFlags;
