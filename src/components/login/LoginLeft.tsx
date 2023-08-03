import { IMAGES, SVGS } from "@/utils";
import { Box, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  ContainerLoginLeft,
  imageWraperBgAuth,
  imageWrapperAside,
} from "./styles";

const LoginLeft = () => {
  const theme = useTheme();
  return (
    <ContainerLoginLeft sx={{ display: [null, `none`, `flex`, null, null] }}>
      <Box sx={imageWraperBgAuth}>
        <Image
          src={SVGS.bgAuth}
          alt="auth bg aside"
          fill
          style={{ backgroundColor: theme.palette.primary.main }}
        />
      </Box>
      <Box sx={imageWrapperAside}>
        <Image
          src={IMAGES.authAside}
          alt="aside auth humane"
          fill
          style={{ aspectRatio: 1, objectFit: `contain` }}
        />
      </Box>
    </ContainerLoginLeft>
  );
};

export default LoginLeft;
