import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import {
  Box,
  SxProps,
  Theme,
  SelectProps,
  Select as MUISelect,
  IconButton,
} from "@mui/material";
import { AppText } from "./AppText";
import { ArrowDownSvg } from "./dashboard/Svgs";

interface Props extends SelectProps {
  containerStyles?: SxProps<Theme> | undefined;
  titleStyle?: SxProps<Theme> | undefined;
  title?: string | undefined;
  options: any[];
}
export default function Select({
  containerStyles,
  titleStyle,
  title,
  sx,
  placeholder,
  options,
  ...props
}: Props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Box sx={containerStyles}>
      {title && (
        <AppText
          mb={"1rem"}
          sx={{
            fontSize: "1.8rem",
            fontWeight: 400,
            ...titleStyle,
          }}
        >
          {title}
        </AppText>
      )}
      <MUISelect
        onClick={() => setOpen(!open)}
        disableUnderline
        fullWidth
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        variant="standard"
        SelectDisplayProps={{
          style: {
            paddingTop: "1.3rem",
            paddingBottom: "1.5rem",
            backgroundColor: "#F5F7F9",
            color: "#111111",
            fontSize: "1.6rem",
            fontWeight: 400,
          },
        }}
        sx={{
          cursor: "pointer",
          color: "#111111",
          backgroundColor: "#F5F7F9",
          "::placeholder": { color: "red" },
          borderRadius: "0.8rem",
          paddingX: "2rem",
          // paddingY: "1.3rem",
          fontSize: "1.6rem",
          fontWeight: 400,
          border: "1px solid #EBEBEB",
          ...sx,
        }}
        MenuProps={{ sx: { maxHeight: "50rem" } }}
        IconComponent={() => (
          <IconButton
            onClick={() => setOpen(!open)}
            sx={{
              display: "flex",
              padding: "1rem",
              marginY: "1rem",
              alignItems: "center",
              justifyContent: "center",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <ArrowDownSvg stroke="#111" />
          </IconButton>
        )}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.label} value={option.label}>
            {option.label}
          </MenuItem>
        ))}
      </MUISelect>
    </Box>
  );
}
