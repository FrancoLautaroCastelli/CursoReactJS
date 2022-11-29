import React from "react";

function InputForm(props) {
  return (
    <>
    <div className="w-full max-w-xs">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{props.title}</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required={true}
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onInputChange}
      />
      </div>
      </div>
    </>
  );
}

export default InputForm;