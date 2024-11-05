import { useState } from 'react';

export const useFilters = (initialState) => {
  const [filters, setFilters] = useState(initialState);

  const changeFilter = (key, value) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return {filters, changeFilter};
};
