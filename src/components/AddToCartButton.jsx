// components/AddToCartButton.jsx
import React from "react";

const AddToCartButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
  >
    Add to Cart
  </button>
);

export default AddToCartButton;
