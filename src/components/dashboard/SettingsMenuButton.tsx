import { ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AppText } from "../AppText";

type Props = {
  title: "Payment Settings" | "Account Settings";
};

const SettingsMenuButton = ({ title }: Props) => {
  const [selectedRoute, setSelectedRoute] = useState<
    "Payment Settings" | "Account Settings"
  >("Account Settings");
  const { route } = useRouter();

  useEffect(() => {
    if (route.includes("/dashboard/PaymentSettings")) {
      setSelectedRoute("Payment Settings");
    } else if (route.includes("/dashboard/Settings")) {
      setSelectedRoute("Account Settings");
    }
  }, [route]);

  return (
    <ButtonBase
      sx={{
        width: "100%",
        bgcolor: title === selectedRoute ? "#EDF5FF" : "white",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <AppText
        sx={{
          transition: "all 0.3s ease-in-out",
          fontWeight: title === selectedRoute ? 600 : 500,
          fontSize: "1.8rem",
          lineHeight: "2.4rem",
          paddingY: "2.5rem",
          color: title === selectedRoute ? "#4692FE" : "#111111",
        }}
      >
        {title}
      </AppText>
    </ButtonBase>
  );
};

export default SettingsMenuButton;
