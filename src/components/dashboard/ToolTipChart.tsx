import { Box } from "@mui/material";
import React from "react";
import { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { PlaceholderText } from "../AppText";

export const ToolTipAreaChart = ({
  content,
}: {
  content: TooltipProps<ValueType, NameType>;
}) => {
  const { active, payload, label } = content;
  if (active && payload) {
    return (
      <Box
        sx={{
          padding: "1.2rem",
          backgroundColor: "white",
          borderRadius: "0.5rem",
          border: "1px solid #EBEBEB",
          boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
        }}
      >
        <PlaceholderText sx={{ color: "#111111", fontWeight: 600 }}>
          {label}
        </PlaceholderText>
        <Box sx={{ display: "flex" }}>
          <PlaceholderText sx={{ color: payload[0]?.color, fontWeight: 600 }}>
            {payload[0]?.value}
          </PlaceholderText>
          <PlaceholderText
            sx={{ textTransform: "capitalize", fontWeight: 600 }}
          >
            &nbsp;{payload[0]?.name}
          </PlaceholderText>
        </Box>
        <Box sx={{ display: "flex" }}>
          <PlaceholderText sx={{ color: payload[1]?.color, fontWeight: 600 }}>
            {payload[1]?.value}
          </PlaceholderText>
          <PlaceholderText
            sx={{ textTransform: "capitalize", fontWeight: 600 }}
          >
            &nbsp;{payload[1]?.name}
          </PlaceholderText>
        </Box>
      </Box>
    );
  } else return null;
};

export const ToolTipBarChart = ({
  content,
}: {
  content: TooltipProps<ValueType, NameType>;
}) => {
  const { active, payload, label } = content;
  if (active && payload) {
    return (
      <Box
        sx={{
          border: "1px solid #EBEBEB",
          boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
          padding: "1.2rem",
          backgroundColor: "white",
          borderRadius: "0.5rem",
        }}
      >
        <PlaceholderText sx={{ color: "#111111", fontWeight: 600 }}>
          {label}
        </PlaceholderText>
        <Box sx={{ display: "flex" }}>
          <PlaceholderText sx={{ color: payload[0]?.color, fontWeight: 600 }}>
            {payload[0]?.value}
          </PlaceholderText>
          <PlaceholderText
            sx={{ textTransform: "capitalize", fontWeight: 600 }}
          >
            &nbsp;{payload[0]?.name}
          </PlaceholderText>
        </Box>
        <Box sx={{ display: "flex" }}>
          <PlaceholderText sx={{ color: payload[1]?.color, fontWeight: 600 }}>
            {payload[1]?.value}
          </PlaceholderText>
          <PlaceholderText
            sx={{ textTransform: "capitalize", fontWeight: 600 }}
          >
            &nbsp;{payload[1]?.name}
          </PlaceholderText>
        </Box>
      </Box>
    );
  } else return null;
};

export const BarShape = ({ bar }: any) => (
  <div
    style={{
      width: bar.width,
      height: bar.height,
      backgroundColor: bar.fill,
      // borderTopLeftRadius: width / 2,
      // borderTopRightRadius: width / 2
    }}
  />
);
