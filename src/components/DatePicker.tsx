import { Theme } from "@emotion/react";
import { ButtonBase, SxProps } from "@mui/material";
import {
  DatePicker as MUIDatePicker,
  DatePickerProps,
} from "@mui/x-date-pickers";
import moment from "moment";
import React, { useState } from "react";
import { AppText } from "./AppText";

interface Props extends Omit<DatePickerProps<Date, Date>, "renderInput"> {
  sx?: SxProps<Theme> | undefined;
  textStyle?: SxProps<Theme> | undefined;
}

const DatePicker = ({ sx, textStyle, ...props }: Props) => {
  const [openPicker, setOpenPicker] = useState(false);
  return (
    <MUIDatePicker
      {...props}
      open={openPicker}
      onClose={() => setOpenPicker(false)}
      renderInput={({ inputRef }) => (
        <ButtonBase
          ref={inputRef}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "4.4rem",
            width: "13.3rem",
            ...sx,
          }}
          onClick={() => setOpenPicker(!openPicker)}
        >
          <AppText
            sx={{
              fontWeight: 600,
              fontSize: "1.8rem",
              lineHeight: "2.4rem",
              ...textStyle,
            }}
          >
            {`${moment(props.value).format("YYYY")}-${moment(props.value)
              .add(1, "y")
              .format("YY")}`}
          </AppText>

          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.333 23.9229H39.6663"
              stroke="#BBBBC7"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 33.2559H23.3333"
              stroke="#BBBBC7"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.25 33.2559H30.9167"
              stroke="#BBBBC7"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.513 18.0889H34.4747C38.628 18.0889 39.6663 19.1155 39.6663 23.2105V32.7889C39.6663 36.8839 38.628 37.9105 34.4863 37.9105H21.513C17.3713 37.9222 16.333 36.8955 16.333 32.8005V23.2105C16.333 19.1155 17.3713 18.0889 21.513 18.0889Z"
              stroke="#BBBBC7"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </ButtonBase>
      )}
    />
  );
};
export default DatePicker;
