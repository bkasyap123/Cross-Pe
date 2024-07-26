import Freecurrencyapi from "@everapi/freecurrencyapi-js";
import { useEffect, useState } from "react";
const freecurrencyapi = new Freecurrencyapi(import.meta.env.VITE_API_KEY);

function Converter() {
  const [currency, setCurrency] = useState("USD");
  const [currencyTwo, setCurrencyTwo] = useState("INR");
  const [send, setSend] = useState(1000);
  const [receive, setReceive] = useState(0);
  const [forex, setForex] = useState(0);

  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let today = (new Date().getDay() + 2) % 7;

  // const calculate = () => {
  useEffect(() => {
    freecurrencyapi
      .latest({
        base_currency: `${currency}`,
        currencies: `${currencyTwo}`,
      })
      .then((res) => {
        let amount = res.data[Object.keys(res.data)[0]];
        setForex(1 * amount);
        setReceive(send * amount);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [send]);
  // };

  return (
    <div className="border bg-white shadow-xl mx-4 mt-10 text-[14px] p-4 rounded-2xl sm:text-[18px]">
      <p className="text-sm mb-2 text-gray-900">You sent</p>
      <div className="flex items-center border-gray-300 rounded-lg border-2 mb-3">
        <input
          type="number"
          value={send}
          onChange={(e) => setSend(e.target.value)}
          className="w-full h-full bg-transparent rounded-lg outline-none px-3 py-2"
        />
        <select
          name="flag"
          id="flag"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="mr-2 w-[60px] p-1 sm:p-0 outline-none"
        >
          <option value="INR">INR - Indian Rupee</option>
          <option value="USD">USD - United States Dollar</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="EUR">EUR - Euro</option>
        </select>
      </div>
      <ul>
        <li className="flex justify-between items-center my-2">
          <strong className="opacity-75">0</strong>Bank transfer fee
        </li>
        <li className="flex justify-between items-center my-2">
          <strong className="opacity-75">{send * 0.03}</strong>Our fee
        </li>
        <li className="flex justify-between items-center my-2">
          <strong className="opacity-75">{send * 0.03}</strong>Total fee
        </li>
        <li className="flex justify-between items-center my-2">
          <strong className="opacity-75">
            {receive.toFixed(2) - send * 0.03}
          </strong>
          Total convertable
        </li>
        <li className="flex justify-between items-center my-2">
          <strong className="opacity-75">{forex.toFixed(2)}</strong>Conversion
          rate
        </li>
      </ul>
      <p className="text-sm my-2 text-gray-900">Recipient gets</p>
      <div className="flex items-center border-gray-300 rounded-lg border-2 mb-3">
        <input
          type="number"
          value={receive.toFixed(2)}
          onChange={(e) => setReceive(e.target.value)}
          className="w-full h-full bg-transparent rounded-lg outline-none px-3 py-2"
        />
        <select
          name="flag"
          id="flag"
          value={currencyTwo}
          onChange={(e) => setCurrencyTwo(e.target.value)}
          className="mr-2 w-[60px] p-1 outline-none sm:p-0"
        >
          <option value="INR">INR - Indian Rupee</option>
          <option value="USD">USD - United States Dollar</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="EUR">EUR - Euro</option>
        </select>
      </div>
      <p className="text-sm">
        Should arrive by&nbsp;
        <strong className="opacity-75">{weekDay[today]}</strong>
      </p>
      <button
        // onClick={calculate}
        className="border mt-4 w-full max-sm:w-full px-6 py-2 text-[16px] text-white font-semibold rounded-full"
      >
        Transfer Now
      </button>
    </div>
  );
}

export default Converter;
