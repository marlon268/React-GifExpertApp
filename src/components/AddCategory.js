import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
   // Le agregamos un estado para saber lo que la persona esta escribiendo
   const [inputValue, setInputValue] = useState("");

   const handleInputChange = (e) => {
      setInputValue(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (inputValue.trim().length > 2) {
         setCategories((categories) => [inputValue, ...categories]);
         setInputValue("");
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="Busca tu Stiker"
            value={inputValue}
            onChange={handleInputChange}
         />
      </form>
   );
};

AddCategory.propTypes = {
   setCategories: PropTypes.func.isRequired,
};
