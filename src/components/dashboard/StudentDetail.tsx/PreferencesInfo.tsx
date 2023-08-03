import { AppText, PlaceholderText } from "@/components/AppText";
import { SxProps, Theme } from "@mui/material";
import React from "react";
import { Col } from "../styled";
type Props = {
  field: string;
  value: string;
  sx?: SxProps<Theme> | undefined;
  fieldSx?: SxProps<Theme> | undefined;
  valueSx?: SxProps<Theme> | undefined;
};
const PreferenceInfo = ({ field, value, sx, fieldSx, valueSx }: Props) => {
  return (
    <Col sx={sx}>
      <PlaceholderText sx={fieldSx}>{field}</PlaceholderText>
      <AppText sx={{ fontWeight: 500, ...valueSx }}>{value}</AppText>
    </Col>
  );
};
export default PreferenceInfo;
