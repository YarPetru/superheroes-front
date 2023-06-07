import { useMemo } from 'react';

const useTrimFields = () => {
  return useMemo(
    () => values => {
      return Object.keys(values).reduce((acc, key) => {
        acc[key] = values[key].trim();
        return acc;
      }, {});
    },
    []
  );
};

export default useTrimFields;
