import { Box } from "@mui/material";
import React from "react";
import { AppText } from "../AppText";

type Props = {
  name: string;
};

const AddItemNotice = ({ name }: Props) => {
  return (
    <Box
      width={"100%"}
      p={"4rem"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <AppText sx={{ textAlign: "center" }}>
        No {name} found add some {name} first
      </AppText>
    </Box>
  );
};

export default AddItemNotice;
