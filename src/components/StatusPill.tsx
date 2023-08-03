import { SxProps, Theme } from "@mui/material";
import React from "react";
import { NameHeading } from "./AppText";
import { BulletsBlueDot, Row } from "./dashboard/styled";

type Props = {
  status: "New Lead";
  sx?: SxProps<Theme> | undefined;
};

const StatusPill = ({ status, sx }: Props) => {
  return (
    <Row
      sx={{
        paddingY: "1.2rem",
        backgroundColor: "#F4C277",
        borderRadius: "2.5rem",
        paddingLeft: "2rem",
        paddingRight: "2.5rem",
        ...sx,
      }}
    >
      <BulletsBlueDot sx={{ backgroundColor: "white" }} />
      <NameHeading
        sx={{ color: "white", fontWeight: 600 }}
      >{`Status : ${status}`}</NameHeading>
    </Row>
  );
};

export default StatusPill;
