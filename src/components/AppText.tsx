import { styled, Typography } from "@mui/material";

export const AppText = styled(Typography)(() => ({
  fontSize: "1.8rem",
  lineHeight: "2.4rem",
  fontWeight: 400,
  color: "#111111",
}));

export const Heading = styled(Typography)(() => ({
  fontSize: "2.6rem",
  lineHeight: "3.5rem",
  fontWeight: 600,
  color: "#111",
}));

export const SubHeading = styled(Typography)(() => ({
  fontSize: "2.1rem",
  lineHeight: "3rem",
  fontWeight: 600,
  color: "#111111",
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: "3.4rem",
  lineHeight: "4.6rem",
  fontWeight: 700,
  color: theme.palette.primary.main,
}));

export const PageTitleText = styled(Typography)(({ theme }) => ({
  fontSize: "2.2rem",
  lineHeight: "3rem",
  fontWeight: 600,
  color: theme.palette.primary.main,
}));

export const SubTitle = styled(Typography)(() => ({
  fontSize: "1.8rem",
  lineHeight: "2.4rem",
  fontWeight: 400,
  color: "#BBBBC7",
}));

export const NameHeading = styled(Typography)(() => ({
  fontSize: "2rem",
  lineHeight: "2.7rem",
  fontWeight: 500,
  color: "#111111",
}));

export const PlaceholderText = styled(Typography)(() => ({
  fontSize: "1.6rem",
  lineHeight: "2.1rem",
  fontWeight: 400,
  color: "#BBBBC7",
}));

export const SidebarMenuText = styled(Typography)(() => ({
  fontSize: "2rem",
  lineHeight: "2.7rem",
  fontWeight: 500,
  color: "#BBBBC7",
  paddingRight: "1.4rem",
  transition: "all 0.3s ease-in-out",
  overflow: "hidden",
  whiteSpace: "nowrap",
}));

export const InfoTagText = styled(Typography)(() => ({
  fontSize: "1.8rem",
  lineHeight: "2.4rem",
  fontWeight: 500,
  color: "#111111",
}));

export const TitleBanner = styled(Typography)(() => ({
  fontSize: "3.6rem",
  lineHeight: "4.9rem",
  fontWeight: 700,
  color: "#fff",
}));

export const SubtitleBanner = styled(Typography)(() => ({
  fontSize: "2.4rem",
  lineHeight: "3.2rem",
  fontWeight: 400,
  color: "#fff",
}));
