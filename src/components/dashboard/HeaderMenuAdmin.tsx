import { LoggedInProfile } from "@/graphql";
import { useReactiveVar } from "@apollo/client";
import { Avatar, Box, Drawer } from "@mui/material";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { NameHeading, PlaceholderText } from "../AppText";
import NotificationDrawer from "./NotificationDrawer";
import { NotificationIcon, SettingsIcon } from "./Svgs";

const HeaderMenuAdmin = () => {
  const [openNotificationDrawer, setOpenNotificationDrawer] = useState(false);
  const profile = useReactiveVar(LoggedInProfile);
  return (
    <Fragment>
      <Drawer
        anchor={"right"}
        open={openNotificationDrawer}
        onClose={() => setOpenNotificationDrawer(false)}
        PaperProps={{
          sx: {
            borderTopLeftRadius: "0.7rem",
            borderBottomLeftRadius: "0.7rem",
          },
        }}
      >
        <NotificationDrawer />
      </Drawer>
      <Box sx={{ marginLeft: "auto", paddingRight: "3rem" }}>
        <Box sx={{ flexDirection: "row", display: "flex" }}>
          <Link href={"/dashboard/Settings"}>
            <SettingsIcon />
          </Link>
          <NotificationIcon
            sx={{ mx: "2rem" }}
            onClick={() => setOpenNotificationDrawer(true)}
          />
          <div
            style={{
              height: "5rem",
              width: "0.1rem",
              backgroundColor: "#BBBBC7",
              marginRight: "2rem",
            }}
          />
          <Avatar
            sx={{ width: "5rem", height: "5rem" }}
            src={`${profile?.photo}`}
          />
          <Box sx={{ flexDirection: "column", marginLeft: "2.4rem" }}>
            <NameHeading>{`${profile?.firstName || ""} ${
              profile?.lastName || ""
            }`}</NameHeading>
            <PlaceholderText>{`${profile?.email || ""}`}</PlaceholderText>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default HeaderMenuAdmin;
