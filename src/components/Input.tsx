import {
  Input as MuiInput,
  InputProps,
  Box,
  SxProps,
  Theme,
  InputAdornment,
  IconButton,
  Popover,
} from "@mui/material";
import React, { Fragment } from "react";
import { AppText, InfoTagText, SubHeading } from "./AppText";
import {
  SelectDropDownItem,
  SwitchInputPlaceholder,
  VrLine,
} from "./dashboard/styled";
import { ArrowDownSvg, SearchSvg } from "./dashboard/Svgs";

interface Props extends InputProps {
  title?: string;
  errorText?: string | undefined;
  touched?: boolean | undefined;
  sx?: SxProps<Theme> | undefined;
  titleStyle?: SxProps<Theme> | undefined;
  inputStyles?: SxProps<Theme> | undefined;
}

const Input = (props: Props) => {
  const {
    title,
    sx,
    titleStyle,
    errorText,
    touched,
    inputStyles,
    ...inputProps
  } = props;
  return (
    <Box sx={sx}>
      {title && (
        <SubHeading mb={"1rem"} sx={titleStyle}>
          {title}
        </SubHeading>
      )}
      <MuiInput
        disableUnderline
        fullWidth
        sx={{
          color: "#111111",
          backgroundColor: "#EDF5FF9E",
          "::placeholder": { color: "#BBBBC7" },
          borderRadius: "0.8rem",
          paddingX: "2rem",
          paddingY: "1.4rem",
          fontSize: "2rem",
          ...inputStyles,
        }}
        error={Boolean(touched && errorText)}
        {...inputProps}
      />
      <AppText
        sx={{
          color: touched && errorText ? "error.main" : "transparent",
          lineHeight: "1.5rem",
          fontSize: "1.2rem",
        }}
      >
        {touched && errorText ? errorText : "e"}
      </AppText>
    </Box>
  );
};

export default Input;

interface PropsSearchInputOutline extends InputProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filterOptions: { id: string; filter: string }[];
  inputStyles?: SxProps<Theme> | undefined;
  onChangeValue?: (value: string) => void;
}

export const SearchInputOutline = (props: PropsSearchInputOutline) => {
  const {
    title,
    sx,
    filter,
    setFilter,
    filterOptions,
    inputStyles,
    onChangeValue,
    ...inputProps
  } = props;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box sx={{ display: "flex", width: "100%", maxWidth: "50.2rem" }}>
      <MuiInput
        disableUnderline
        fullWidth
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChangeValue && onChangeValue(event.target.value);
        }}
        placeholder={filter ? `Search by ${filter}` : `Search by Course`}
        sx={{
          color: "#111111",
          "::placeholder": { color: "#BBBBC7" },
          borderRadius: "0.8rem",
          fontSize: "1.8rem",
          fontWeight: 500,
          lineHeight: "2.4rem",
          border: "1px solid #EBEBEB",
          height: "4.6rem",
          boxShadow: "0px 2px 15px 0px #0000000F",
          overflow: "hidden",
          // display: 'flex',
          // width: '30rem',
          // alignItems: 'center',
          ...inputStyles,
        }}
        startAdornment={
          <InputAdornment position="start" sx={{ marginRight: "1.5rem" }}>
            <IconButton
              aria-label="search"
              // onClick={}
              // onMouseDown={}
              edge={"end"}
            >
              <SearchSvg />
            </IconButton>
          </InputAdornment>
        }
        endAdornment={
          <Fragment>
            <Box display={"flex"} alignItems={"center"}>
              <VrLine />
              <SwitchInputPlaceholder>{filter}</SwitchInputPlaceholder>
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
                  <ArrowDownSvg stroke="#111" />
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
                }}
              >
                <Box sx={{ width: "17rem" }}>
                  {filterOptions?.length &&
                    filterOptions.map((item) => (
                      <SelectDropDownItem
                        key={item?.id}
                        onClick={() => {
                          setFilter(item?.filter);
                          handleClose();
                        }}
                        sx={{
                          backgroundColor:
                            filter === item.filter ? "#5C9FFD26" : "white",
                          borderLeft:
                            filter === item.filter
                              ? "3px solid #4692FE"
                              : "unset",
                        }}
                      >
                        <InfoTagText
                          sx={{
                            fontWeight: 400,

                            color:
                              filter === item.filter ? "primary.main" : "#111",
                          }}
                        >
                          {item?.filter}
                        </InfoTagText>
                      </SelectDropDownItem>
                    ))}
                </Box>
              </Popover>
            </Box>
          </Fragment>
        }
        // error={Boolean(touched && errorText)}
        {...inputProps}
      />
      {
        // touched && errorText && (
        //     <FormHelperText error>
        //         {errorText}
        //     </FormHelperText>
        // )
      }
    </Box>
  );
};

export const InputOutlined = (props: Props) => {
  const {
    title,
    sx,
    titleStyle,
    inputStyles,
    touched,
    errorText,
    ...inputProps
  } = props;
  return (
    <Box sx={sx}>
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
      <MuiInput
        disableUnderline
        fullWidth
        sx={{
          color: "#111111",
          backgroundColor: "#F5F7F9",
          "::placeholder": { color: "#BBBBC7" },
          borderRadius: "0.8rem",
          paddingX: "2rem",
          paddingY: "1.3rem",
          fontSize: "1.6rem",
          fontWeight: 400,
          border: "1px solid #EBEBEB",
          ...inputStyles,
        }}
        error={Boolean(touched && errorText)}
        {...inputProps}
      />
      <AppText
        sx={{
          color: touched && errorText ? "error.main" : "transparent",
          lineHeight: "1.5rem",
          fontSize: "1.2rem",
        }}
      >
        {touched && errorText ? errorText : "e"}
      </AppText>
    </Box>
  );
};
