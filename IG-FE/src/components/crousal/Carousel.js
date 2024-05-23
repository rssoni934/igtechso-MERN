import React, { useEffect, useState } from "react";
import "./carousel.css";

const SliderUtil = ({items, setItems}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Do something after the delay
      console.log("Timeout completed!");
      rotateRight();
      // Update the count
      setCount((prevCount) => prevCount + 1);
    }, 3000); // Delay of 1000 milliseconds (1 second)

    // Clear the timeout to prevent multiple timers
    return () => clearTimeout(timer);
  }, [count]);

  // const [items, setItems] = useState(imgData);

  const rotateLeft = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const firstItem = newItems.shift();
      newItems.push(firstItem);

      return newItems.map((item, index) => {
        if (index === 0) {
          return { ...item, className: "carousel__item carousel__item--left" };
        }
        if (index === 1) {
          return { ...item, className: "carousel__item carousel__item--main" };
        }
        if (index === 2) {
          return { ...item, className: "carousel__item carousel__item--right" };
        }
        return { ...item, className: "carousel__item" };
      });
    });
  };

  const rotateRight = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const lastItem = newItems.pop();
      newItems.unshift(lastItem);

      return newItems.map((item, index) => {
        if (index === 0) {
          return { ...item, className: "carousel__item carousel__item--left" };
        }
        if (index === 1) {
          return { ...item, className: "carousel__item carousel__item--main" };
        }
        if (index === 2) {
          return { ...item, className: "carousel__item carousel__item--right" };
        }
        return { ...item, className: "carousel__item" };
      });
    });
  };

  return (
    <div className="carousel">
      {console.log("items",items)}
      {items.map((item, index) => (
        <div key={index} className={item.className}>
          <img src={item.src} alt={`carousel_${index}`} />
        </div>
      ))}
    </div>
  );
};

export default SliderUtil;
