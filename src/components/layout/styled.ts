import { Box, styled } from "@mui/material";

/////////Authlayout start////////////////////
export const Container = styled(Box)(() => ({
  display: "flex",
  minHeight: "100vh",
}));

export const LeftContainer = styled(Box)(() => ({
  flex: 0.5,
  position: "relative",
  backgroundColor: "#64A7FC",
}));

export const RightWrapper = styled(Box)(() => ({
  alignItems: "center",
  justifyContent: "center",
}));
/////////Authlayout end////////////////////

///////////Admin Layout start//////////////
export const AdminLayoutContainer = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "max-content auto",
  gap: 0,
  gridTemplateAreas: `"sidebar header"
                      "sidebar main"`,
  gridTemplateRows: "10rem auto",
}));

export const SideBar = styled(Box)(() => ({
  gridArea: "sidebar",
  minHeight: "100vh",
  height: "100rem",
  // minWidth: "10rem",
  borderTopRightRadius: "1rem",
  borderBottomRightRadius: "1rem",
  borderRight: "1px solid #EBEBEB",
  // border: "1px solid #EBEBEB",
  boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  position: "sticky",
  alignSelf: "start",
  top: "0rem",
  zIndex: 199,
  paddingTop: "2.8rem",
  // paddingInline: "2.2rem",
  paddingLeft: "2.2rem",
  paddingRight: "2.2rem",
}));

export const Header = styled(Box)(() => ({
  gridArea: "header",
  borderBottomRightRadius: "1rem",
  borderBottom: "1px solid #EBEBEB",
  boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
  display: "flex",
  alignItems: "center",
  paddingLeft: "2.5rem",
  position: "sticky",
  alignSelf: "start",
  top: "0rem",
  minHeight: "10rem",
  backgroundColor: "#fff",
  zIndex: 150,
}));

export const Main = styled(Box)(() => ({
  gridArea: "main",
  // padding: "2.5rem",
}));
//////////////Admin Layout end ////////////
