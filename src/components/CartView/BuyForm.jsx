import React, { useState } from "react";
import InputForm from "./ImputForm";

export default function BuyForm(props) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });


  function onInputChange(evt) {
    const inputName = evt.target.name;
    const value = evt.target.value;

    const newUserData = { ...userData };
    newUserData[inputName] = value;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    props.onSubmit(userData);
  }

  return (
    
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
     
        <InputForm
            required="true"
            title="Nombre"
            name="name"
            value={userData.name}
            onInputChange={onInputChange}
        />
        <InputForm
            required="true"
            title="Email"
            name="email"
            value={userData.email}
            onInputChange={onInputChange}
        />
        <InputForm
            required="true"
            title="Teléfono"
            name="phone"
            value={userData.phone}
            onInputChange={onInputChange}
        />
        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={onSubmit}>Enviar datos</button>
     
    </form>
   
  );
}