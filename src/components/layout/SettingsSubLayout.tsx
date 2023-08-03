import { Grid } from "@mui/material";
import Link from "next/link";
import React, { ReactElement } from "react";
import SettingsMenuButton from "../dashboard/SettingsMenuButton";

type Props = {
  children: ReactElement;
};

const SettingsSubLayout = ({ children }: Props) => {
  return (
    <Grid container height={"100%"}>
      <Grid
        zIndex={9}
        width={"25.7rem"}
        item
        sx={{
          border: "1px solid #EBEBEB",
          boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
          position: "sticky",
          alignSelf: "start",
          top: "10rem",
          height: "calc(100vh - 10rem)",
        }}
      >
        <Link href={"/dashboard/Settings"}>
          <SettingsMenuButton title="Account Settings" />
        </Link>
        <Link href={"/dashboard/PaymentSettings"}>
          <SettingsMenuButton title="Payment Settings" />
        </Link>
      </Grid>
      <Grid xs container>
        {children}
      </Grid>
    </Grid>
  );
};

export default SettingsSubLayout;
