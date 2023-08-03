import { Box, Tooltip } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { SidebarMenuText } from "../AppText";
import MenuItem from "./MenuItem";
import { IconWrapper, MenuItemWrapper } from "./styled";
import { ArrowLeftIcon, LogoutIcon } from "./Svgs";

const SideBarMenuAdmin = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Box
      sx={{
        paddingTop: "4rem",
        alignItems: "center",
        justifyContent: "center",
        width: isCollapsed ? "30rem" : "7.5rem",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <MenuItem isCollapsed={isCollapsed} title="Home" link="/dashboard" />
      <MenuItem
        isCollapsed={isCollapsed}
        title="Search"
        link="/dashboard/Search"
      />
      <MenuItem
        isCollapsed={isCollapsed}
        title="Agent List"
        link="/dashboard/Agent"
      />
      <MenuItem
        isCollapsed={isCollapsed}
        title="Student List"
        link="/dashboard/Student"
      />
      <MenuItem
        isCollapsed={isCollapsed}
        title="University Manegment"
        link="/dashboard/University"
      />
      <MenuItem
        isCollapsed={isCollapsed}
        title="Payment"
        link="/dashboard/Payment"
      />
      <MenuItem
        isCollapsed={isCollapsed}
        title="Student Training"
        link="/dashboard/StudentTraining"
      />
      <MenuItem
        isCollapsed={isCollapsed}
        title="Event Page"
        link="/dashboard/Event"
      />
      {/* clear cache and logout */}
      <Tooltip
        disableInteractive
        title={!isCollapsed && "Log Out"}
        placement="right"
      >
        <Link
          href={"/"}
          style={{
            position: "absolute",
            bottom: "6rem",
            width: "60%",
          }}
        >
          <MenuItemWrapper>
            <LogoutIcon />
            {isCollapsed && <SidebarMenuText>Log Out</SidebarMenuText>}
          </MenuItemWrapper>
        </Link>
      </Tooltip>

      <IconWrapper
        onClick={() => setIsCollapsed(!isCollapsed)}
        sx={{
          transform: isCollapsed ? "rotate(-180deg)" : "rotate(0deg)",
          border: "1px solid #EBEBEB",
          boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
        }}
      >
        <ArrowLeftIcon />
      </IconWrapper>
    </Box>
  );
};

export default SideBarMenuAdmin;
