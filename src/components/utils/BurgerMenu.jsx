import React from "react";
import { TiArrowLeftOutline } from "react-icons/ti";
import { SiCoffeescript } from "react-icons/si";
export default function BurgerMenu({ show }) {
  return (
    <div className="burgerMenu duration-100 text-2xl">
      {show ? <TiArrowLeftOutline /> : <SiCoffeescript />}
    </div>
  );
}
