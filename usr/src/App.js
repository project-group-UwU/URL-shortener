import React, { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.naver.com");
        const data = await response.text();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>
        Fetching data from Naver.com. Check the console for the response body.
      </p>
    </div>
  );
};

export default MyComponent;
