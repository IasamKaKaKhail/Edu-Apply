import { SVGS } from "@/utils";
import Image from "next/image";
import React from "react";
const AddIcon = () => {
  return (
    <Image
      src={SVGS.add}
      alt="edit profile photo"
      width={34}
      height={34}
      style={{
        backgroundColor: "#4692FE",
        width: "3.6rem",
        height: "3.6rem",
        borderRadius: "0.5rem",
      }}
    />
  );
};
export default AddIcon;
