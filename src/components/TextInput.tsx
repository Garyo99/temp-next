import { useState } from "react";

const TextInput = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label="Text Input"
      />
      Your Text: {value}
    </div>
  );
};

export default TextInput;
