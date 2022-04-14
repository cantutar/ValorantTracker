import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useMemo } from "react";

const WeaponsUrl = "https://valorant-api.com/v1/weapons";

const WeaponContext = React.createContext();

export function useWeaponCtx() {
  return useContext(WeaponContext);
}

export default function WeaponContextProvider(props) {
  const [weapons, setWeapons] = useState([]);
  const [weaponsImage, setWeaponsImage] = useState([]);
  const [weaponsName, setWeaponsName] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(WeaponsUrl)
        .then((res) => setWeapons(res.data.data))
        .catch((err) => alert(err));
    };
    fetch();
  }, []);
  useEffect(() => {
    setWeaponsImage(weapons.map((element) => element.killStreamIcon));
    setWeaponsName(weapons.map((element) => element.displayName));
  }, [weapons]);

  const value = { weapons, weaponsImage, weaponsName };
  return (
    <WeaponContext.Provider value={value}>
      {props.children}
    </WeaponContext.Provider>
  );
}
