import { useState } from "react";

const useInput = (
  initialState: string | number,
  validator?: (value: string | number) => boolean
) => {
  const [value, setValue] = useState(initialState);
  const onChange = (event: any) => {
    const {
      target: { value },
    } = event;
    if (validator === undefined) {
      setValue(value);
    } else {
      const willdata = validator(value);
      if (willdata) {
        setValue(value);
      }
    }
    setValue(value);
  };

  return { value, onChange };
};

export default useInput;
