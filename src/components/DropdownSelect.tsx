import {
  InputProps,
  Box,
  InputAdornment,
  IconButton,
  Popover,
  ButtonBase,
} from "@mui/material";
import React, { Ref, useRef, useState } from "react";
import { AppText, InfoTagText } from "./AppText";
import { SelectDropDownItem } from "./dashboard/styled";
import { ArrowDownSvg } from "./dashboard/Svgs";

interface Props extends InputProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  options: { id: string; filter: string }[];
  onClickBtn?: React.MouseEventHandler<HTMLButtonElement>;
  // sx?: SxProps<Theme> | undefined;
}

const MIN_WIDTH = "17.7rem";

export const DropdownSelect = (props: Props) => {
  const { selected, setSelected, options } = props;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const ref = useRef<Ref<HTMLDivElement>>(null);
  const [width, setWidth] = useState(MIN_WIDTH);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore
    setWidth(ref?.current?.offsetWidth || MIN_WIDTH);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "primary.main",
        alignItems: "center",
        // border: "1px solid #4692FE",
        borderRadius: "0.8rem",
        minWidth: MIN_WIDTH,
        minHeight: "5rem",
        boxShadow: "1px 5px 7px #4692FE66",
      }}
    >
      <ButtonBase
        onClick={props.onClickBtn}
        sx={{
          borderRadius: "0.8rem",
          height: "100%",
          alignItems: "center",
        }}
      >
        <AppText
          sx={{
            color: "white",
            display: "flex",
            paddingLeft: "2rem",
            paddingRight: "1rem",
          }}
        >
          {selected}
        </AppText>
      </ButtonBase>
      <InputAdornment
        aria-describedby={id}
        position="end"
        sx={{
          marginRight: "0px",
          padding: "0px",
          margin: 0,
          marginLeft: 0,
        }}
      >
        <IconButton
          aria-label="search"
          onClick={handleClick}
          // onMouseDown={}
          edge={"start"}
          sx={{
            transition: "all 0.3s ease-in-out",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <ArrowDownSvg stroke="#FFF" />
        </IconButton>
      </InputAdornment>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        sx={{
          boxShadow: "0px 2px 15px 0px #0000000F",
          border: "1px solid #EBEBEB",
          borderRadius: "0.6rem",
          marginTop: "0.2rem",
        }}
      >
        <Box sx={{ width: `${width}px` }}>
          {options?.length &&
            options.map((item) => (
              <SelectDropDownItem
                key={item?.id}
                onClick={() => {
                  setSelected(item?.filter);
                  handleClose();
                }}
                sx={{
                  backgroundColor:
                    selected === item.filter ? "#5C9FFD26" : "white",
                  borderLeft:
                    selected === item.filter ? "3px solid #4692FE" : "unset",
                }}
              >
                <InfoTagText
                  sx={{
                    color: selected === item.filter ? "primary.main" : "#111",
                  }}
                >
                  {item?.filter}
                </InfoTagText>
              </SelectDropDownItem>
            ))}
        </Box>
      </Popover>
    </Box>
  );
};
