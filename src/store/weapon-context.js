import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const WeaponsUrl = "https://valorant-api.com/v1/weapons";

const WeaponContext = React.createContext();

export function useWeaponCtx() {
  return useContext(WeaponContext);
}

export default function WeaponContextProvider(props) {
  const [weapons, setWeapons] = useState([]);
  useEffect(() => {
    axios
      .get(WeaponsUrl)
      .then((res) => setWeapons(res.data.data))
      .catch((err) => alert(err));
  }, []);

  const value = { weapons };
  return (
    <WeaponContext.Provider value={value}>
      {props.children}
    </WeaponContext.Provider>
  );
}
