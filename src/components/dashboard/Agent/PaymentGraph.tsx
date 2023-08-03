import { MOCK_DATA } from "@/utils/mockData";
import { Box } from "@mui/material";
import React, { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PlaceholderText, SubHeading } from "../../AppText";
import YearPicker from "../../YearPicker";
import { GraphLegend } from "../GraphLegend";
import { ToolTipAreaChart } from "../ToolTipChart";

const PaymentGraph = () => {
  const [year, setYear] = useState<Date | null>(new Date());

  return (
    <Box
      sx={{
        height: "38rem",
        padding: "2rem",
        borderRadius: "1rem",
      }}
    >
      <Box
        sx={{
          maxHeight: "5rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <SubHeading>Payment</SubHeading>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <GraphLegend color="#76C7E0" title="Total Revenue" />
          <GraphLegend color="#F5CB77" title="Agent Commission" />
          <PlaceholderText sx={{ fontWeight: 500 }}>Sort by:</PlaceholderText>
          <Box
            ml={"-0.5rem"}
            borderRadius={"0.6rem"}
            sx={{
              overflow: "hidden",
              border: "1px solid #EBEBEB",
              boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
            }}
          >
            <YearPicker
              value={year}
              onChange={(newValue) => {
                setYear(newValue);
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          height: "calc(100% - 5rem)",
          marginTop: "2rem",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={MOCK_DATA}
            margin={{ bottom: 0, left: 0, right: 0, top: 0 }}
          >
            <defs>
              <linearGradient id="students" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F5CB77" stopOpacity={0.4} />
                <stop offset="80%" stopColor="#F5CB77" stopOpacity={0.04} />
              </linearGradient>
              <linearGradient id="agents" x1="0" y1="0" x2="1" y2="1">
                <stop offset="5%" stopColor="#76C8E1" stopOpacity={0.4} />
                <stop offset="80%" stopColor="#76C8E1" stopOpacity={0.04} />
              </linearGradient>
            </defs>

            <YAxis
              axisLine={false}
              tickLine={false}
              width={30}
              allowDecimals={false}
              domain={[
                0,
                (dataMax: number) => Math.ceil(dataMax / 100) * 100 + 100,
              ]}
              tickMargin={4}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tickMargin={12}
            />

            <CartesianGrid vertical={false} opacity={0.5} />
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              content={(content) => <ToolTipAreaChart content={content} />}
            />
            <Area
              dot={{ stroke: "#F5CB77", fill: "white" }}
              activeDot={{ stroke: "white", fill: "#F5CB77", strokeWidth: 2 }}
              type="monotone"
              dataKey="students"
              stroke="#F5CB77"
              fillOpacity={1}
              fill="url(#students)"
              strokeWidth={2}
            />
            <Area
              dot={{ stroke: "#76C8E1", fill: "white" }}
              activeDot={{ stroke: "white", fill: "#76C8E1", strokeWidth: 2 }}
              type="monotone"
              dataKey="agents"
              stroke="#76C8E1"
              fillOpacity={1}
              fill="url(#agents)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default PaymentGraph;
