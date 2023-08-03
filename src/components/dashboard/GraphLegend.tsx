import { Box } from "@mui/material";
import React from "react";
import { AppText } from "../AppText";
import { ColorDot } from "./Seperator";

type Props = {
  title: string;
  color: string;
};

export const GraphLegend = ({ title, color }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <ColorDot color={color} />
      <AppText sx={{ fontSize: "1.6rem", lineHeight: "2.18rem" }}>
        {title}
      </AppText>
    </Box>
  );
};
