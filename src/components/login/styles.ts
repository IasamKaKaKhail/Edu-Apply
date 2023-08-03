import { Box, styled, SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";

export const AuthContainerRight = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "60px",
}));

export const imageWraperBgAuth: SxProps<Theme> = {
  position: "absolute",
  width: "100%",
  height: "100%",
};

export const imageWrapperCurvBottom: SxProps<Theme> = {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flex: 1,
  alignItems: "flex-end",
  justifyContent: "flex-end",
};

export const imageWrapperAside: SxProps<Theme> = {
  alignSelf: "center",
  justifySelf: "center",
  height: "65%",
  width: "65%",
  position: "relative",
  top: 80,
  marginLeft: "auto",
  marginRight: "auto",
};

export const imageWrapperShadow: SxProps<Theme> = {
  position: "absolute",
  width: "50%",
  height: "33%",
  bottom: "10%",
};

export const otpInputStyles: CSSProperties = {
  height: "5.8rem",
  width: "5.8rem",
  marginRight: "1.5rem",
  border: "unset",
  color: "#BBBBC7",
  backgroundColor: "#EDF5FF",
  borderRadius: "0.8rem",
  fontWeight: 500,
  fontSize: "2rem",
  lineHeight: "2.7rem",
};

export const cardWrapper: React.CSSProperties = {
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  position: "relative",
};

export const CardFooter = styled(Box)(() => ({
  position: "absolute",
  bottom: "4rem",
  width: "100%",
  left: 2.5,
  paddingInline: "8rem",
}));

export const ContainerLoginLeft = styled(Box)(() => ({
  flex: 0.5,
  position: `relative`,
  // backgroundColor: `#64A7FC`,
  backgroundColor: "red",
}));
