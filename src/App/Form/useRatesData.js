import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
    rates: {},
    date: "",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          "https://api.currencyapi.com/v3/latest?apikey=cur_live_Hv7zAJzrrZGXCW9ZlJNDgOIxE44vSwnXhN3bUwjw"
        );
        const { rates, date } = response.data;
        setRatesData({
          state: "success",
          rates,
          date,
        });
      } catch (error) {
        console.error("Błąd pobierania kursów walut:", error);
        setRatesData({
          state: "error",
          rates: {},
          date: "",
        });
      }
    };

    setTimeout(fetchRates, 1000);
  }, []);

  return ratesData;
};
