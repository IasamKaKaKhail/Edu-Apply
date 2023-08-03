import { Nunito } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import type {} from "@mui/x-date-pickers/themeAugmentation";

export const nunito = Nunito({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: [
    "Roboto",
    "-apple-system",
    "Helvetica",
    "Ubuntu",
    "Arial",
    "sans-serif",
  ],
});

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(70, 146, 254)",
      "100": "rgba(70, 146, 254, 0.1)",
      "200": "rgba(70, 146, 254, 0.2)",
      "50": "rgba(70, 146, 254, 0.5)",
      "900": "rgba(70, 146, 254, 0.9)",
      "700": "rgba(70, 146, 254, 0.7)",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    // action: {
    //     active: '#6B7280',
    //     focus: 'rgba(55, 65, 81, 0.12)',
    //     hover: 'rgba(55, 65, 81, 0.04)',
    //     selected: 'rgba(55, 65, 81, 0.08)',
    //     disabledBackground: 'rgba(55, 65, 81, 0.12)',
    //     disabled: 'rgba(55, 65, 81, 0.26)'
    // },
    // background: {
    //     default: '#F9FAFC',
    //     paper: '#FFFFFF'
    // },
    // divider: '#E6E8F0',
  },
  typography: {
    fontFamily: nunito.style.fontFamily,
    fontSize: 25,
  },
});

export const COLORS = {
  primary: "#4692FE",
};
