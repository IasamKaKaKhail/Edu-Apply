import { Theme } from "@emotion/react";
import { ButtonBase, SxProps } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import React, { useState } from "react";
import { AppText } from "./AppText";
import { PickerArrowDown } from "./dashboard/Svgs";
type Props = {
  value: Date | null;
  onChange: (value: React.SetStateAction<Date | null>) => void;
  sx?: SxProps<Theme> | undefined;
  textStyle?: SxProps<Theme> | undefined;
};
const YearPicker = ({ value, onChange, sx, textStyle }: Props) => {
  const [openPicker, setOpenPicker] = useState(false);
  return (
    <DatePicker
      views={["year"]}
      label="Year only"
      value={value}
      open={openPicker}
      onClose={() => setOpenPicker(false)}
      onChange={onChange}
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
            {`${moment(value).format("YYYY")}-${moment(value)
              .add(1, "y")
              .format("YY")}`}
          </AppText>
          <PickerArrowDown
            transform="scale(0.75)"
            style={{ marginLeft: "0.5rem" }}
          />
        </ButtonBase>
      )}
    />
  );
};
export default YearPicker;
