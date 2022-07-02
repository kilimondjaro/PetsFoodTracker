import * as React from 'react';

export const useBooleanState = (
  value: boolean
): [boolean, () => void, () => void] => {
  const [isValueTrue, setValue] = React.useState(value);
  return [
    isValueTrue,
    React.useCallback(() => setValue(true), []),
    React.useCallback(() => setValue(false), []),
  ];
};
