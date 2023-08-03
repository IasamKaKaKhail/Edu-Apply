import { MOCK_DATA } from "@/utils/mockData";
import { Box } from "@mui/material";
import React, { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PlaceholderText, SubHeading } from "../AppText";
import YearPicker from "../YearPicker";
import { GraphLegend } from "./GraphLegend";
import { ToolTipBarChart } from "./ToolTipChart";

const RevenueGraph = () => {
  const [year, setYear] = useState<Date | null>(new Date());
  return (
    <Box
      sx={{
        border: "1px solid #EBEBEB",
        boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
        height: "38rem",
        padding: "2rem",
        borderRadius: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <SubHeading>Total Revenue Earned by Platform</SubHeading>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <GraphLegend color="#83D8F3" title="Earned from Student" />
          <GraphLegend color="#ED927E" title="Earned from Universities" />
          <PlaceholderText sx={{ fontWeight: 500 }}>Sort by:</PlaceholderText>
          <Box
            ml={"-0.5rem"}
            borderRadius={"0.6rem"}
            sx={{
              border: "1px solid #EBEBEB",
              boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
              overflow: "hidden",
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
          <BarChart
            data={MOCK_DATA}
            margin={{ bottom: 0, left: 0, right: 0, top: 0 }}
          >
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
              content={(content) => <ToolTipBarChart content={content} />}
            />

            <Bar
              barSize={11}
              radius={[7, 7, 0, 0]}
              dataKey="revenueFromStudents"
              fill="#83D8F3"
            />
            <Bar
              barSize={11}
              radius={[7, 7, 0, 0]}
              dataKey="revenueFromUniversities"
              fill="#ED927E"
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default RevenueGraph;
