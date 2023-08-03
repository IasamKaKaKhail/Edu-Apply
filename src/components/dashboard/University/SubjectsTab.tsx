import {
  BACHELORS_PROGRAMS,
  FOUNDATION_PROGRAMS,
  MASTERS_PROGRAMS,
  PHD_PROGRAMS,
} from "@/utils/mockData";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import Programs from "./Programs";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SubjectsTab() {
  const [value, setValue] = React.useState(0);

  //@ts-ignore
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Types of courses"
        >
          <Tab
            label="Foundations"
            {...a11yProps(0)}
            sx={{ textTransform: "none", fontSize: "1.8rem" }}
          />
          <Tab
            label="Bachelors"
            {...a11yProps(1)}
            sx={{ textTransform: "none" }}
          />
          <Tab
            label="Masters"
            {...a11yProps(2)}
            sx={{ textTransform: "none" }}
          />
          <Tab label="PHD" {...a11yProps(3)} sx={{ textTransform: "none" }} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Programs programs={FOUNDATION_PROGRAMS} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Programs programs={BACHELORS_PROGRAMS} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Programs programs={MASTERS_PROGRAMS} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Programs programs={PHD_PROGRAMS} />
      </TabPanel>
    </Box>
  );
}
