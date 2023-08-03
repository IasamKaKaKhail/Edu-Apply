import { IMAGES } from "@/utils";
import {
  Avatar,
  Box,
  ButtonBase,
  Grid,
  styled,
  Typography,
} from "@mui/material";

export const IconWrapper = styled(ButtonBase)(() => ({
  width: "3rem",
  height: "3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease-in-out",
  borderRadius: "2rem",
  position: "absolute",
  bottom: "15.5rem",
  right: "-1.4rem",
  zIndex: 999,
  backgroundColor: "white",
}));

export const HeaderIconWrapper = styled(Box)(() => ({
  display: "flex",
  backgroundColor: "#F5F7F9",
  borderRadius: "5rem",
  width: "5rem",
  height: "5rem",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.35s ease-in-out, filter 0.35s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    transform: "scale3d(1.05, 1.05, 1)",
    filter: "invert(10%) brightness(105%)",
  },
}));

export const SidebarIconWrapper = styled(Box)(() => ({
  borderRadius: "0.6rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginLeft: "1rem",
  width: "5.6rem",
  height: "5.6rem",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.08)",
  },
}));

export const MenuItemWrapper = styled(Box)(() => ({
  borderRadius: "0.6rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "#fff",
  gap: "1rem",
  marginTop: "1rem",
  marginBottom: "1rem",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  transition: "filter 0.35s ease-in-out",
  "&:hover": {
    filter: "invert(10%) brightness(105%)",
  },
}));

export const NotificationDrwaerContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "70rem",
}));

export const GridBalanceTicker = styled(Grid)(() => ({
  backgroundImage: `url(${IMAGES.bgCardCircles}),linear-gradient(to right bottom, #63A3FF, #4692FE)`,
  backgroundSize: "cover",
  position: "relative",
  padding: "2rem",
  display: "flex",
  borderRadius: "0.8rem",
  alignItems: "center",
  justifyContent: "space-between",
  maxHeight: "13rem",
  maxWidth: "42rem !important",
  minWidth: "30rem",
  border: "1px solid #EBEBEB",
  boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
}));

export const TickerIconWrapper = styled(Box)(() => ({
  width: "8rem",
  height: "8rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#4692FE1A",
  borderRadius: "4rem",
}));

export const BorderBoxView = styled(ButtonBase)(() => ({
  flexDirection: "row",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingTop: "1.2rem",
  paddingBottom: "1.2rem",
  paddingRight: "2rem",
  paddingLeft: "2rem",
  width: "50rem",
  borderRadius: "0.8rem",
  marginTop: "1rem",
  border: "1px solid #EBEBEB",
  boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
}));

export const IconStyles: React.CSSProperties = {
  aspectRatio: 1,
  objectFit: "contain",
  width: "2.4rem",
  height: "2.4rem",
  marginRight: "1.2rem",
};

export const BadgeIconStyles: React.CSSProperties = {
  aspectRatio: 1,
  objectFit: "contain",
  backgroundColor: "#4692FE",
  padding: "0.8rem",
  width: "3.4rem",
  height: "3.4rem",
};

export const SettingsPageContainer = styled(Grid)(() => ({
  display: "flex",
  borderRadius: "0.8rem",
  flexDirection: "column",
  margin: "2.5rem",
  border: "1px solid #EBEBEB",
  boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
}));

export const SettingsPageHeaderWrapper = styled(Grid)(() => ({
  paddingTop: "2rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const BankDetailWrapper = styled(Grid)(() => ({
  border: "1px solid #EBEBEB",
  boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
  marginLeft: "2rem",
  marginRight: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "2rem",
  borderRadius: "0.8rem",
  marginTop: "1rem",
  paddingBottom: "2.5rem",
  marginBottom: "10rem",
}));

export const PaymentCardsContainer = styled(Grid)(() => ({
  border: "1px solid #EBEBEB",
  boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "2rem",
  borderRadius: "0.8rem",
  margin: "1rem",
  marginLeft: "2rem",
  marginRight: "2rem",
}));

export const PaymentCardsWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
}));

export const PaymentToggleView = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.2rem",
}));

export const PaymentCardEditView = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
}));

export const BankInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flex: 1,
  flexWrap: "wrap",
  columnGap: "8rem",
}));

export const SelectDropDownItem = styled(ButtonBase)(() => ({
  width: "100%",
  display: "flex",
  paddingTop: "1.2rem",
  paddingBottom: "1.2rem",
  justifyContent: "flex-start",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  borderLeft: "3px solid #4692FE",
  backgroundColor: "#5C9FFD26",
  transition: "all 0.35s ease-in-out",
  "&:hover": {
    backgroundColor: "#5C9FFD16",
  },
}));

export const SwitchInputPlaceholder = styled(Typography)(({ theme }) => ({
  fontSize: "1.8rem",
  fontWeight: 500,
  color: theme.palette.primary.main,
  display: "flex",
  minWidth: "10rem",
  textAlign: "center",
  justifyContent: "center",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  textTransform: "capitalize",
}));

export const VrLine = styled("div")(() => ({
  height: "3rem",
  width: "0.1rem",
  backgroundColor: "#EBEBEB",
  marginLeft: "2rem",
}));

export const HrLine = styled("div")(() => ({
  height: "1px",
  width: "100%",
  backgroundColor: "#EBEBEB",
}));

export const BulletsBlueDot = styled("div")(() => ({
  height: "0.8rem",
  width: "0.8rem",
  backgroundColor: "#4692FE",
  borderRadius: "0.4rem",
}));

export const Row = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "0.8rem",
  alignItems: "center",
}));

export const Col = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
}));

export const UploadFileWrapper = styled(Box)(() => ({
  border: "2px dashed #4692FE",
  backgroundColor: "#4692FE0D",
  padding: "6rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "3rem",
}));

export const ProfileBanner = styled(Box)(() => ({
  backgroundImage: `url(${IMAGES.bannerCircles}),linear-gradient(to right bottom, #63A3FF, #4692FE)`,
  backgroundSize: "contain",
  position: "relative",
  // padding: "2rem",
  display: "flex",
  borderRadius: "0.8rem",
  alignItems: "center",
  height: "13.4rem",
  justifyContent: "space-between",
  // maxHeight: "13rem",
  // maxWidth: "42rem !important",
  // minWidth: "30rem",
  // border: "1px solid #EBEBEB",
  boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
}));

export const AvatarProfile = styled(Avatar)(() => ({
  width: "16rem",
  height: "16rem",
  borderRadius: "8rem",
  position: "absolute",
  top: "1.5rem",
  left: "2.5rem",
  padding: "0.03rem",
  // boxShadow: '0px 2px 10px 0px #0000001A',
  // backgroundColor: 'red',
  // padding: '0.3rem',
  // backgroundImage: `url("data:image/svg+xml,%3csvg width='100% 25' height='100 % 25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='white' stroke-width='0.3rem' stroke-dasharray='6%2c6' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e")`,
  // padding: '0.3rem',
}));
export const AvatarBorder = styled(Box)(() => ({
  width: "16rem",
  height: "16rem",
  borderRadius: "8rem",
  position: "absolute",
  top: "1.5rem",
  left: "2.5rem",
  backgroundColor: "transparent",
  boxShadow: "0px 2px 10px 0px #0000001A",
  backgroundImage: `url("data:image/svg+xml,%3csvg width='100% 25' height='100 % 25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='white' stroke-width='0.3rem' stroke-dasharray='6%2c6' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e")`,
}));

export const TabMenuButton = styled(ButtonBase)(() => ({
  maxWidth: "27.4rem",
  height: "8.4rem",
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease-in-out",
  border: "0.1rem solid #EBEBEB",
  marginBottom: "2.5rem",
  boxShadow: "0px 2px 15px 0px #0000000F",
  borderLeft: 0,
  borderRadius: "0px 6px 6px 0px",
  position: "relative",
  boxSizing: "border-box",
}));

export const TabMenuButtonLeftBorder = styled(Box)(({ theme }) => ({
  width: "0.5rem",
  height: "8.4rem",
  position: "absolute",
  backgroundColor: theme.palette.primary.main,
  left: 0,
}));

export const ProfileDetailWrapper = styled(Box)(() => ({
  display: "flex",
  flex: 1,
  paddingTop: "2rem",
  paddingLeft: "2rem",
  border: "1px solid #EBEBEB",
  boxShadow: "0px 2px 15px 0px #0000000F",
  borderRadius: "0.8rem",
  flexDirection: "column",
  paddingBottom: "3rem",
}));

export const GridContainer = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "calc(100vh - 10rem)",
  padding: "2.5rem",
  paddingTop: "2rem",
  minWidth: "150rem",
}));

export const TableContainerHeader = styled(Grid)(({ theme }) => ({
  border: "1px solid #EBEBEB",
  boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
  padding: "1.4rem",
  paddingLeft: "1.9rem",
  display: "flex",
  flex: 1,
  backgroundColor: theme.palette.primary.main,
  borderTopLeftRadius: "0.8rem",
  borderTopRightRadius: "0.8rem",
}));

export const TableRowItem = styled(Grid)(() => ({
  border: "1px solid #EBEBEB",
  boxShadow: "0rem 0.2rem 1.5rem 0rem #0000000F",
  padding: "1.4rem",
  display: "flex",
  flex: 1,
  alignItems: "center",
  backgroundColor: "white",
  marginTop: "2.4rem",
  overflowWrap: "anywhere",
  paddingLeft: "1.9rem",
}));

export const TableFooter = styled(Box)(() => ({
  display: "flex",
  flex: 1,
  border: "1px solid #EBEBEB",
  boxShadow: "0rem 0.2rem 1.5rem 0rem #0000000F",
  alignItems: "center",
  marginTop: "2.4rem",
  padding: "1.8rem",
  justifyContent: "space-between",
}));

export const TableContainer = styled(Grid)(() => ({
  border: "1px solid #EBEBEB",
  boxShadow: "0rem 0.2rem 1.5rem 0rem #0000000F",
  marginLeft: "2.5rem",
  marginRight: "2.5rem",
  marginTop: "1.6rem",
  borderRadius: "0.8rem",
  backgroundColor: "white",
  marginBottom: "4rem",
}));

export const Card = styled(Box)(() => ({
  border: "1px solid #EBEBEB",
  boxShadow: "0px 2px 15px 0px #0000000F",
  borderRadius: "0.8rem",
  padding: "2.4rem",
}));

export const UniTypeIconWrapper = styled(ButtonBase)(() => ({
  width: "7.4rem",
  height: "7.4rem",
  borderRadius: "5rem",
  border: "0.4rem solid white",
  alignItems: "center",
  backgroundColor: "#EDF5FF",
  justifyContent: "center",
}));
