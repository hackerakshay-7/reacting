
import { useEffect, useState } from "react";

// Custom hook
function usecurrencyinfo(currency) {
    let [data, setdata] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setdata(res[currency]));
    }, [currency]);

    console.log(data);
    return data;
}

export default usecurrencyinfo;
