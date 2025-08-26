import React, { useEffect, useState } from "react";

const RandomQut = () => {

  const [quote,setQuote] = useState("");

  const randomgen = async () => {
    try {
      const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: {
          "X-Api-Key": import.meta.env.VITE_API_KEY,
        },
      });
      const data = await res.json();
      setQuote(data?.[0]?.quote);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    randomgen();
  }, []);
  return (
    <div className="quote">
      {quote}
    </div>
  )
};

export default RandomQut;

