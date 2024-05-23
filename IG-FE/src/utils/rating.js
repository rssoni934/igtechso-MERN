import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

export default function Rating({ maxStar = 5, selectedStar = 0 }) {
  return (
    <div>
      {[...Array(maxStar)].map((_, index) =>
        selectedStar >= index+1 ? <FaStar /> : <CiStar />
      )}
    </div>
  );
}
