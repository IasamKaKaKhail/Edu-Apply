import { CSSProperties, type ReactNode } from "react";
import {
  Box,
  Card,
  CardContent,
  type SxProps,
  type Theme,
} from "@mui/material";

type Props = {
  children: ReactNode;
  style?: CSSProperties | undefined;
};

const cardBaseStyles: SxProps<Theme> | undefined = {
  boxShadow: "0px 0.2rem 1.8rem rgba(0, 0, 0, 0.06)",
  maxWidth: { xs: 475, lg: 600 },
  margin: { xs: 2.5, md: 3 },
  borderRadius: "1rem",
  "& > *": {
    flexGrow: 1,
    flexBasis: "50%",
  },
};

const AppCard = ({ children, ...other }: Props) => {
  return (
    <Card elevation={3} sx={cardBaseStyles} {...other}>
      <CardContent>
        <Box sx={{ p: { xs: 1, sm: 1.5, md: 2, xl: 2.5 } }}>{children}</Box>
      </CardContent>
    </Card>
  );
};

export default AppCard;
