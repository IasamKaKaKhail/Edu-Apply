import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  text: string;
  my?: string | number;
};

const HorizentalLineText = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        my: props.my,
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        marginX: "auto",
      }}
    >
      <div style={{ flex: "1", height: "1px", backgroundColor: "#EBEBEB" }} />
      <Typography fontSize={"1.8rem"} px={3} color={"#BBBBC7"}>
        {props.text}
      </Typography>
      <div style={{ flex: "1", height: "1px", backgroundColor: "#EBEBEB" }} />
    </Box>
  );
};

export default HorizentalLineText;
