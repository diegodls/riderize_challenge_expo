import React from "react";
import { TouchableOpacity } from "react-native";
import { GearIcon } from "../../../assets/svg/icons/GearIcon";
//import { styles } from "./styles";

function ConfigButton() {
  return (
    <>
      <TouchableOpacity>
        <GearIcon />
      </TouchableOpacity>
    </>
  );
}

export { ConfigButton };
